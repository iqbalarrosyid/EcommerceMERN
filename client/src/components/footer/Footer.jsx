import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: 5,
          backgroundColor: "#f0f0f0",
          "@media (max-width: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box sx={{ paddingRight: 10 }}>
          <img
            src="RBlogo.png"
            alt="Company Logo"
            style={{ width: "70px", height: "70px", marginBottom: 10 }}
          />
          <Typography variant="body2">
            Kami adalah produsen dan juga supplier spesialis besi dan furniture
            dengan harga yang terjangkau dan kualitas yang terjamin.
          </Typography>
        </Box>
        <Box sx={{ paddingTop: 1, paddingRight: 10 }}>
          <Typography variant="body2">
            <h3>Kontak dan Lokasi</h3>
            <br />
            <p>Kontak: 083894056521</p>
            <p>
              393R+5XP, Ngrancah, Sriharjo, Kec. Imogiri, Kabupaten Bantul,
              Daerah Istimewa Yogyakarta 55782
            </p>
          </Typography>
        </Box>
        <Box sx={{ paddingTop: 1 }}>
          <Typography variant="body2">
            <h3>Sosial Media</h3>
            <br />
          </Typography>
          <Box sx={{ display: "flex", gap: 5 }}>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <LocalMallIcon />
          </Box>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", padding: 2, backgroundColor: "#f0f0f0" }}>
        <Typography variant="body2" sx={{ color: "gray" }}>
          &copy; RB Teknik37 {year}
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
