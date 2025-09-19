import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import StackList from "./routes/StackList";
import WorkFlow from "./routes/WorkFlow";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<StackList />} />
        <Route path="/stack/:stackName" element={<WorkFlow />} />
      </Routes>
    </>
  );
}

export default App;
