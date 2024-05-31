import Appbar from "../../components/appbar/Appbar";
import Footer from "../../components/footer/Footer";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Typography, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Order from "./Order";

const product = {
  _id: {
    $oid: "6566c165801e99be12650c22",
  },
  name: "Infinix Smart 8",
  image: [
    {
      link: "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/7/0e8293e0-ceb4-4b7a-8cae-f13b3c2f2070.jpg",
    },
    {
      link: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/109/MTA-146396881/infinix_infinix_smart_8_ram_4-4-128gb_garansi_resmi_full01_jj07cz3z.jpg",
    },
  ],
  desc: '<p><span style="color: rgb(33, 33, 33);">Infinix INBOOK X2</span></p><p><span style="color: rgb(33, 33, 33);">Color : Grey, Blue, Red</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Perfect Style, Amazing Display</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• Processor : Intel® Core™ i7-1065G7 Processor 8M Cache, up to 3.90 GHz</span></p><p><span style="color: rgb(33, 33, 33);">• Memory : 8GB DDR4</span></p><p><span style="color: rgb(33, 33, 33);">• Storage : SSD 512GB M.2 NVMe PCIe 3.0</span></p><p><span style="color: rgb(33, 33, 33);">• Operating System : Windows 11 Home</span></p><p><span style="color: rgb(33, 33, 33);">• Display : 14" FHD (1920*1080) IPS 300 nits, Colour Gamut100% sRGB, Viewing Angle178 degrees</span></p><p><span style="color: rgb(33, 33, 33);">• Graphics : Intel® Iris® Plus Graphics</span></p><p><span style="color: rgb(33, 33, 33);">• Battery : 50 Wh</span></p><p><span style="color: rgb(33, 33, 33);">• Wi-Fi : IEEE 802.11a/b/g/n/ac,160MHz 2.4GHz and 5GHz</span></p><p><span style="color: rgb(33, 33, 33);">• Bluetooth : BT 5.1</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• Ports :</span></p><p><span style="color: rgb(33, 33, 33);">USB-C x 1 (Data, Charging and DisplayPort)</span></p><p><span style="color: rgb(33, 33, 33);">USB-C x 1 (Data)</span></p><p><span style="color: rgb(33, 33, 33);">USB 3.0 × 2</span></p><p><span style="color: rgb(33, 33, 33);">HDMI 1.4 × 1</span></p><p><span style="color: rgb(33, 33, 33);">SD card slot x 1</span></p><p><span style="color: rgb(33, 33, 33);">3.5 mm Headset and Microphone Jack x 1</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• Keyboard : Full-size Backlit Chiclet Keyboard</span></p><p><span style="color: rgb(33, 33, 33);">• Touchpad : Touchpad with Multi-touch</span></p><p><span style="color: rgb(33, 33, 33);">• Camera : Dual-Star light HD Video Camera</span></p><p><span style="color: rgb(33, 33, 33);">• Audio : Dual DTS audio processing</span></p><p><span style="color: rgb(33, 33, 33);">• Microphone : Microphone x 2</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• In The Box :</span></p><p><span style="color: rgb(33, 33, 33);">Inbook X2</span></p><p><span style="color: rgb(33, 33, 33);">45W USB-C Power Adapter</span></p><p><span style="color: rgb(33, 33, 33);">USB-C Charger Cable</span></p><p><span style="color: rgb(33, 33, 33);">Quick Start Guide</span></p><p><span style="color: rgb(33, 33, 33);">Warranty Card</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Case : Aluminium Alloy</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Garansi Resmi Infinix Indonesia 2 Tahun</span></p>',
  category: "Kursi",
  price: 1500000,
  capital: 650000,
  profit: 150000,
  stock: 7,
  weight: 5000,
  rating: 5,
  reviews: [
    {
      user: "64aa82aba176b956ba898500",
      rating: 4,
      comment: "Kursi yang sangat nyaman dan cocok untuk bersantai.",
    },
    {
      user: "64aa82aba176b956ba898501",
      rating: 5,
      comment: "Kursi yang sangat nyaman dan cocok untuk udud.",
    },
    {
      user: "64aa82aba176b956ba898503",
      rating: 4.5,
      comment: "Kursi yang sangat nyaman dan cocok untuk ngopi.",
    },
  ],
};
const Cart = () => {
  return (
    <>
      <Appbar />
      <Box sx={{ margin: "30px" }}>
        <Typography variant="h6" fontWeight={"bold"}>
          Keranjang Belanja
        </Typography>
        <Box sx={{ display: "flex", height: "auto" }}>
          <Box
            sx={{
              display: "flex",
              flex: 2,
              padding: "20px",
              gap: "20px",
              alignItems: "start",
            }}
          >
            <img
              src={product.image[0].link}
              alt="img"
              style={{ height: "120px", width: "120px", objectFit: "cover" }}
            />
            <Box
              sx={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography fontWeight="bold">{product.name}</Typography>
              <Typography fontWeight="bold">{`Rp.${parseFloat(
                product.price
              ).toLocaleString("id-ID")}`}</Typography>
              <Typography fontSize={14} fontStyle="italic">
                {product.weight} gram
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  padding: "5px",
                  justifyContent: "end",
                }}
              >
                <IconButton>
                  <DeleteIcon />
                </IconButton>
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
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Order />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Cart;
