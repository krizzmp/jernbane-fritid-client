import React from "react";
import Input from "./components/Input";
import DropDown from "./components/DropDown";
import Button from "@material-ui/core/Button";
import { useGlobalState } from "./state";
import {
  CprValidator,
  EmailValidator,
  PhoneValidator,
  RequiredValidator
} from './validators'
import { useValidation } from './useValidation'
function Samlever({ onNext, onPrev }) {
  // const [cpr, setCpr] = useGlobalState("spouse_cpr");
  // const [name, setName] = useGlobalState("spouse_name");
  // const [memberships, setMemberships] = useGlobalState("spouse_memberships");
  // const [payment, setPayment] = useGlobalState("spouse_payment");
  const [company] = useGlobalState("member_company");
  const [name, submit_name] = useValidation(
    "spouse_name",
    [new RequiredValidator()],
    "Navn"
  );
  const [cpr, submit_cpr] = useValidation(
    "spouse_cpr",
    [new CprValidator(), new RequiredValidator()],
    "CPR-nummer"
  );
  const [memberships, submit_memberships] = useValidation(
    "spouse_memberships",
    [new RequiredValidator()],
    "Medlemskaber"
  );
  const [payment, submit_payment] = useValidation(
    "spouse_payment",
    [new RequiredValidator()],
    "Betalingsmåde"
  );
  const canUseDsbMotion = company === "DSB" || company === "S-Tog";
  const submitHandler = () => {
    if (
      !([
        submit_cpr(),
        submit_name(),
        submit_memberships(),
        submit_payment()
      ].some(b=>b))
    ) {
      onNext();
    }
  };
  return (
    <div>
      <Input
        id="cpr"
        label="CPR-nummer"
        required={true}
        {...cpr}
      />

      <Input
        id="navn"
        label="Navn"
        required={true}
        {...name}
      />
      <DropDown
        multiple={true}
        id="memberships"
        label="Medlemskaber"
        items={["Jernbane Fritid", "Motion København", "Motion Århus"]}
        required={true}
        {...memberships}
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
        required={true}
        {...payment}
      />
      <div style={{ display: "flex" }}>
        <Button variant="outlined" color="primary" onClick={onPrev}>
          tilbage
        </Button>
        <div style={{ flex: 1 }} />

        <Button variant="contained" color="primary" onClick={submitHandler}>
          Fortsæt
        </Button>
      </div>
    </div>
  );
}
export default Samlever;
