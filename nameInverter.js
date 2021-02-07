const nameInverter = function(name) {
  if (name === '') {
    return '';
  }
  if (name === undefined) {
    return 'Error';
  }
  if (name === "Dr. " ||
  name === "Mr. " ||
  name === "Mrs. " ||
  name === "Ms. ") {
    return '';
  }
  if (name.trim().split(" ")[0] === "Dr." ||
  name.trim().split(" ")[0] === "Mr." ||
  name.trim().split(" ")[0] === "Mrs." ||
  name.trim().split(" ")[0] === "Ms.") {
    let nameArr = name.trim().split(" ");
    let honorific = name.trim().split(" ").shift();
    if (nameArr.length === 2) {
      return honorific + " " + nameArr[1];
    } else if (nameArr.length === 3) {
      return honorific + " " + nameArr[2] + ", " + nameArr[1];
    }
  }
  return name.trim().split(" ").reverse().join(", ");
};

module.exports = nameInverter;