/* eslint-disable @typescript-eslint/no-explicit-any */
export interface WorkflowComponent {
  id: string;
  type: "User Query" | "Knowledge Base" | "LLM Engine" | "Output";
  config?: Record<string, any>;
}

export interface Stack {
  id: string;
  name: string;
  description: string;
  components: WorkflowComponent[];
  createdAt: string;
}

export interface StackState {
  stacks: Stack[];
  loading: boolean;
  addLoading: boolean;
  workflows: Workflow[]; // keep workflows separately
  error: string | null;
  activeStack: Stack;
}

export interface StackTypeAction {
  name: string;
  description: string;
}
export interface Workflow {
  id: string;
  stackId: string; // FK to stack
  name: string;
  createdAt: string;
  graph: {
    nodes: any[]; // from ReactFlow
    edges: any[]; // from ReactFlow
  };
}

// //
// /* eslint-disable @typescript-eslint/no-explicit-any */

// // The constant 4 components that every stack comes with
// export type WorkflowComponentType =
//   | "User Query"
//   | "Knowledge Base"
//   | "LLM Engine"
//   | "Output";

// export interface WorkflowComponent {
//   id: string; // UUID or generated
//   type: WorkflowComponentType;
//   config?: Record<string, any>;
// }

// // Represents the "blueprint"
// export interface Stack {
//   id: string;
//   name: string;
//   description: string;
//   createdAt: string;
//   // always has 4 components (we can auto-generate these in frontend OR backend)
//   components: WorkflowComponent[];
// }

// // Represents a user-created flowchart instance
