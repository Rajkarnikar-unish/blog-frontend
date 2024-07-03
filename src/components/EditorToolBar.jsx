import { useCurrentEditor } from "@tiptap/react";

const EditorToolBar = () => {
  const { editor } = useCurrentEditor;

  console.log(!editor);

  return (
    <div className="control-group">
      <div className="button-group">
        <button>Bold</button>
      </div>
    </div>
  );
};

export default EditorToolBar;
