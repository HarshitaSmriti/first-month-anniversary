import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Valentine from "./pages/Valentine";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Journey from "./pages/Journey";
import Letter from "./pages/Letter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/valentine" element={<Valentine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
