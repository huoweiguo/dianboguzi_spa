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

export const validatePassword = (password:string)=> {
  // 检查密码是否为6位
  if (password.length < 6) {
      return false;
  }
  
  // 定义正则表达式，检查密码是否包含至少一个大写字母、小写字母和特殊符号
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  console.log(hasUpperCase,hasLowerCase,hasSpecialChar,'111')

  // 验证所有条件
  return hasUpperCase && hasLowerCase && hasSpecialChar;
}
