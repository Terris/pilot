import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "src/context/AuthContext";

interface UsePrivateRouteProps {
  redirectTo?: string;
}

export default function usePrivateRoute({
  redirectTo = "/signin",
}: UsePrivateRouteProps = {}) {
  const router = useRouter();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      router.push(redirectTo);
    }
  }, [currentUser]);
}
