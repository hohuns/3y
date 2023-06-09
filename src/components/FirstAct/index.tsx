import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import ScratchCard from "react-scratchcard-v3";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";
import img9 from "../../assets/images/img9.png";
import img10 from "../../assets/images/img10.png";
import { useNavigate } from "react-router-dom";

function FirstAct() {
  const [currentHeight, setCurrentHeight] = useState<number>(
    window.innerHeight
  );
  const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth);
  const prob: number = Math.floor(Math.random() * 10);
  let navigate = useNavigate();
  const imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];
  const boxStyle = {
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "40rem",
    height: "100vh",
    padding: "1rem",
    "&:active": {
      opacity: [0.9, 0.8, 0.7, 0.2],
    },
    backgroundImage: "linear-gradient(to right bottom, #4ca1af , #c4e0e5)",
    flexDirection: "column",
    gap: 3,
  };
  const buttonStyle = {
    color: "white",
    borderColor: "white",
    fontWeight: 100,
    borderWidth: 0.1,
  };

  //Button functions
  const imageHandler = () => {
    let tmpImg = imgArray;
    const shuffled = tmpImg?.sort(() => Math.random() - 0.5);
    return shuffled[0];
  };

  // Everytime component is renedered then shuffled image
  useEffect(() => {
    imageHandler();
  }, []);

  const completeHandler = () => {
    if (prob >= 6) {
      alert("Congratulation..!🥳🎉 You won the lottery. \nFirst code is 1scd.");
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
      <ScratchCard
        width={currentWidth < 640 ? currentWidth : 640}
        height={currentHeight / 2}
        image={imageHandler()}
        finishPercent={60}
        onComplete={completeHandler}
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
          <h1>{prob}</h1>
        </div>
      </ScratchCard>
    </Box>
  );
}

export default FirstAct;
