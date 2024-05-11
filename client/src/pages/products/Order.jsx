import { Box, Typography, IconButton, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import SelectOptions from "./SelectOptions";
import { useState } from "react";

const Order = () => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [courier, setCourier] = useState("");
  const [service, setService] = useState("");
  const [address, setAddress] = useState("");

  return (
    <Box
      sx={{
        width: "80%",
        borderRadius: "10px",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        boxShadow: 3,
        height: "710px",
      }}
    >
      <Typography variant="h6" fontWeight={"bold"}>
        Atur Jumlah
      </Typography>
      <Box sx={{ display: "flex", gap: "15px", padding: "5px" }}>
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            padding: "2px",
          }}
        >
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <Box
            sx={{
              width: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
            }}
          >
            1
          </Box>
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
          }}
        >
          Total Stok
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Subtotal</Typography>
        <Typography sx={{ fontWeight: "bold" }}>Rp. 3.000.000</Typography>
      </Box>

      <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
        Alamat Pengiriman
      </Typography>

      <Box>
        <SelectOptions
          provinsi={(p) => setProvince(p)}
          kota={(c) => setCity(c)}
          kurir={(c) => setCourier(c)}
          layanan={(s) => setService(s)}
          alamat={(a) => setAddress(a)}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
          Ongkir
        </Typography>
        <Typography fontWeight={"bold"} fontSize={"16px"}>
          Rp. 30.000
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
          Total
        </Typography>
        <Typography fontWeight={"bold"} fontSize={"16px"}>
          Rp. 3.000.000
        </Typography>
      </Box>

      <Button variant="contained">Keranjang</Button>
      <Button variant="outlined">Beli</Button>
    </Box>
  );
};

export default Order;
