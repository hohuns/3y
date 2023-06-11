import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ScratchCard from "react-scratchcard-v3";
import img11 from "../../assets/images/img11.png";
import img12 from "../../assets/images/img12.png";
import img13 from "../../assets/images/img13.png";
import img14 from "../../assets/images/img14.png";
import img15 from "../../assets/images/img15.png";
import img16 from "../../assets/images/img16.png";

import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import lottieImage from "../../lotties/loading.json";

const imgArray = [img11, img12, img13, img14, img15, img16];

const imageHandler = () => {
  let tmpImg = imgArray;
  const shuffled = tmpImg?.sort(() => Math.random() - 0.5);
  return shuffled[0];
};

function SecondAct() {
  const [img, setImg] = useState<any>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const prob: number = Math.floor(Math.random() * 10);
  let navigate = useNavigate();
  const boxStyle = {
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "40rem",
    height: "100vh",
    padding: "1rem",
    backgroundImage: "linear-gradient(to right bottom, #4ca1af , #c4e0e5)",
    flexDirection: "column",
    gap: 3,
    overflow: "hidden",
    touchAction: "none",
  };
  const buttonStyle = {
    color: "white",
    borderColor: "white",
    fontWeight: 100,
  };
  const fontStyle = {
    fontWeight: 100,
    color: "white",
    textAlign: "center",
    fontSize: "1.8rem",
  };

  // Everytime component is renedered then shuffled image
  useEffect(() => {
    const tempImg = imageHandler();
    setImg(tempImg);
    if (img) {
      setIsLoaded(true);
    }
  }, [img]);

  // Button handler
  const completeHandler = () => {
    if (prob >= 6) {
      alert("Congratulation..!🥳🎉 You won the lottery. First code is fa2d.");
    } else {
      alert("Failed..!💣💥💥 Please try again.");
    }
  };

  return (
    <Box sx={boxStyle}>
      <Button
        variant="outlined"
        sx={buttonStyle}
        onClick={() => {
          navigate("/main");
        }}
      >
        back
      </Button>
      {isLoaded ? (
        <>
          <ScratchCard
            width={350}
            height={400}
            image={img}
            finishPercent={40}
            onComplete={() => {
              completeHandler();
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ ...fontStyle }}>
                {prob >= 6 ? "Win" : "Fail"}
              </Typography>
            </div>
          </ScratchCard>
        </>
      ) : (
        <>
          <Lottie animationData={lottieImage} />
          <Typography sx={{ ...fontStyle }}>Loading Image...</Typography>
        </>
      )}
    </Box>
  );
}

export default SecondAct;
