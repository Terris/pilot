import { useState, FormEvent, useMemo } from "react";
import { object, string } from "yup";
import PublicLayout from "src/layouts/PublicLayout";
import { useAuth } from "src/context/AuthContext";
import { TextInput, Button, Alert } from "src/components";
import { joinErrors } from "src/utils";

const validationSchema = object({
  email: string()
    .email("Not a valid email address.")
    .required("Email is required."),
  password: string().required("Password is required."),
});

function SignInPage() {
  const {
    signIn,
    error: serverError,
    loading,
  } = useAuth({ redirectAuthenticatedTo: "/dashboard" });
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validationError, setValidationError] = useState<string | null>(null);

  async function handleSignIn(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    setValidationError(null);
    try {
      await validationSchema.validate(
        { email, password },
        { abortEarly: false }
      );
      signIn({ email, password });
    } catch (error: any) {
      const errorMessage = joinErrors(error.inner);
      setValidationError(errorMessage);
    }
  }

  const mergedErrors = useMemo(
    () =>
      serverError || validationError
        ? [serverError, validationError].join(" ")
        : null,
    [serverError, validationError]
  );

  return (
    <PublicLayout pageTitle="Sign In">
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2>Sign In</h2>
        {mergedErrors && <Alert alert={mergedErrors} />}
        <form onSubmit={handleSignIn}>
          <TextInput
            name="email"
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={loading}
          />
          <TextInput
            name="password"
            label="Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="password"
            disabled={loading}
          />
          <Button title="Sign In" primary disabled={loading} />
        </form>
      </div>
    </PublicLayout>
  );
}

export default SignInPage;
