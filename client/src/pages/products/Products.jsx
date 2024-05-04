import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Input } from "@mui/material";
import products from "../../data/Products";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Box } from "@mui/system";
import { useState } from "react";


const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchFunction = (e) => {
    setSearchTerm(e.target.value);
  };

  const filtered = (product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  };
  const filteredProducts = products.filter(filtered);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", p: 2 }}>
      <Box>
        <Input
          placeholder="Cari sesuatu?"
          type="text"
          onChange={searchFunction}
          value={searchTerm}
          sx={{ p: 1 }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          mt: 2,
        }}
      >
        {filteredProducts.map((product) => (
          <Card key={product.name} sx={{ width: 210, minHeight: 280 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={product.image[0] ? product.image[0].link : null}
                sx={{ minHeight: 200, objectFit: "cover" }}
                alt={product.name}
              />
            </CardActionArea>
            <CardContent>
              <Typography
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {product.name}
              </Typography>
              <Typography fontWeight="bold">{`Rp.${parseFloat(
                product.price
              ).toLocaleString("id-ID")}`}</Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <StarRoundedIcon sx={{ color: "orange" }} />
                  {product.rating}
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  Stok: {product.stock}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Products;
