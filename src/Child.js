import React from "react";
import Input from "./components/Input";
import DropDown from "./components/DropDown";
import { useGlobalState } from "./state";
import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useChildValidation } from "./useValidation";
import { CprValidator, RequiredValidator } from "./validators";
function useMyState(index, key, defaultValue) {
  const defaultObject = { [key]: defaultValue };
  const [children, setChildren] = useGlobalState("children");
  let child = children[index];
  if (child === undefined) {
    child = defaultObject;
  }
  if (child[key] === undefined) {
    child = { ...child, ...defaultObject };
  }
  const set = val => {
    children[index] = { ...child, ...{ [key]: val } };
    setChildren([...children]);
  };
  return [child[key], set];
}
function Child({ index, deleteThisChild }) {
  const [cpr, submit_cpr] = useChildValidation(
    index,
    `cpr`,
    "",
    [new CprValidator(), new RequiredValidator()],
    "CPR nr"
  );
  const [name, submit_name] = useChildValidation(index, `name`, "",[ new RequiredValidator()],
    "Navn");
  const [memberships, submit_memberships] = useChildValidation(index, `memberships`, [],[ new RequiredValidator()],
    "Medlemskaber");
  const [payment, submit_payment] = useChildValidation(index, `payment`, [],[ new RequiredValidator()],
    "Betalingsmåde");

  const [company] = useGlobalState("member_company");
  const canUseDsbMotion = company === "DSB" || company === "S-Tog";
  const [expanded, setExpanded] = useGlobalState("children_expandedId");
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : -1);
  };

  return (
    <ExpansionPanel
      expanded={expanded === index}
      onChange={handleChange(index)}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography style={{ flex: 1 }}>{name.value || "Ikke navngivet"}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        style={{ display: "flex", flexDirection: "column" }}
      >
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
        <Button
          variant="outlined"
          color="secondary"
          style={{ alignSelf: "flex-end" }}
          onClick={() => deleteThisChild(index)}
        >
          slet
        </Button>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
function range(i) {
  return [...Array(i).keys()];
}
function ChildList({ onNext, onPrev }) {
  const [children, setChildren] = useGlobalState("children");
  function deleteThisChild(index) {
    children.splice(index, 1);
    setChildren([...children]);
    setNumberOfChildren(numberOfChildren - 1);
    setExpanded(-1);
  }
  const [numberOfChildren, setNumberOfChildren] = useGlobalState(
    "children_count"
  );
  const [, setExpanded] = useGlobalState("children_expandedId");
  const g = () => {
    setNumberOfChildren(numberOfChildren + 1);
    setTimeout(() => setExpanded(numberOfChildren), 0);
  };
  const m8 = { margin: "0 8px" };
  const m8_ = {};
  return (
    <div>
      {range(numberOfChildren).map((o, i) => (
        <Child index={i} deleteThisChild={deleteThisChild} />
      ))}
      <div style={{ display: "flex" }}>
        <Button variant="outlined" color="primary" onClick={onPrev} style={m8_}>
          tilbage
        </Button>
        <div style={{ flex: 1 }} />
        <Button variant="outlined" color="primary" onClick={g} style={m8}>
          tilføj barn
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={onNext}
          style={m8_}
        >
          Fortsæt
        </Button>
      </div>
    </div>
  );
}
export default ChildList;
