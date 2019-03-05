import { createGlobalState } from "react-hooks-global-state";

export const { GlobalStateProvider, useGlobalState } = createGlobalState({
  member_name: "kristoffer",
  member_cpr: "2805921010",
  member_addr: "bøgeparken 80 7. th",
  member_email: "krizzmp@gmail.com",
  member_phone: "20372805",
  member_medlemsblad: false,
  member_company: "DSB",
  member_memberships: ["Jernbane Fritid"],
  member_payment: "PBS",
  spouse_name: "john møller petersen",
  spouse_cpr: "2202651010",
  spouse_memberships: ["Jernbane Fritid", "Motion København"],
  spouse_payment: "Giro",
  children: [
    {
      cpr: "12345678",
      name: "rip",
      memberships: ["Motion København"],
      payment: "giro"
    },
    {
      cpr: "1415161719",
      name: "rap",
      memberships: ["Jernbane Fritid", "Motion København"],
      payment: "giro"
    }
  ],
  children_count: 2,
  children_expandedId: 0
});
