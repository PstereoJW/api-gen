import { Card, Input } from "antd";
import { useState } from "react";
import { protoBufToTsType } from "../../api-gen/protobuf/src/main";
import UploadFile from "../../components/Upload";
import "./index.css";

const EditPage = () => {
  const [protoValue, setValue] = useState("");

  const typeValue = protoValue;

  const handleChange = (value: string) => {
    setValue(value);
    console.log(2222, protoBufToTsType("test", value, { keepCase: false }));
  };

  return (
    <div className="layout">
      <UploadFile onChange={handleChange} />
      <Input.TextArea
        autoSize={{ minRows: 30, maxRows: 100 }}
        value={protoValue}
        style={{ width: "500px" }}
        onChange={(e) => setValue(e.target.value)}
      />
      <Card
        style={{
          marginLeft: "50px",
          minWidth: "500px",
          maxWidth: "800px",
        }}
      >
        <div></div>
        {typeValue}
      </Card>
    </div>
  );
};
export default EditPage;
