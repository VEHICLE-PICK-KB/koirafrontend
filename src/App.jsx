import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tuotelista from "./components/Tuotelista";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
const theme = createTheme({
  // You can customize your theme here
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize the styles */}
      <Router>
        <Routes>
          <Route path="/tuotteet" element={<Tuotelista />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
