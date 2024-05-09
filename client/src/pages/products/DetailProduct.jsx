import { Box } from "@mui/system";
import Appbar from "../../components/appbar/Appbar";
import Footer from "../../components/footer/Footer";
import Typography from "@mui/material/Typography";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useState } from "react";

const createMarkUp = (html) => {
  return { __html: html };
};

const DetailProduct = () => {
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
    desc: '<p><span style="color: rgb(33, 33, 33);">Infinix INBOOK X2</span></p><p><span style="color: rgb(33, 33, 33);">Color : Grey, Blue, Red</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Perfect Style, Amazing Display</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• Processor : octa-core (2 x 1.6 GHz Cortex-A75 dan 6 x 1.6 GHz Cortex-A55)</span></p><p><span style="color: rgb(33, 33, 33);">• Memory : 4GB</span></p><p><span style="color: rgb(33, 33, 33);">• Storage : 128 GB emmc</span></p><p><span style="color: rgb(33, 33, 33);">• Operating System : Android 12 with XOS</span></p><p><span style="color: rgb(33, 33, 33);">• Display : IPS LCD 6.6 in dengan resolusi 720 x 1612 piksel, refresh rate 90 Hz, dan kecerahan maksimal 500 nits</span></p><p><span style="color: rgb(33, 33, 33);">• Graphics : GPU Mali-G57 MP1;">• Battery : 50 Wh</span></p><p><span style="color: rgb(33, 33, 33);">• Wi-Fi : IEEE 802.11a/b/g/n/ac,160MHz 2.4GHz and 5GHz</span></p><p><span style="color: rgb(33, 33, 33);">• Bluetooth : BT 5.1</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Garansi Resmi Infinix Indonesia 2 Tahun</span></p>',
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

  const [imageIndex, setIndex] = useState(0);

  const left = () => {
    setIndex((imageIndex - 1 + product.image.length) % product.image.length);
  };

  const right = () => {
    setIndex((imageIndex + 1) % product.image.length);
  };
  return (
    <Box>
      <Appbar />
      <Box sx={{ display: "flex", minHeight: "85vh" }}>
        <Box sx={{ display: "flex", flex: 2, alignItems: "start" }}>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={product.image[imageIndex].link}
                alt={product.name}
                style={{
                  height: "380px",
                  width: "380px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                width: "380px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <IconButton onClick={left}>
                <KeyboardArrowLeftRoundedIcon />
              </IconButton>
              <IconButton onClick={right}>
                <KeyboardArrowRightRoundedIcon />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              p: 2,
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              {product.name}
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "0.75rem",
                color: "grey",
              }}
            >
              <StarRoundedIcon sx={{ color: "orange" }} />
              {product.rating} dari ({product.reviews.length} reviewers)
            </Typography>
            <Typography sx={{ color: "grey", fontSize: "0.75rem" }}>
              {product.weight} gram
            </Typography>
            <Typography sx={{ fontWeight: "bold" }} variant="h5">
              {`Rp.${parseFloat(product.price).toLocaleString("id-ID")}`}
            </Typography>
            <Typography
              dangerouslySetInnerHTML={createMarkUp(product.desc)}
              sx={{
                "& p": {
                  margin: 0,
                  padding: 0,
                  fontSize: "14px",
                },
              }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flex: 1, p: 2 }}>Order</Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default DetailProduct;
