import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";

const TextEditor: React.FC = () => {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      console.log(event.target);

      setEditing(false);
    };
    document.addEventListener("click", listener, { capture: true });

    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div>
        <MDEditor />
      </div>
    );
  }

  return (
    <div
      onClick={() => {
        setEditing(!editing);
      }}
    >
      <MDEditor.Markdown source={"# Header"} />
    </div>
  );
};

export default TextEditor;
