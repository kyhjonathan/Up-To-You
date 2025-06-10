import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../contexts/authContexts";
import { Alert, Box, Button, TextField, Link, Typography } from "@mui/material";
import { sendEmailVerification } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError("");
      setMessage("");
      setLoading(true);

      const result = await signup(email, password);
      console.log("User created:", result.user.email);

      console.log("Sending verification email...");
      await sendEmailVerification(result.user);
      console.log("Verification email sent successfully!");

      setMessage(
        `Account created! Verification email sent to ${email}. Please check your inbox.`
      );
    } catch {
      console.error("Signup error:", error);
      setError("Failed to create account");
    }

    setLoading(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSignUp}
      sx={{ maxWidth: 400, mx: "auto", p: 2 }}
    >
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      {message && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {message}
        </Alert>
      )}

      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>

      <TextField
        label="Email:"
        type="email"
        value={email}
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
      />

      <TextField
        label="Password:"
        type="password"
        value={password}
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
        disabled={loading}
        fullWidth
        sx={{ my: 2 }}
      >
        {loading ? "Creating Account..." : "Sign Up"}
      </Button>

      <Link component={RouterLink} to="/signin">
        Already a User? Sign in here!
      </Link>
    </Box>
  );
};

export default SignUp;
