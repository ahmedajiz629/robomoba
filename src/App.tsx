import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import System from "./pages/System";
import Game from "./pages/Game";
import Champions from "./pages/Champions";
import Arena from "./pages/Arena";
import Server from "./pages/Server";
import Development from "./pages/Development";
import Roadmap from "./pages/Roadmap";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/system" element={<System />} />
        <Route path="/game" element={<Game />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/arena" element={<Arena />} />
        <Route path="/server" element={<Server />} />
        <Route path="/development" element={<Development />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;