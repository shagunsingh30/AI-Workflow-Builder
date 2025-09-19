import LaunchIcon from "@mui/icons-material/Launch";
import "./../styles/typography.css";
import "./../styles/stackCard.css";
import CustomButton from "./Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import type { Stack } from "../store/types/Stack.types";
import { useDispatch } from "react-redux";
import { deleteStacksRequest } from "../store/reducers/StackSlice";

interface StackCardProps {
  stack: Stack;
  onEdit: () => void;
}

export default function StackCard({ stack, onEdit }: StackCardProps) {
  const { name, description } = stack;
  const dispatch = useDispatch();
  return (
    <div className="stack-card">
      <h2 className="heading-lg">{name}</h2>
      <p className="paragraph">{description}</p>
      <div className="stack-card-actions">
        <CustomButton
          text="Delete"
          icon={<DeleteOutlineIcon fontSize="small" sx={{ color: "red" }} />}
          variant="secondary"
          click={() => {
            dispatch(deleteStacksRequest(stack.id));
          }}
        />
        <CustomButton
          text="Edit Stack"
          icon={<LaunchIcon fontSize="small" />}
          variant="secondary"
          click={onEdit}
        />
      </div>
    </div>
  );
}
