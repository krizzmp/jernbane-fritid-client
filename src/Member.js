import React from "react";
import DropDown from "./components/DropDown";
import CheckBox from "./components/Checkbox";
import Button from "@material-ui/core/Button";
import Input from "./components/Input";
import { useGlobalState } from "./state";
import {
  CprValidator,
  RequiredValidator,
  PhoneValidator,
  EmailValidator
} from "./validators";
function Member({ onNext, onPrev }) {
  const [name, setName] = useGlobalState("member_name");
  const [cpr, setCpr] = useGlobalState("member_cpr");
  const [addr, setAddr] = useGlobalState("member_addr");
  const [email, setEmail] = useGlobalState("member_email");
  const [phone, setPhone] = useGlobalState("member_phone");
  const [medlemsblad, setMedlemsblad] = useGlobalState("member_medlemsblad");
  const [company, setCompany] = useGlobalState("member_company");
  const [memberships, setMemberships] = useGlobalState("member_memberships");
  const [payment, setPayment] = useGlobalState("member_payment");

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
        validators={[new CprValidator(), new RequiredValidator()]}
      />

      <Input
        id="navn"
        label="Navn"
        value={name}
        required={true}
        onChange={setName}
        helperText="Navn"
        validators={[new RequiredValidator()]}
      />

      <Input
        id="addr"
        label="Addresse"
        value={addr}
        required={true}
        onChange={setAddr}
        helperText="Addresse"
        validators={[new RequiredValidator()]}
      />

      <Input
        id="email"
        label="E-mail"
        value={email}
        required={true}
        onChange={setEmail}
        helperText="Email addresse"
        type="email"
        validators={[new EmailValidator(), new RequiredValidator()]}
      />

      <Input
        id="phone"
        label="Telefon"
        value={phone}
        required={true}
        onChange={setPhone}
        helperText="Telefon nr"
        validators={[new PhoneValidator(), new RequiredValidator()]}
      />

      <CheckBox
        label="Medlemsblad"
        id="medlemsblad"
        value={medlemsblad}
        required={true}
        onChange={setMedlemsblad}
        helperText="Medlemsblad"
      />
      <DropDown
        id="virksomhed"
        label="Virksomhed"
        items={["DSB", "S-Tog", "Arriva", "Bane Danmark"]}
        onChange={setCompany}
        value={company}
        required={true}
        helperText="Virksomhed"
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
        <div style={{ flex: 1 }} />
        <Button variant="contained" color="primary" onClick={onNext}>
          Fortsæt
        </Button>
      </div>
    </div>
  );
}
export default Member;
