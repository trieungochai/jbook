import "./text-editor.css";
import MDEditor from "@uiw/react-md-editor";
import { useEffect, useRef, useState } from "react";

const TextEditor: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // console.log("REF: ", ref.current);
      // console.log(event.target);

      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        // console.log("Element clicked on is inside Text Editor");
        return;
      }

      // console.log("Element clicked on is not inside Text Editor");
      setEditing(false);
    };
    document.addEventListener("click", listener, { capture: true });

    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div ref={ref}>
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
