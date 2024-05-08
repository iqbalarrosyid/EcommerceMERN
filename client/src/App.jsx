import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import DetailProduct from "./pages/products/DetailProduct";
import theme from "./Theme"; // Import tema yang dibuat sebelumnya

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Mengatur baseline CSS untuk Material UI */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<DetailProduct />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
