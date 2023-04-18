import { useState } from "react";
import UploadFile from "../../components/Upload";
import "./index.css";
import Editor from "@monaco-editor/react";
import { protoBufToTsType } from "../../utils/protobuf/src/main";

const EditPage = () => {
  const [protoValue, setValue] = useState("");

  const typeValue = protoBufToTsType("test", protoValue, { keepCase: false });

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className="layout">
      <UploadFile onChange={handleChange} />
      <Editor height="90vh" defaultLanguage="proto" value={protoValue} />
      <Editor height="90vh" defaultLanguage="json" value={typeValue} />
    </div>
  );
};
export default EditPage;
