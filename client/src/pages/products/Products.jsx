import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Input } from "@mui/material";
import products from "../../data/Products";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Box } from "@mui/system";
import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";


const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("");
  const searchFunction = (e) => {
    const {name, value} = e.target;
    if(name === "search"){
      setSearchTerm(value)
    }else if(name === "category"){
      setCategoryTerm(value)
    }
  };

  const filtered = (product) => {
    const name = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const category = product.category.toLowerCase().includes(categoryTerm.toLowerCase());
    return name && category
  };
  const filteredProducts = products.filter(filtered);
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", p: 2 }}>
      <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Input
          placeholder="Cari sesuatu?"
          type="text"
          onChange={searchFunction}
          name="search"
          value={searchTerm}
          sx={{ p: 1 }}
        />
        <FormControl sx={{width: 300}}>
          <InputLabel>Kategori</InputLabel>
          <Select
            name="category"
            label="Kategori"
            value={categoryTerm} // Gunakan categoryTerm di sini
            onChange={searchFunction}
          >
            <MenuItem value="">Semua</MenuItem>
            {categories.map((item, index) => (
              <MenuItem key={index} value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
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
                  fontSize: '0.9rem'
                }}
              >
                {product.name}
              </Typography>
              <Typography fontWeight="bold" sx={{ fontSize: '1rem' }}>
                {`Rp.${parseFloat(
                  product.price
                ).toLocaleString("id-ID")}`}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ display: "flex", alignItems: "center", fontSize: '0.75rem' }}>
                  <StarRoundedIcon sx={{ color: "orange" }} />
                  {product.rating}
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center", fontSize: '0.75rem' }}>
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
