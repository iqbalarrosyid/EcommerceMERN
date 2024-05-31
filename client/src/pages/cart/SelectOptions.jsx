import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

const SelectOptions = ({ provinsi, kota, kurir, layanan, alamat }) => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [courier, setCourier] = useState("");
  const [service, setService] = useState("");
  const [address, setAddress] = useState("");

  const handleProvince = (event) => {
    setProvince(event.target.value);
    provinsi(event.target.value);
  };
  const handleCity = (event) => {
    setCity(event.target.value);
    kota(event.target.value);
  };
  const handleCourier = (event) => {
    setCourier(event.target.value);
    kurir(event.target.value);
  };
  const handleService = (event) => {
    setService(event.target.value);
    layanan(event.target.value);
  };

  useEffect(() => {
    alamat(address);
  }, [address]);
  return (
    <Box
      sx={{
        minWidth: 120,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <FormControl fullWidth sx={{ typography: { fontSize: 14 } }}>
        <InputLabel id="demo-simple-select-label">Provinsi</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={province}
          label="Provinsi"
          onChange={handleProvince}
        >
          <MenuItem value="Jawa Tengah">Jawa Tengah</MenuItem>
          <MenuItem value="Jawa Timur">Jawa Timur</MenuItem>
          <MenuItem value="D.I. Yogyakarta">D.I. Yogyakarta</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Kota/Kabupaten</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Kota/Kabupaten"
          onChange={handleCity}
        >
          <MenuItem value="Kota Yogyakarta">Kota Yogyakarta</MenuItem>
          <MenuItem value="Kabupaten Bantul">Kabupaten Bantul</MenuItem>
          <MenuItem value="Kabupaten Sleman">Kabupaten Sleman</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Kurir</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={courier}
          label="Kurir"
          onChange={handleCourier}
        >
          <MenuItem value="POS">POS</MenuItem>
          <MenuItem value="JNE">JNE</MenuItem>
          <MenuItem value="Tiki">Tiki</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Layanan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={service}
          label="Layanan"
          onChange={handleService}
        >
          <MenuItem value="Layanan 1">Layanan 1</MenuItem>
          <MenuItem value="Layanan 2">Layanan 2</MenuItem>
          <MenuItem value="Layanan 3">Layanan 3</MenuItem>
        </Select>
      </FormControl>

      <textarea
        placeholder="Masukan Alamat"
        style={{ padding: "10px" }}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </Box>
  );
};

export default SelectOptions;
