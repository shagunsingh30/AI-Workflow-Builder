/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from "@mui/material";
import {
  ReactFlow,
  type Node,
  type Edge,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  useNodesState,
  useEdgesState,
  type Connection,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback } from "react";
import {
  KnowledgeBaseNode,
  LLMEngineNode,
  OutputNode,
  UserQueryNode,
} from "./nodes";

//for custom component
const nodeTypes = {
  userquery: UserQueryNode,
  knowledgebase: KnowledgeBaseNode,
  llmengine: LLMEngineNode,
  output: OutputNode,
};
const staticNodes = [
  {
    id: "n1",
    type: "userquery",
    position: { x: 100, y: 100 },
    data: { label: "User Query" },
  },
  {
    id: "n2",
    type: "knowledgebase",
    position: { x: 400, y: 100 },
    data: { label: "Knowledge Base" },
  },
  {
    id: "n3",
    type: "llmengine",
    position: { x: 100, y: 300 },
    data: { label: "LLM Engine" },
  },
  {
    id: "n4",
    type: "output",
    position: { x: 400, y: 400 },
    data: { label: "Output" },
    style: { width: 280, padding: 0, border: "none" },
  },
];
// --- Initial nodes: all 4 types for debugging ---
const initialNodes: Node[] = [];

const initialEdges: Edge[] = [];
const Canvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((connection: Connection) => {
    console.log(connection, "con");
    const edge: Edge = {
      ...connection,
      animated: true,
      id: crypto.randomUUID(),
    };
    setEdges((prevEdge) => addEdge(edge, prevEdge));
  }, []);

  //drag and drop
  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) return;

      const position = { x: event.clientX - 300, y: event.clientY - 100 }; // adjust offsets
      const newNode = {
        id: `${type}-${Date.now()}`,
        type: type,
        position,
        data: { label: type },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );
  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);
  return (
    //The <ReactFlow /> component must have a parent element with a width and height.
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "#f5f5f5",
        ml: "260px",
        mt: "70px", // push below navbar
        height: "calc(100vh - 70px)",
        width: `calc(100% - 260px)`,
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onEdgeContextMenu={(event, edge) => {
          event.preventDefault();
          setEdges((eds) => eds.filter((e) => e.id !== edge.id));
        }}
      >
        <Controls showInteractive={true} />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </Box>
  );
};

export default Canvas;
