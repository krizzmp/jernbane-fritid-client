export class CprValidator {
  validate(value) {
    if (/^[0-9 ]*$/.test(value) && value.replace(/ /g, "").length <= 10) {
      return null;
    }
    return "Du skal taste et gyldigt cpr nummer";
  }
  validateBlur(value) {
    if (value.replace(/ /g, "").length === 10) {
      return null;
    }
    return "Et cpr nummer skal have 10 tegn";
  }
}
export class RequiredValidator {
  validate(value) {
    return value.length === 0 ? "Dette felt må ikke være tomt" : null;
  }
  validateBlur(value) {}
}
export class PhoneValidator {
  validate(value) {
    if (/^[0-9 ]*$/.test(value) && value.replace(/ /g, "").length <= 8) {
      return null;
    }
    return "Du skal taste et gyldigt telefon nummer";
  }
  validateBlur(value) {
    if (value.replace(/ /g, "").length === 8) {
      return null;
    }
    return "Et telefon nummer skal have 8 cifre";
  }
}
export class EmailValidator {
  validate(email) {}
  validateBlur(email) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return null;
    }
    return "Du skal taste en gyldig email addresse";
  }
}
