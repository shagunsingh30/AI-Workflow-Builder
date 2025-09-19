/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// store/reducers/stackSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  Stack,
  StackState,
  StackTypeAction,
  WorkflowComponent,
} from "../types/Stack.types";
const comp: WorkflowComponent[] = [
  { id: "c1", type: "User Query" },
  { id: "c2", type: "Knowledge Base" },
  { id: "c3", type: "LLM Engine" },
  { id: "c4", type: "Output" },
];
const initialState: StackState = {
  stacks: [
    // {
    //   id: "1",
    //   name: "Chat with AI",
    //   description: "A simple workflow to chat directly with an AI model.",
    //   components: comp,
    //   createdAt: new Date().toISOString(),
    // },
    // {
    //   id: "2",
    //   name: "PDF Summariser",
    //   description: "Upload a PDF and get a concise summary.",
    //   components: comp,
    //   createdAt: new Date().toISOString(),
    // },
    // {
    //   id: "3",
    //   name: "Information Finder",
    //   description: "Ask questions and retrieve information from the web.",
    //   components: comp,
    //   createdAt: new Date().toISOString(),
    // },
    // {
    //   id: "4",
    //   name: "Content Summariser",
    //   description: "Summarise large blocks of text into key insights.",
    //   components: comp,
    //   createdAt: new Date().toISOString(),
    // },
  ],
  loading: false,
  addLoading: false,
  error: null,
  workflows: [],
  activeStack: {
    id: "",
    name: "",
    description: "",
    components: comp,
    createdAt: "",
  },
};

const stackSlice = createSlice({
  name: "stack",
  initialState,
  reducers: {
    addStack: (state, action: PayloadAction<Stack>) => {
      state.stacks.push(action.payload);
    },
    removeStack: (state, action: PayloadAction<string>) => {
      state.stacks = state.stacks.filter((s) => s.id !== action.payload);
    },
    updateStack: (state, action: PayloadAction<Stack>) => {
      const index = state.stacks.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) {
        state.stacks[index] = action.payload;
      }
    },
    setActiveStack: (state, action: PayloadAction<Stack>) => {
      state.activeStack = action.payload;
    },
    //------------------------API CALLS-----------------------------------------
    fetchStacksRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchStacksSuccess(state, action: PayloadAction<Stack[]>) {
      console.log("haaaaaaaaaa");
      state.loading = false;
      state.stacks = action.payload;
    },
    fetchStacksFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addStacksRequest(state, action: PayloadAction<StackTypeAction>) {
      state.addLoading = true;
      state.error = null;
    },
    // Optional: for POST API
    addStackSuccess(state, action: any) {
      state.addLoading = false;
      state.stacks.push(action.payload);
    },
    deleteStacksRequest(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    // Optional: for POST API
    deleteStackSuccess(state) {
      state.loading = false;
      state.error = null;
      //state.stacks.push(action.payload); //new stacklist
    },
  },
});

export const {
  addStack,
  removeStack,
  updateStack,
  setActiveStack,
  fetchStacksRequest,
  fetchStacksSuccess,
  fetchStacksFailure,
  addStacksRequest,
  addStackSuccess,
  deleteStacksRequest,
  deleteStackSuccess,
} = stackSlice.actions;
export default stackSlice.reducer;
