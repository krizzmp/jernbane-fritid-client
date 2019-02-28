import React from "react";
import Select from "react-select";
import {
  TextInput,
  FormItem,
  MultiSelect,
  Checkbox,
  DropdownV2,
  DropdownItem,
  DropdownSkeleton,
  FormGroup,
  Button
} from "carbon-components-react";
import "carbon-components/css/carbon-components.css";

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
      <FormItem>
        <TextInput
          id="navn"
          labelText="Navn"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormItem>

      <FormItem>
        <TextInput
          id="cpr"
          labelText="CPR-nummer"
          value={cpr}
          onChange={e => setCpr(e.target.value)}
        />
      </FormItem>

      <FormItem>
        <TextInput
          id="addr"
          labelText="Addresse"
          value={addr}
          onChange={e => setAddr(e.target.value)}
        />
      </FormItem>

      <FormItem>
        <TextInput
          id="email"
          labelText="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormItem>

      <FormItem>
        <TextInput
          id="phone"
          labelText="Telefon"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </FormItem>

      {/* Medlemsblad checkbox */}
      <FormItem>
        <Checkbox
          id="medlemsblad"
          labelText="Medlemsblad"
          checked={medlemsblad}
          onChange={e => setMedlemsblad(e)}
        />
      </FormItem>

      {/* Company dropdown */}
      <FormItem>
        <DropdownV2
          items={items}
          label="Virksomhed"
          itemToString={item => (item ? item.text : "")}
        />
      </FormItem>
      {/* membership checkboxes */}
      <FormGroup legendText="test">
        <MultiSelect
          label="Medlemskab"
          listBoxMenuIconTranslationIds={{
            "close.menu": "Close menu",
            "open.menu": "Open menu"
          }}
          title={true}
          items={[
            { id: "mk", text: "Motion København" },
            { id: "jf", text: "Jernbane Fritid" },
            { id: "ma", text: "Motion Århus" }
          ]}
          itemToString={item => (item ? item.text : "")}
          onChange={({ selectedItems }) => setMemberships(selectedItems)}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </div>
  );
}
export default App;
