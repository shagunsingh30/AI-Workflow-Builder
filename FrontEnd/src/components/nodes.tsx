/* eslint-disable @typescript-eslint/no-unused-vars */
import { Handle, Position, type NodeProps } from "@xyflow/react";
import {
  TextField,
  Typography,
  Box,
  Select,
  MenuItem,
  Switch,
} from "@mui/material";
//icons
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo"; // for User Query
import MenuBookIcon from "@mui/icons-material/MenuBook"; // for Knowledge Base
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"; // for LLM Engine
import OutboxIcon from "@mui/icons-material/Outbox"; //for output

export function UserQueryNode(props: NodeProps) {
  const { data } = props;
  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        p: 1,
        bgcolor: "white",
        width: 240,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ContentPasteGoIcon sx={{ mr: 2, color: "green" }} />
        <Typography variant="h6" fontWeight="bold" lineHeight={1}>
          User Query
        </Typography>
      </Box>
      <Typography
        variant="subtitle2"
        fontSize={"small"}
        sx={{ bgcolor: "#e3f2fd", p: 0.5, mt: 1.5 }}
        gutterBottom
      >
        Entry Point for User queries
      </Typography>
      <TextField
        size="small"
        fullWidth
        multiline
        rows={3}
        placeholder="Enter query..."
        variant="outlined"
      />
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </Box>
  );
}

export function KnowledgeBaseNode(props: NodeProps) {
  const { data } = props;
  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        p: 1,
        bgcolor: "white",
        width: 260,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MenuBookIcon sx={{ mr: 2, color: "green" }} />
        <Typography variant="h6" fontWeight="bold" lineHeight={1}>
          Knowledge Base
        </Typography>
      </Box>
      <Typography
        variant="subtitle2"
        sx={{ bgcolor: "#e3f2fd", p: 0.5, mt: 1.5 }}
        fontSize={"small"}
        gutterBottom
      >
        Let LLM search info in your file
      </Typography>
      <TextField size="small" type="file" fullWidth sx={{ mb: 1 }} />
      <Select size="small" defaultValue="openai" fullWidth sx={{ mb: 1 }}>
        <MenuItem value="openai">OpenAI Embeddings</MenuItem>
        <MenuItem value="cohere">Cohere Embeddings</MenuItem>
        <MenuItem value="hf">HuggingFace</MenuItem>
      </Select>
      <TextField size="small" fullWidth placeholder="API Key" type="password" />
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </Box>
  );
}

export function LLMEngineNode(props: NodeProps) {
  const { data } = props;

  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        p: 1,
        bgcolor: "white",
        width: 280,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <AutoAwesomeIcon sx={{ mr: 2, color: "green" }} />
        <Typography variant="h6" fontWeight="bold" lineHeight={1}>
          LLM Engine
        </Typography>
      </Box>
      <Typography
        variant="body1"
        fontSize={"small"}
        sx={{ bgcolor: "#e3f2fd", p: 0.5, mt: 1.5 }}
        gutterBottom
      >
        Run a query with OpenAI LLM
      </Typography>
      <Select size="small" defaultValue="gpt4" fullWidth sx={{ mb: 1 }}>
        <MenuItem value="gpt4">GPT-4</MenuItem>
        <MenuItem value="gpt35">GPT-3.5</MenuItem>
        <MenuItem value="claude">Claude</MenuItem>
      </Select>
      <TextField
        size="small"
        fullWidth
        placeholder="API Key"
        type="password"
        sx={{ mb: 1 }}
      />
      <TextField
        size="small"
        multiline
        rows={3}
        fullWidth
        placeholder="Prompt"
        sx={{ mb: 1 }}
      />
      <TextField
        size="small"
        type="number"
        fullWidth
        placeholder="Temperature (0-1)"
        sx={{ mb: 1 }}
      />
      <Box display="flex" alignItems="center">
        <Typography variant="body2" sx={{ mr: 1 }}>
          Web Search
        </Typography>
        <Switch size="small" />
      </Box>
      <TextField
        size="small"
        fullWidth
        placeholder="Search API Key"
        type="password"
        sx={{ mt: 1 }}
      />
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </Box>
  );
}

export function OutputNode(props: NodeProps) {
  const { data } = props;
  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        p: 1,
        bgcolor: "white",
        width: 280,
        textAlign: "left",
        // height: "100%",
        // minWidth: 280,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <OutboxIcon sx={{ m: 1, color: "green" }} fontSize="small" />
        <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1 }}>
          Output
        </Typography>
      </Box>
      <Typography
        variant="subtitle2"
        sx={{ bgcolor: "#e3f2fd", p: 0.5 }}
        fontSize={"small"}
        gutterBottom
      >
        Output of the result nodes as text
      </Typography>
      <TextField
        size="small"
        fullWidth
        multiline
        rows={3}
        placeholder="Result will appear here..."
      />

      <Handle type="target" position={Position.Left} />
    </Box>
  );
}
