function extractPhones() {

  return;
}

function iterate(obj, prefix, output) {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] == "object") {
        iterate(obj[property], property, output);
      } else if (prefix) {
        output[prefix + "-" + property] = obj[property];
      } else {
        output[property] = obj[property];
      }
    }
  }
}
