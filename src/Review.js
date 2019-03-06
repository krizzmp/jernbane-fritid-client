import React from "react";
import { useGlobalState } from "./state";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, Typography, Chip } from "@material-ui/core";
const useStyles = makeStyles(theme => {
  return {
    chip: {
      margin: theme.spacing.unit
    }
  };
});

function PersonItem(props) {
  let label = { fontWeight: 700 };
  if (props.value === undefined) {
    return null;
  }
  return (
    <div>
      <span style={label}>{props.labelText}: </span> {props.value}
    </div>
  );
}
function PersonDetails(props) {
  const classes = useStyles();
  return (
    <Card
      style={{
        padding: 8,
        margin: 8
      }}
      elevation={4}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography component="p" className={classes.lines}>
          <PersonItem labelText="CPR" value={props.cpr} />
          <PersonItem labelText="Addresse" value={props.addr} />
          <PersonItem labelText="E-mail" value={props.email} />
          <PersonItem labelText="Telefon" value={props.phone} />
          <PersonItem
            labelText="Medlemsblad"
            value={
              props.medlemsblad === undefined
                ? undefined
                : props.medlemsblad
                ? "Ja"
                : "Nej"
            }
          />
          <PersonItem labelText="Virksomhed" value={props.company} />
          <PersonItem labelText="Betalingsmetode" value={props.payment} />
          <PersonItem
            labelText="Medlemskaber"
            value={
              <div>
                {props.memberships.map(membership => (
                  <Chip label={membership} className={classes.chip} />
                ))}
              </div>
            }
          />
        </Typography>
      </CardContent>
    </Card>
  );
}

function Review({ onPrev }) {
  const [name] = useGlobalState("member_name");
  const [cpr] = useGlobalState("member_cpr");
  const [addr] = useGlobalState("member_addr");
  const [email] = useGlobalState("member_email");
  const [phone] = useGlobalState("member_phone");
  const [medlemsblad] = useGlobalState("member_medlemsblad");
  const [company] = useGlobalState("member_company");
  const [memberships] = useGlobalState("member_memberships");
  const [payment] = useGlobalState("member_payment");
  const [cprSpouse] = useGlobalState("spouse_cpr");
  const [nameSpouse] = useGlobalState("spouse_name");
  const [membershipsSpouse] = useGlobalState("spouse_memberships");
  const [paymentSpouse] = useGlobalState("spouse_payment");
  const [children] = useGlobalState("children");

  return (
    <div>
      <PersonDetails
        name={name}
        cpr={cpr}
        addr={addr}
        email={email}
        phone={phone}
        medlemsblad={medlemsblad}
        company={company}
        payment={payment}
        memberships={memberships}
      />
      <PersonDetails
        name={nameSpouse}
        cpr={cprSpouse}
        payment={paymentSpouse}
        memberships={membershipsSpouse}
      />
      {children.map(c => (
        <PersonDetails
          name={c.name}
          cpr={c.cpr}
          payment={c.payment}
          memberships={c.memberships}
        />
      ))}
      <div style={{ display: "flex" }}>
        <Button variant="outlined" color="primary" onClick={onPrev}>
          tilbage
        </Button>
        <div style={{ flex: 1 }} />

        <Button variant="contained" color="primary">
          Godkend
        </Button>
      </div>
    </div>
  );
}

export default Review;
