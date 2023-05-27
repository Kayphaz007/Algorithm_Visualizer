export function convertInputToArrayString(string: string) {
  // replace all whitespace characters with nospace
  string = string.replaceAll(/\s/g, "");
  // replace all 4 digits with nospace
  string = string.replaceAll(/\d{4}/g, "");
  // replace two spaces with one space
  string = string.replaceAll(/\s{2}/g, " ");
  // removes preceding space with comma
  string = string.replaceAll(/\s,/g, ",");
  // replaces two commas with one
  string = string.replaceAll(/,,/g, ",");
  // replace anything that is not a digit, space or comma with nospace
  string = string.replaceAll(/[^0-9,\s]/g, "");
  return string;
}

export function convertArrayStringToArray(string: string) {
  return string
    .split(",")
    .filter((v) => v !== "")
    .map((v) => +v);
}

export function getRandomArray(length = generateRandomNumberInRange(5, 30)) {
  return Array.from(new Array(length), () => generateRandomNumberInRange());
}

export function getScreenWidth(){
  return window.innerWidth;
}

export function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


function generateRandomNumberInRange(lowerLimit = 0, upperLimit = 999) {
  return lowerLimit + Math.floor(Math.random() * upperLimit);
}