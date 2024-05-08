import { useState } from "react";
import useTreeStore from "../store/TreeStore";
import Button from "./shared/Button";
import Input from "./shared/Input";

const ControlPanel = () => {
  const addNode = useTreeStore((state) => state.addNode);
  const removeCheckedNode = useTreeStore((state) => state.removeCheckedNode);
  const renameNode = useTreeStore((state) => state.renameNode);
  const resetTree = useTreeStore((state) => state.resetTree);
  const [inputName, setInputName] = useState("");

  const handleAddNode = () => {
    if (!inputName) return;
    addNode({
      id: Math.random().toString(),
      name: inputName,
      children: [],
    });
  };

  const handleRenameNode = () => {
    if (!inputName) return;
    renameNode(inputName);
  };

  return (
    <div className="flex justify-center gap-3 text-2xl h-fit bg-green-400 self-center p-3 rounded-lg shadow-xl">
      <Input
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="Название узла"
      />
      <Button onClick={() => handleAddNode()}>Создать узел</Button>
      <Button onClick={() => removeCheckedNode()}>Удалить узел</Button>
      <Button onClick={() => handleRenameNode()}>Переименовать узел</Button>
      <Button onClick={() => resetTree()}>Сбросить</Button>
    </div>
  );
};

export default ControlPanel;
