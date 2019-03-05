import React from "react";
import { useGlobalState } from "./state";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, Typography, Chip } from "@material-ui/core";
const useStyles = makeStyles(theme => {
  return {
    label: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: "54px", // Reset (19px), match the native input line-height
      display: "flex",
      flexDirection: "column",
      color: theme.palette.text.secondary,
      padding: 8,
      margin: 8
    },
    chip: {
      margin: theme.spacing.unit
    },
    lines: {
      //   lineHeight: "48px"
    }
  };
});
function Review({ onPrev }) {
  const classes = useStyles();
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

  let styles_person = { border: "1px solid #e5e5e5" };
  let label = { fontWeight: 700 };
  return (
    <div>
      <Card className={classes.label} elevation={4}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography component="p" className={classes.lines}>
            <div>
              <span style={label}>CPR:</span> {cpr}
            </div>
            <div>
              <span style={label}>Addresse:</span> {addr}
            </div>
            <div>
              <span style={label}>E-mail:</span> {email}
            </div>
            <div>
              <span style={label}>Telefon:</span> {phone}
            </div>
            <div>
              <span style={label}>Medlemsblad:</span>{" "}
              {medlemsblad ? "Ja" : "Nej"}
            </div>
            <div>
              <span style={label}>Virksomhed:</span> {company}
            </div>
            <div>
              <span style={label}>Betalingsmetode:</span> {payment}
            </div>
            <div>
              <div style={label}>Medlemskab:</div>
              {memberships.map(membership => (
                <Chip label={membership} className={classes.chip} />
              ))}
            </div>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.label} elevation={4}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {nameSpouse}
          </Typography>
          <Typography component="p" className={classes.lines}>
            <div>
              <span style={label}>CPR:</span> {cprSpouse}
            </div>
            <div>
              <span style={label}>Betalingsmetode:</span> {paymentSpouse}
            </div>
            <div>
              <div style={label}>Medlemskab:</div>
              {membershipsSpouse.map(membership => (
                <Chip label={membership} className={classes.chip} />
              ))}
            </div>
          </Typography>
        </CardContent>
      </Card>
      {children.map(c => (
        <Card className={classes.label} elevation={4}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {c.name}
            </Typography>
            <Typography component="p" className={classes.lines}>
              <div>
                <span style={label}>CPR:</span> {c.cpr}
              </div>
              <div>
                <span style={label}>Betalingsmetode:</span> {c.payment}
              </div>
              <div>
                <div style={label}>Medlemskab:</div>
                {c.memberships.map(membership => (
                  <Chip label={membership} className={classes.chip} />
                ))}
              </div>
            </Typography>
          </CardContent>
        </Card>
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
