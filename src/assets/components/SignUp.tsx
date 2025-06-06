import { useState } from "react";
import { useAuth } from "../../contexts/authContexts";
import { Box, Button, TextField } from "@mui/material";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();
  const handleSignUp = async () => {
    try {
      await signup(email, password);
    } catch {
      console.error("An error has occured.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSignUp}
      sx={{ maxWidth: 400, mx: "auto", p: 2 }}
    >
      <TextField
        label="Email:"
        type="email"
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
      />

      <TextField
        label="Password:"
        type="password"
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
      />

      <Button type="submit" variant="contained">
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;
