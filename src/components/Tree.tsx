import { useEffect } from "react";
import useTreeStore, { ITreeNode } from "../store/TreeStore";
import TreeNode from "./TreeNode";

interface ITreeProps {
  initData?: ITreeNode;
}

const Tree = ({ initData }: ITreeProps) => {
  const setRootNode = useTreeStore((state) => state.setRootNode);
  const rootNode = useTreeStore((state) => state.rootNode);
  const resetTree = useTreeStore((state) => state.resetTree);
  useEffect(() => {
    if (initData) {
      setRootNode(initData);
    }
  }, [initData, setRootNode, resetTree]);

  return <TreeNode node={rootNode} />;
};

export default Tree;
