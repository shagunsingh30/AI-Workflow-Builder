import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import type { Stack } from "../store/types/Stack.types";
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
//icons
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo"; // for User Query
import MenuBookIcon from "@mui/icons-material/MenuBook"; // for Knowledge Base
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"; // for LLM Engine
import OutboxIcon from "@mui/icons-material/Outbox"; //for output
const drawerWidth = 260;

interface SideMenuProps {
  props: Stack;
}

export default function SideMenu({ props }: SideMenuProps) {
  const { name, components } = props;
  const getIconForType = (type: string) => {
    switch (type) {
      case "User Query":
        return <ContentPasteGoIcon sx={{ mr: 2, color: "green" }} />;
      case "Knowledge Base":
        return <MenuBookIcon sx={{ mr: 2, color: "green" }} />;
      case "LLM Engine":
        return <AutoAwesomeIcon sx={{ mr: 2, color: "green" }} />;
      case "Output":
        return <OutboxIcon sx={{ mr: 2, color: "green" }} />;
      default:
        return <PersonIcon sx={{ mr: 2, color: "gray" }} />; // fallback
    }
  };
  return (
    <>
      {/* Sidebar */}
      <Box
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          bgcolor: "white",
          borderRight: "1px solid #ddd",
          height: "100vh",
          position: "fixed",
          top: 80, // height of navbar
          left: 0,
          overflowY: "auto",
          p: 2,
        }}
      >
        {/* Stack name box */}
        <Box
          sx={{
            bgcolor: "#f5f5f5",
            px: 2,
            py: 0.5,
            borderRadius: 2,
            border: "1px solid #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant="h6">{name}</Typography>
          <CreateIcon sx={{ color: "green" }} />
        </Box>

        {/* Section heading */}
        <Typography variant="subtitle1">Components</Typography>

        {/* Component list */}
        <List>
          {components.map((comp) => (
            <ListItem key={comp.id} disablePadding sx={{ mb: 2 }}>
              <ListItemButton
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
                  width: "85%",
                  mx: "auto",
                  py: 0.5,
                }}
                draggable
                onDragStart={(event) => {
                  event.dataTransfer.setData(
                    "application/reactflow",
                    comp.type.toLowerCase().replace(" ", "")
                  );
                  event.dataTransfer.effectAllowed = "move";
                }}
              >
                {/* icon based on type */}
                {getIconForType(comp.type)}
                <ListItemText
                  primary={comp.type}
                  slotProps={{
                    primary: { fontSize: "0.9rem", fontWeight: 500 },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
