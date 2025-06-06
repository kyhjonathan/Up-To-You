import React, { useState } from "react";
import { useAuth } from "../../contexts/authContexts";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Button, TextField, Box, Alert, Link } from "@mui/material";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch {
      setError("Failed to sign in. Check your credentials.");
    }

    setLoading(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, mx: "auto", p: 2 }}
    >
      <h2>Sign In</h2>
      {error && <Alert severity="error">{error}</Alert>}

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

      <Link component={RouterLink} to="/signup">
        Not a User? Sign Up!
      </Link>
    </Box>
  );
};

export default SignIn;
