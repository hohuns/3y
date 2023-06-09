import { CssBaseline } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/Main";
import FirstAct from "./components/FirstAct";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="*" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main></Main>} />
        <Route path="/firstact" element={<FirstAct></FirstAct>} />
        <Route path="/secondact" element={<FirstAct></FirstAct>} />
      </Routes>
    </>
  );
}

export default App;
