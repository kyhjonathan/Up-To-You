import React, { useState } from "react";
import { useAuth } from "../../contexts/authContexts";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Button, TextField, Box, Alert, Link, Typography } from "@mui/material";
import { sendEmailVerification } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEmailVerification, setShowEmailVerification] = useState(false);

  const { login, logout, refreshUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError("");
      setMessage("");
      setLoading(true);

      const result = await login(email, password);

      // Check if email is verified
      if (!result.user.emailVerified) {
        setShowEmailVerification(true);
        setError(
          "Please verify your email before signing in. Check your inbox for a verification email."
        );
        await logout(); // Sign out the user since email isn't verified
        return;
      }

      // If email is verified, proceed to home
      navigate("/");
    } catch {
      setError("Failed to sign in. Check your credentials.");
    }

    setLoading(false);
  };

  const resendVerification = async () => {
    try {
      setError("");
      setLoading(true);

      const result = await login(email, password);
      await sendEmailVerification(result.user);
      await logout();

      setMessage("Verification email sent! Please check your inbox.");
    } catch {
      setError("Failed to resend verification email: ");
    }

    setLoading(false);
  };

  const checkVerification = async () => {
    try {
      setError("");
      setMessage("");
      setLoading(true);

      const result = await login(email, password);
      await refreshUser(); // Refresh user data

      if (result.user.emailVerified) {
        setMessage("Email verified successfully! Redirecting...");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setError(
          "Email not yet verified. Please check your email and click the verification link."
        );
        await logout();
      }
    } catch {
      setError("Failed to check verification status.");
    }

    setLoading(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, mx: "auto", p: 2 }}
    >
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>

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

      <TextField
        fullWidth
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        required
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={loading}
        sx={{ my: 2 }}
      >
        {loading ? "Signing In..." : "Sign In"}
      </Button>

      {showEmailVerification && (
        <Box sx={{ mt: 2, mb: 2 }}>
          <Button
            onClick={resendVerification}
            disabled={loading}
            variant="outlined"
            fullWidth
            sx={{ mb: 1 }}
          >
            Resend Verification Email
          </Button>

          <Button
            onClick={checkVerification}
            disabled={loading}
            variant="text"
            fullWidth
          >
            I've Verified My Email
          </Button>
        </Box>
      )}

      <Link component={RouterLink} to="/signup">
        Not a User? Sign Up!
      </Link>
    </Box>
  );
};

export default SignIn;
