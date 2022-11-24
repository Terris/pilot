import { useState, FormEvent, useMemo } from "react";
import { ref, object, string } from "yup";
import PublicLayout from "../layouts/PublicLayout";
import { useAuth } from "../context/AuthContext";
import { TextInput, Button, Alert } from "../components";
import { joinErrors } from "../utils/validation";

const validationSchema = object({
  email: string()
    .email("Please use a valid email address.")
    .required("Email is required."),
  password: string().required("Password is required."),
  passwordConfirmation: string()
    .oneOf([ref("password"), null], "Passwords must match.")
    .required("Password confirmation is required."),
});

function SignUpPage() {
  const {
    signUp,
    error: serverError,
    loading,
  } = useAuth({ redirectAuthenticatedTo: "/dashboard" });
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [validationError, setValidationError] = useState<string | null>(null);

  async function handleSignUp(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    setValidationError(null);
    try {
      await validationSchema.validate(
        { email, password, passwordConfirmation },
        { abortEarly: false }
      );
      signUp({ email, password });
    } catch (error: any) {
      const errorMessage = joinErrors([...error.inner]);
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
    <PublicLayout>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2>Sign Up</h2>
        {mergedErrors && <Alert alert={mergedErrors} />}
        <form onSubmit={handleSignUp}>
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
          <TextInput
            name="passwordConfirmation"
            label="Confirm Password"
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            value={passwordConfirmation}
            type="password"
            disabled={loading}
          />
          <Button title="Sign Up" primary disabled={loading} />
        </form>
      </div>
    </PublicLayout>
  );
}

export default SignUpPage;
