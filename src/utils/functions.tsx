import { ITreeNode } from "../store/TreeStore";

export const generateRandomColor = () => {
  const randomColor = () => Math.floor(Math.random() * 180);
  const r = randomColor();
  const g = randomColor();
  const b = randomColor();
  return `rgb(${r},${g},${b})`;
};

export const findNodeById = (
  rootNode: ITreeNode,
  id: string
): ITreeNode | null => {
  if (rootNode.id === id) {
    return rootNode;
  }
  for (const child of rootNode.children) {
    const foundNode = findNodeById(child, id);
    if (foundNode) {
      return foundNode;
    }
  }
  return null;
};

export const findParentNodeById = (
  rootNode: ITreeNode,
  nodeId: string
): ITreeNode | null => {
  if (rootNode.children.some((node) => node.id === nodeId)) {
    return rootNode;
  }

  for (const child of rootNode.children) {
    const foundNode = findParentNodeById(child, nodeId);
    if (foundNode) {
      return foundNode;
    }
  }

  return null;
};
