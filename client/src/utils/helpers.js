export function validateZip(zipCode) {
    const zipValidate = /^\d{5}/;
    if (zipCode.match(zipValidate)) {
      return true;
    }
    return false;
  }
  