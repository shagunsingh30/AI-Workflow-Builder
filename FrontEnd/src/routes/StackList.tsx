import "./../styles/header.css";
import "./../styles/StackList.css";
import EmptyStack from "../components/EmptyStack";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../store/reducers/LayoutSlice";
import type { RootState } from "../store";
import NewStackModal from "../components/NewStackModal";
import CustomButton from "../components/Button";
import StackCard from "../components/StackCard";
import AddIcon from "@mui/icons-material/Add";
import {
  fetchStacksRequest,
  setActiveStack,
} from "../store/reducers/StackSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../components/Loader";
export default function StackList() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.layout.open);
  const { stacks, loading, addLoading } = useSelector(
    (state: RootState) => state.stacks
  );
  const hasStacks = stacks.length > 0;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchStacksRequest());
  }, []);

  // useEffect(() => {
  //   dispatch(fetchStacksRequest());
  // }, [stacks]);
  return (
    <>
      <header className="header">
        <h2 className="header-title">My Stacks</h2>
        <CustomButton
          text="Add Stack"
          icon={<AddIcon fontSize="large" />}
          variant="primary"
          click={() => dispatch(openModal())}
        />
      </header>
      {hasStacks ? (
        <div className="stack-list">
          <div className="stack-list-grid">
            {stacks.map((stack) => (
              <StackCard
                key={stack.id}
                stack={stack}
                onEdit={() => {
                  navigate(`/stack/${stack.name}`);
                  dispatch(setActiveStack(stack));
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <EmptyStack />
      )}
      <Loader open={loading || addLoading} />
      {open && <NewStackModal />}
    </>
  );
}
