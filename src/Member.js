import React from 'react'
import DropDown from './components/DropDown'
import CheckBox from './components/Checkbox'
import Button from '@material-ui/core/Button'
import Input from './components/Input'
import { useGlobalState } from './state'
import {
  CprValidator,
  EmailValidator,
  PhoneValidator,
  RequiredValidator
} from './validators'
import { useValidation } from './useValidation'

function Member({ onNext, onPrev }) {
  const [name, submit_name] = useValidation(
    "member_name",
    [new RequiredValidator()],
    "Navn"
  );
  const [cpr, submit_cpr] = useValidation(
    "member_cpr",
    [new CprValidator(), new RequiredValidator()],
    "CPR-nummer"
  );
  const [addr, submit_addr] = useValidation(
    "member_addr",
    [new RequiredValidator()],
    "Addresse"
  );
  const [email, submit_email] = useValidation(
    "member_email",
    [new EmailValidator(), new RequiredValidator()],
    "Email addresse"
  );
  const [phone, submit_phone] = useValidation(
    "member_phone",
    [new PhoneValidator(), new RequiredValidator()],
    "Telefon nr"
  );
  const [medlemsblad, setMedlemsblad] = useGlobalState("member_medlemsblad");
  const [company, submit_company] = useValidation(
    "member_company",
    [new RequiredValidator()],
    "Virksomhed"
  );
  const [memberships, submit_memberships] = useValidation(
    "member_memberships",
    [new RequiredValidator()],
    "Medlemskaber"
  );
  const [payment, submit_payment] = useValidation(
    "member_payment",
    [new RequiredValidator()],
    "Betalingsmåde"
  );

  const canUseDsbMotion = company === "DSB" || company === "S-Tog";
  const submitHandler = () => {
    if (
      !([
        submit_cpr(),
        submit_name(),
        submit_addr(),
        submit_email(),
        submit_phone(),
        submit_company(),
        submit_memberships(),
        submit_payment()
      ].some(b=>b))
    ) {
      onNext();
    }
  };
  return (
    <div>
      <Input id="cpr" label="CPR-nummer" required={true} {...cpr} />

      <Input id="navn" label="Navn" required={true} {...name} />

      <Input id="addr" label="Addresse" required={true} {...addr} />

      <Input
        id="email"
        label="E-mail"
        required={true}
        type="email"
        {...email}
      />

      <Input id="phone" label="Telefon" required={true} {...phone} />

      <CheckBox
        label="Medlemsblad"
        id="medlemsblad"
        required={true}
        value={medlemsblad}
        onChange={setMedlemsblad}
        helperText="Medlemsblad"
      />
      <DropDown
        id="virksomhed"
        label="Virksomhed"
        required={true}
        items={["DSB", "S-Tog", "Arriva", "Bane Danmark"]}
        {...company}
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
        <div style={{ flex: 1 }} />
        <Button variant="contained" color="primary" onClick={submitHandler}>
          Fortsæt
        </Button>
      </div>
    </div>
  );
}
export default Member;
