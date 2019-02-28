import React from "react";
import {
  TextInput,
  FormItem,
  MultiSelect,
  Form,
  Button,
  FormGroup
} from "carbon-components-react";
import "carbon-components/css/carbon-components.css";
function Samlever() {
  const [cpr, setCpr] = React.useState("");
  const [name, setName] = React.useState("");
  const [memberships, setMemberships] = React.useState([]);
  return (
    <Form
      style={{ padding: 32, background: "#fff" }}
      onSubmit={e => {
        e.preventDefault();
        console.log(e);
      }}
    >
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
      <FormGroup legendText="Medlemskab" className="multiGroup">
        <MultiSelect
          label=""
          listBoxMenuIconTranslationIds={{
            "close.menu": "Close menu",
            "open.menu": "Open menu"
          }}
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
    </Form>
  );
}
export default Samlever;
