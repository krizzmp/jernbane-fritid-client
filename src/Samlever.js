import React from "react";
import Input from "./components/Input";
import DropDown from "./components/DropDown";
import Button from "@material-ui/core/Button";
import { useGlobalState } from "./state";
function Samlever({ onNext, onPrev }) {
  const [cpr, setCpr] = useGlobalState("spouse_cpr");
  const [name, setName] = useGlobalState("spouse_name");
  const [memberships, setMemberships] = useGlobalState("spouse_memberships");
  const [payment, setPayment] = useGlobalState("spouse_payment");
  const [company] = useGlobalState("member_company");
  const canUseDsbMotion = company === "DSB" || company === "S-Tog";
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
        label="Medlemskaber"
        items={["Jernbane Fritid", "Motion København", "Motion Århus"]}
        onChange={setMemberships}
        value={memberships}
        required={true}
        helperText="Medlemskaber"
      />
      <DropDown
        id="betalingmåde"
        label="Betalingmåde"
        items={[
          ...(canUseDsbMotion ? ["DSB betalt motion"] : []),
          "PBS",
          "Girokort",
          "Løntræk"
        ]}
        onChange={setPayment}
        value={payment}
        required={true}
        helperText="Betalingmåde"
      />
      <div style={{ display: "flex" }}>
        <Button variant="outlined" color="primary" onClick={onPrev}>
          tilbage
        </Button>
        <div style={{ flex: 1 }} />

        <Button variant="contained" color="primary" onClick={onNext}>
          Fortsæt
        </Button>
      </div>
    </div>
  );
}
export default Samlever;
