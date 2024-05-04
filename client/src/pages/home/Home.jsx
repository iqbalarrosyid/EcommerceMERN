import Appbar from "../../components/appbar/Appbar";
import Footer from "../../components/footer/Footer";
import { Box } from "@mui/material";
import Products from "../products/Products";

const Home = () => {
  return (
    <div>
      <Appbar />
      <Box
        sx={{
          minHeight: 700,
          m: 2,
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <Products />
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
