import { IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ProfileIcon = () => {
  return (
    <IconButton
      component={Link}
      to="/signin"
      color={
        ["/signin", "/signup"].includes(location.pathname)
          ? "primary"
          : "inherit"
      }
      size="medium"
    >
      <AccountCircle sx={{ fontSize: 40 }} />
    </IconButton>
  );
};

export default ProfileIcon;
