import React from "react";
// import { Button, Form } from "carbon-components-react";
import MultiSelect from "./components/MultiSelect";
import TextInput from "./components/TextInput";

function Samlever() {
  const [cpr, setCpr] = React.useState("");
  const [name, setName] = React.useState("");
  const [memberships, setMemberships] = React.useState([]);
  return (
    <div>
      <TextInput
        id="cpr"
        labelText="Cpr nr"
        type="text"
        value={cpr}
        onChange={({ target: { value } }) => setCpr(value)}
      />
      <TextInput
        id="name"
        labelText="Navn"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <MultiSelect
        id="memberships"
        labelText="Memlemskaber"
        items={["Jernbane Fritid", "Motion København", "Motion Århus"]}
        onChange={({ selectedItems }) => setMemberships(selectedItems)}
      />
      <button type="submit">Submit</button>
    </div>
  );
}
export default Samlever;
