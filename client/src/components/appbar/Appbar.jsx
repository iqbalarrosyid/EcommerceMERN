import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Appbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src="/RBlogo.png"
            alt="logo"
            style={{ height: "70px", width: "70px", objectFit: "contain" }}
          />
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton>
              <LoginIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
