export const checkMobile = (mobile: string) => {
  const regExp = /^1[3-9]\d{9}$/;
  if (regExp.test(mobile)) {
    console.log(mobile, "mobile");
    return true;
  } else {
    return false;
  }
};

export const divisionTrim = (str: string) => {
  return str.replace(/\s+/g, "");
};
