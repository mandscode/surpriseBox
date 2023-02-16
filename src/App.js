import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginDashboard from "./pages/LoginDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
