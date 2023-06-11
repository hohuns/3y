import { CssBaseline } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/Main";
import FirstAct from "./components/FirstAct";
import SecondAct from "./components/SecondAct";
import Decode from "./components/Decode";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="*" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main></Main>} />
        <Route path="/firstact" element={<FirstAct></FirstAct>} />
        <Route path="/secondact" element={<SecondAct></SecondAct>} />
        <Route path="/decode" element={<Decode></Decode>} />
      </Routes>
    </>
  );
}

export default App;
