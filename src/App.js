import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { navbar } from "./utils/navbar";

function App() {
  return (
    <>
      <Routes>
        
          <Route element={<Navbar />}>
            {navbar.map((value, index) => (
              <>
                <Route key={index} path={value.path} element={value.element} />
              </>
            ))}
          </Route>
        
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/" element={<Navigate to={"home"} />} />
      </Routes>
    </>
  );
}

export default App;
