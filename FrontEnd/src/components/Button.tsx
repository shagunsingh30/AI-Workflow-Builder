/* eslint-disable @typescript-eslint/no-explicit-any */
import "./../styles/button.css";
import Button from "@mui/material/Button";
interface ButtonProps {
  text: string;
  icon?: any;
  variant?: "primary" | "secondary";
  click?: () => void;
  isAble?: boolean;
}

export default function CustomButton({
  text,
  icon,
  variant = "primary",
  click,
  isAble,
}: ButtonProps) {
  return (
    <Button
      className={`btn ${variant}`}
      onClick={click}
      startIcon={icon}
      disabled={isAble}
    >
      {/* {icon && <span className="btn-icon">{icon}</span>} */}
      {text}
    </Button>
  );
}
