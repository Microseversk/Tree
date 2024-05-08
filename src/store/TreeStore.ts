import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { findNodeById, findParentNodeById } from "../utils/functions";

export interface ITreeNode {
  id: string;
  name: string;
  children: ITreeNode[];
}

interface ITreeStore {
  initNode: ITreeNode;
  rootNode: ITreeNode;
  checkedNode: ITreeNode | null;
  setRootNode: (rootNode: ITreeNode) => void;
  checkNode: (nodeId: string) => void;
  addNode: (newNode: ITreeNode) => void;
  removeCheckedNode: () => void;
  renameNode: (newName: string) => void;
  resetTree: () => void;
}

const useTreeStore = create<ITreeStore>()(
  immer((set) => ({
    rootNode: {
      id: Math.floor(Math.random() * 1000).toString(),
      name: " ",
      children: [],
    },
    checkedNode: null,
    initNode: {
      id: Math.floor(Math.random() * 1000).toString(),
      name: " ",
      children: [],
    },

    setRootNode: (rootNode) => {
      set((state) => {
        state.rootNode = rootNode;
        state.initNode = rootNode;
      });
    },
    checkNode: (nodeId) => {
      set((state) => {
        state.checkedNode = findNodeById(state.rootNode, nodeId);
      });
    },
    addNode: (newNode) => {
      set((state) => {
        const checkedNode = state.checkedNode || state.rootNode;
        const node = findNodeById(state.rootNode, checkedNode.id);
        if (node) {
          node.children.push(newNode);
        }
      });
    },
    removeCheckedNode: () => {
      set((state) => {
        const checkedNode = state.checkedNode;
        if (!checkedNode) return;
        const parentNode = findParentNodeById(state.rootNode, checkedNode?.id);
        if (parentNode) {
          parentNode.children.splice(
            parentNode.children.findIndex((n) => n.id === checkedNode.id),
            1
          );
        }
      });
    },
    renameNode: (newName) => {
      set((state) => {
        const checkedNode = state.checkedNode;
        if (!checkedNode) return;
        const node = findNodeById(state.rootNode, checkedNode.id);
        if (node) {
          node.name = newName;
        }
      });
    },
    resetTree: () => {
      set((state) => {
        state.rootNode = state.initNode;
        state.checkedNode = null;
      });
    },
  }))
);

export default useTreeStore;
