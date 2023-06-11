import { Box, Button, TextField, Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import lottieImage from "../../lotties/loading.json";
import Backdrop from "@mui/material/Backdrop";

const Decode = () => {
  let navigate = useNavigate();
  const [isDecoded, setIsDecoded] = useState<boolean>(false);
  const [isDecoding, setIsDecoding] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [decodingCode, setDecodingCode] = useState<string>("");
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
    touchAction: "none",
    // overflow: "hidden",
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

  // Button function
  const decodeButtonHandler = () => {
    if (!decodingCode) {
      alert("Please enter decoding code to use this function.");
    } else if (decodingCode !== "1scdfa2d") {
      alert("Decoding code is wrong..!😑😑");
    } else if (decodingCode === "1scdfa2d") {
      alert("Decoding code is correct..😇 Process okay to initiate Decoding.");
      setIsDecoding(true);
      setOpen(true);
      setTimeout(() => {
        setIsDecoding(false);
        setIsDecoded(true);
        setOpen(false);
      }, 3000);
    }
  };
  return (
    <Box sx={boxStyle}>
      <Stack flexDirection="row" gap={2}>
        <Button
          variant="outlined"
          sx={buttonStyle}
          onClick={() => {
            navigate("/main");
          }}
        >
          back
        </Button>
        {!isDecoded && (
          <Button
            variant="outlined"
            sx={buttonStyle}
            onClick={decodeButtonHandler}
          >
            Decode
          </Button>
        )}
      </Stack>
      {!isDecoded && (
        <TextField
          id="outlined-textarea"
          label="Decoding Code"
          placeholder="Input your decoding code that you obtained from lotteries.."
          focused
          fullWidth={true}
          InputProps={{
            style: { color: "white" },
          }}
          sx={{
            fontWeight: 100,
            "& label.Mui-focused": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          value={decodingCode}
          onChange={(e) => {
            setDecodingCode(e?.target?.value);
          }}
        />
      )}
      {!isDecoded && (
        <TextField
          id="outlined-textarea"
          label="Encrypted Message"
          placeholder="Placeholder"
          multiline
          focused
          fullWidth={true}
          InputProps={{
            readOnly: true,
            style: { color: "white" },
          }}
          sx={{
            fontWeight: 100,
            "& label.Mui-focused": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          value="  NTNv7j0TuYARvmNMmWXo6fKvM4o6nv/aUi9ryX38ZH+L1bkrnD1ObOQ8JAUmHCBq7Iy7otZcyAagBLHVKvvYaIpmMuxmARQ97jUVG16Jkpkp1wXOPsrF9zwew6TpczyHkHgX5EuLg2MeBuiT/qJACs1J0apruOOJCg/gOtkjB4c=eyJ1c2VySWQiOiJhYmNkMTIzIiwiZXhwaXJ5IjoxNjQ2NjM1NjExMzAxfQ."
        />
      )}
      {isDecoded && (
        <TextField
          id="outlined-textarea"
          label="Decoded Message"
          placeholder="Placeholder"
          multiline
          focused
          fullWidth={true}
          InputProps={{
            readOnly: true,
            style: { color: "white" },
          }}
          sx={{
            fontWeight: 100,
            "& label.Mui-focused": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          value="안녕 우리돼지. 우리돼지 한테 오랜만에 편지 적어보네. We had encountered so many issues and incidents during this 2023 year bae. But the main point is that we successfully overcame this already. 우리돼지 너무 수고가 많았어. 많이 힘들었지. 이제 잘될거야. 서로 많이 배려해보자..! Couples over 80 years old, fight and quarrel again in day by days, but they still love each other today. You're like that to me Bae. You are my dream and my love, even though we encounter some fight or conflict, There's no answer to love, but you're the answer to me. That's how I really feel now. 많이 사랑하지 우리돼지"
        />
      )}
      {isDecoding && (
        <Box>
          <Backdrop
            sx={{
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
              display: "flex",
              flexDirection: "column",
            }}
            open={open}
          >
            <Lottie animationData={lottieImage} />
            <Typography sx={{ ...fontStyle }}>Decoding Message...</Typography>
          </Backdrop>
        </Box>
      )}
    </Box>
  );
};

export default Decode;
