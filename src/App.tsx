import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";

import Login from "./pages/Login";
import Modulos from "./pages/Modulos";
import CourseView from "./pages/CourseView";

const theme = {
  primary: "#0078D4",
  secondary: "#5A5A5A",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/modulos" element={<CourseView />} />
          <Route path="/course" element={<Modulos />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
