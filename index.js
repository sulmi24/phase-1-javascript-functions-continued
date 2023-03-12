// code your solution here
function saturdayFun(target = "roller-skate") {
  return `This Saturday, I want to ${target}!`;
}

console.log(saturdayFun());

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

console.log(mondayWork());

function wrapAdjective(txt = "*") {
  return function (emphatic = "special") {
    return `You are ${txt}${emphatic}${txt}!`;
  };
}

console.log(wrapAdjective("%")("a dedicated programmer"));
