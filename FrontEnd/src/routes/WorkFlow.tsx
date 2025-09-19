import { useSelector } from "react-redux";
import SideMenu from "../components/SideMenu";
import CssBaseline from "@mui/material/CssBaseline";
import type { RootState } from "../store";
import Box from "@mui/material/Box";
import Canvas from "../components/Canvas";
const WorkFlow = () => {
  const activeStack = useSelector(
    (state: RootState) => state.stacks.activeStack
  );
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideMenu props={activeStack} />
      <Canvas />
    </Box>
  );
};

export default WorkFlow;
