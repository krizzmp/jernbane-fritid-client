class Validator{
  validateChange(value) {

  }
  validateBlur(value) {

  }
  validateSubmit(value){
  }
}
export class CprValidator extends Validator{
  validateChange(value) {
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
  validateSubmit(value){
    return this.validateChange(value)||this.validateBlur(value);
  }
}
export class RequiredValidator extends Validator {
  validateChange(value) {
    return value.length === 0 ? "Dette felt må ikke være tomt" : null;
  }

}
export class PhoneValidator extends Validator {
  validateChange(value) {
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
export class EmailValidator extends Validator{
  validateBlur(email) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return null;
    }
    return "Du skal taste en gyldig email addresse";
  }
}
