import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./pages/Home";
import System from "./pages/System";
import Game from "./pages/Game";
import Champions from "./pages/Champions";
import Arena from "./pages/Arena";
import Server from "./pages/Server";
import Development from "./pages/Development";
import Roadmap from "./pages/Roadmap";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
    </ThemeProvider>
  );
}

export default App;
