import {
  Context,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import { Credentials } from "realm-web";
import { realmApp } from "../lib/realm";
import { User } from "src/gql/graphql";

interface AuthCredentials {
  email: string;
  password: string;
}

interface UserConfirmationProps {
  token: string;
  tokenId: string;
}

// SETUP
interface AuthContextProps {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  signUp: ({ email, password }: AuthCredentials) => void;
  signIn: ({ email, password }: AuthCredentials) => void;
  signOut: () => void;
  confirmUser: ({ token, tokenId }: UserConfirmationProps) => void;
  resendConfirmation: ({ email }: { email: string }) => void;
}

const initialProps = {
  currentUser: null,
  loading: false,
  error: null,
  signUp: () => null,
  signIn: () => Promise.resolve(),
  signOut: () => null,
  confirmUser: () => Promise.resolve(),
  resendConfirmation: () => Promise.resolve(),
};

export const AuthContext = createContext<AuthContextProps>(initialProps);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<User | null>(
    initialProps.currentUser
  );
  const [loading, setLoading] = useState<boolean>(initialProps.loading);
  const [error, setError] = useState<string | null>(initialProps.error);

  const refreshAuth = async (): Promise<void> => {
    if (!realmApp.currentUser) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const user = await realmApp?.currentUser?.refreshCustomData();
    setCurrentUser(user);
  };

  useEffect(() => {
    refreshAuth();
  }, []);

  const confirmUser = async ({ token, tokenId }: UserConfirmationProps) => {
    setError(null);
    setLoading(true);
    try {
      await realmApp.emailPasswordAuth.confirmUser({
        token,
        tokenId,
      });
    } catch (error: any) {
      if (error.error === "user token is expired or invalid") {
        setError(
          "Your email confirmation token has expired. Please try to sign in again."
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const resendConfirmation = async ({ email }: { email: string }) => {
    setError(null);
    setLoading(true);
    try {
      await realmApp.emailPasswordAuth.resendConfirmationEmail({
        email,
      });
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const signUp = async ({ email, password }: AuthCredentials) => {
    setError(null);
    setLoading(true);
    try {
      await realmApp.emailPasswordAuth.registerUser({
        email,
        password,
      });
      signIn({ email, password });
    } catch (error: any) {
      if (error.error === "name already in use") {
        setError("That email is already in use.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const signIn = async ({ email, password }: AuthCredentials) => {
    setError(null);
    setLoading(true);
    try {
      const credentials = Credentials.emailPassword(email, password);
      const res = await realmApp?.logIn(credentials);
      const user: any = res?.customData;
      setCurrentUser(user);
    } catch (error: any) {
      if (error.error === "confirmation required") {
        setError("Confirmation required.");
      } else if (error.error === "invalid username/password") {
        setError("Invalid email/password combination.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setCurrentUser(null);
    await realmApp?.currentUser?.logOut();
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        error,
        signUp,
        signIn,
        signOut,
        confirmUser,
        resendConfirmation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = ({
  redirectAuthenticatedTo,
}: {
  redirectAuthenticatedTo?: string;
} = {}) => {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  useEffect(() => {
    if (redirectAuthenticatedTo && authContext.currentUser) {
      router.push(redirectAuthenticatedTo);
    }
  }, [authContext.currentUser, redirectAuthenticatedTo, router]);
  return authContext;
};
