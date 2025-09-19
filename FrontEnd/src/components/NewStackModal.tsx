import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { closeModal } from "../store/reducers/LayoutSlice";
import "../styles/typography.css"; // ✅ assuming you already created reusable typography
import CustomButton from "./Button";
import "../styles/form.css";
import { useEffect, useState } from "react";
import {
  addStacksRequest,
} from "../store/reducers/StackSlice";
import type { StackTypeAction } from "../store/types/Stack.types";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

export default function NewStackModal() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.layout.open);

  const handleClose = () => dispatch(closeModal());
  const [stack, setStack] = useState<StackTypeAction>({
    name: "",
    description: "",
  });
  useEffect(() => {
    console.log(stack, "stack");
  }, [stack]);
  //function for adding stack
  const addStack = () => {
    dispatch(addStacksRequest(stack));
    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="new-stack-modal-title"
    >
      <Box sx={style}>
        {/* Heading */}
        <h2 className="heading-lg mb-4">Create New Stack</h2>

        {/* Input Fields */}
        <div className="form-group">
          <label className="body-md mb-1">Name</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter stack name"
            onChange={(e) => {
              setStack({ ...stack, name: e.target.value });
            }}
          />
        </div>

        <div className="form-group mt-3">
          <label className="body-md mb-1">Description</label>
          <textarea
            className="input-field"
            placeholder="Enter description"
            onChange={(e) => {
              setStack({ ...stack, description: e.target.value });
            }}
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="modal-actions">
          <CustomButton
            text="Cancel"
            variant="secondary"
            click={handleClose}
            isAble={!stack.name || !stack.description}
          />
          <CustomButton
            text="Create"
            variant="primary"
            click={() => addStack()}
            isAble={!stack.name || !stack.description}
          />
        </div>
      </Box>
    </Modal>
  );
}
