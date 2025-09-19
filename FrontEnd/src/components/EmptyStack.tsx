import "../styles/typography.css";
import "../styles/emptyStack.css";
import CustomButton from "./Button";
import { useDispatch } from "react-redux";
import { openModal } from "../store/reducers/LayoutSlice";
import AddIcon from "@mui/icons-material/Add";

export default function EmptyStack() {
  const dispatch = useDispatch();
  return (
    <div className="empty-card">
      <h2 className="title">Create New Stack</h2>
      <p className="paragraph">
        You don’t have any stacks yet. Start by creating your first stack and
        begin building intelligent workflows.
      </p>
      <div className="mt-4">
        <CustomButton
          text="New Stack"
          icon={<AddIcon fontSize="large" />}
          variant="primary"
          click={() => dispatch(openModal())}
        />
      </div>
    </div>
  );
}
