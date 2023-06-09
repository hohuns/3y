import { Box, Button, Typography } from "@mui/material";
import moment from "moment";
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState<Date>(new Date());
  const [greeting, setGreeting] = useState<string>("");
  const buttonStyle = {
    color: "white",
    borderColor: "white",
    fontWeight: 100,
    borderWidth: 0.1,
  };
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
  const fontStyle = {
    fontWeight: 100,
    color: "white",
    textAlign: "center",
    fontSize: "1.8rem",
  };
  // Real time clock management
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const greetingGenarator = () => {
    const temp: string = moment(value).format("YYYY/MM/DD, h:mm:ss A");
    if (temp?.includes("2023/06/10") && temp.includes("AM")) {
      setGreeting("Good morning. Sarah. You can try first act now.");
    } else if (temp?.includes("2023/06/10") && temp.includes("PM")) {
      setGreeting("Good Evening. Sarah. You can try first act now.");
    } else if (temp?.includes("2023/06/17") && temp.includes("PM")) {
      setGreeting("Good Evening. Sarah. You can try second act now.");
    } else if (temp?.includes("2023/06/17") && temp.includes("PM")) {
      setGreeting("Good Evening. Sarah. You can try second act now.");
    } else if (temp.includes("AM")) {
      setGreeting("Good morning. Sarah");
    } else if (temp.includes("PM")) {
      setGreeting("Good Evening. Sarah");
    } else {
      setGreeting("Welcome. Sarah");
    }
  };

  // Setting up greeting according to time based
  useEffect(() => {
    greetingGenarator();
    return () => {
      setGreeting("");
    };
  }, [value]);

  return (
    <Box sx={boxStyle}>
      <Typography gutterBottom sx={fontStyle}>
        {greeting ?? "None"}
      </Typography>
      <Typography sx={{ ...fontStyle }}>
        {moment(value).format("YYYY/MM/DD, h:mm:ss A") ?? "None"}
      </Typography>
      {moment(value)
        .format("YYYY/MM/DD, h:mm:ss A")
        ?.includes("2023/06/10") && (
        <Button variant="outlined" sx={buttonStyle}>
          First Act
        </Button>
      )}
      {moment(value)
        .format("YYYY/MM/DD, h:mm:ss A")
        ?.includes("2023/06/17") && (
        <Button variant="outlined" sx={buttonStyle}>
          Second Act
        </Button>
      )}
    </Box>
  );
}

export default App;
