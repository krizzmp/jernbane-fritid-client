import React from "react";
// import {
//   Checkbox,
//   DropdownV2,
// } from "carbon-components-react";
import MultiSelect from "./components/MultiSelect";
import TextInput from "./components/TextInput";
import DropDown from "./components/DropDown";
import CheckBox from "./components/Checkbox";
import Button from "@material-ui/core/Button";

function App() {
  const [name, setName] = React.useState("");
  const [cpr, setCpr] = React.useState("");
  const [addr, setAddr] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [medlemsblad, setMedlemsblad] = React.useState(false);
  const [memberships, setMemberships] = React.useState([]);

  const items = [{ id: "dsb", text: "DSB" }, { id: "stog", text: "S-Tog" }];

  return (
    <div>
      <TextInput
        id="navn"
        labelText="Navn"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <TextInput
        id="cpr"
        labelText="CPR-nummer"
        value={cpr}
        onChange={e => setCpr(e.target.value)}
      />

      <TextInput
        id="addr"
        labelText="Addresse"
        value={addr}
        onChange={e => setAddr(e.target.value)}
      />

      <TextInput
        id="email"
        labelText="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <TextInput
        id="phone"
        labelText="Telefon"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />

      {/* Medlemsblad checkbox */}
      <CheckBox
        labelText="Medlemsblad"
        checked={medlemsblad}
        setChecked={setMedlemsblad}
      />
      {/*/!* Company dropdown *!/*/}
      <DropDown
        id="virksomhed"
        labelText="Virksomhed"
        items={["Jernbane Fritid", "Motion København", "Motion Århus"]}
        onChange={({ selectedItems }) => setMemberships(selectedItems)}
      />
      {/* membership checkboxes */}
      <MultiSelect
        id="memberships"
        labelText="Memlemskaber"
        items={["Jernbane Fritid", "Motion København", "Motion Århus"]}
        onChange={({ selectedItems }) => setMemberships(selectedItems)}
      />
      <Button variant="contained" color="primary">
        Next
      </Button>
    </div>
  );
}
export default App;
