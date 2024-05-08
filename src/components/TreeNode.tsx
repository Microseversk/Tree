import { useMemo } from "react";
import type { ITreeNode } from "../store/TreeStore";
import useTreeStore from "../store/TreeStore";
import { generateRandomColor } from "../utils/functions";

interface ITreeProps {
  node: ITreeNode;
  color?: string;
}

const TreeNode = ({ node, color }: ITreeProps) => {
  const checkNode = useTreeStore((state) => state.checkNode);
  const checkedNode = useTreeStore((state) => state.checkedNode);
  const childColor = useMemo(() => generateRandomColor(), []);
  return (
    <div>
      <div className="flex pt-3">
        <div
          className="h-0.5 w-5 self-center"
          style={{ backgroundColor: color }}
        />
        <p
          onClick={() => checkNode(node.id)}
          className={
            checkedNode?.id === node.id
              ? "text-2xl font-semibold p-1 cursor-pointer  bg-gray-300 rounded-lg transition-all "
              : " text-2xl font-semibold hover:p-1 hover:bg-gray-300 cursor-pointer rounded-lg transition-all "
          }
          style={{ color: color }}
        >
          {node.name}
        </p>
      </div>

      {!!node.children.length && (
        <ul
          style={{
            borderLeft: "3px solid " + childColor,
            marginLeft: 40,
          }}
        >
          {node.children.map((node) => (
            <li key={node.id}>
              <TreeNode node={node} color={childColor} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default TreeNode;
