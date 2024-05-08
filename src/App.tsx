import ControlPanel from "./components/ControlPanel";
import Tree from "./components/Tree";
import { ITreeNode } from "./store/TreeStore";
const ROOT_NODE: ITreeNode = {
  id: "1",
  name: "Root",
  children: [
    {
      id: "2",
      name: "Node 1",
      children: [
        {
          id: "3",
          name: "Node 2",
          children: [],
        },
      ],
    },
    {
      id: "4",
      name: "Node 3",
      children: [
        {
          id: "5",
          name: "Node 4",
          children: [],
        },
        {
          id: "6",
          name: "Node 5",
          children: [
            {
              id: "7",
              name: "Node 6",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "8",
      name: "Node 7",
      children: [],
    },
  ],
};
const ROOT_NODE2: ITreeNode = {
  id: "1",
  name: "",
  children: [],
};

function App() {
  return (
    <main className="flex flex-col ">
      <ControlPanel />
      <Tree initData={ROOT_NODE} />
    </main>
  );
}

export default App;
