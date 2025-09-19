import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center fixed">
      <Link to="/" className="flex items-center space-x-4 cursor-pointer">
        <SmartToyOutlinedIcon fontSize="large" sx={{ color: "green" }} />
        <span className="text-2xl font-bold text-gray-600">GenAI Stack</span>
      </Link>
    </nav>
  );
};

export default Navbar;
