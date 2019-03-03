import React from "react";
// import { Button, Form } from "carbon-components-react";
import Input from './components/Input'
import DropDown from './components/DropDown'

function Samlever() {
  const [cpr, setCpr] = React.useState("");
  const [name, setName] = React.useState("");
  const [memberships, setMemberships] = React.useState([]);
  return (
    <div>
      <Input
        id="cpr"
        label="CPR-nummer"
        value={cpr}
        required={true}
        onChange={setCpr}
        helperText="CPR-nummer"
      />

      <Input
        id="navn"
        label="Navn"
        value={name}
        required={true}
        onChange={setName}
        helperText="Navn"
      />
      <DropDown
        multiple={true}
        id="memberships"
        label="Memlemskaber"
        items={["Jernbane Fritid", "Motion København", "Motion Århus"]}
        onChange={setMemberships}
        value={memberships}
        required={true}
        helperText="Memlemskaber"
      />
      <button type="submit">Submit</button>
    </div>
  );
}
export default Samlever;
