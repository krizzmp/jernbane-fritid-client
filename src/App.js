import React from "react";
// import {
//   Checkbox,
//   DropdownV2,
// } from "carbon-components-react";
import DropDown from "./components/DropDown";
import CheckBox from "./components/Checkbox";
import Button from "@material-ui/core/Button";
import Input from './components/Input'

function App() {
  const [name, setName] = React.useState("");
  const [cpr, setCpr] = React.useState("");
  const [addr, setAddr] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [medlemsblad, setMedlemsblad] = React.useState(false);
  const [company, setCompany] = React.useState("");
  const [memberships, setMemberships] = React.useState([]);

  const items = [{ id: "dsb", text: "DSB" }, { id: "stog", text: "S-Tog" }];

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


      <Input
        id="addr"
        label="Addresse"
        value={addr}
        required={true}
        onChange={setAddr}
        helperText="Addresse"
      />

      <Input
        id="email"
        label="E-mail"
        value={email}
        required={true}
        onChange={setEmail}
        helperText="Email addresse"
      />

      <Input
        id="phone"
        label="Telefon"
        value={phone}
        required={true}
        onChange={setPhone}
        helperText="Telefon nr"
      />

      {/* Medlemsblad checkbox */}
      <CheckBox
        label="Medlemsblad"
        id="medlemsblad"
        value={medlemsblad}
        required={true}
        onChange={setMedlemsblad}
        helperText="Medlemsblad"
      />
      {/*/!* Company dropdown *!/*/}
      <DropDown
        id="virksomhed"
        label="Virksomhed"
        items={["Jernbane Fritid", "Motion København", "Motion Århus"]}
        onChange={setCompany}
        value={company}
        required={true}
        helperText="Virksomhed"
      />
      {/* membership checkboxes */}
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
      <Button variant="contained" color="primary">
        Next
      </Button>
    </div>
  );
}
export default App;
