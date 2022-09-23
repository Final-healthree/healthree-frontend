function getTargetsByDateList(dataList) {
  console.log(dataList);
  const circleTarget = [];
  const leftCircleTarget = [];
  const rightCircleTarget = [];
  const squareTarget = [];
  for (const date of dataList) {
    console.log(date);
    const { date: dateScope, goal_id } = date;

    if (dateScope.length === 1) {
      circleTarget.push(new Date(dateScope[0]));
    } else if (dateScope.length === 2) {
      leftCircleTarget.push(new Date(dateScope[0]));
      rightCircleTarget.push(new Date(dateScope[1]));
    } else {
      const dateScopeLength = dateScope.length;

      const firstIndex = dateScope.slice(0, 1); // 배열[0]으로 가능?
      const othersIndex = dateScope[1];
      const lastIndex = dateScope.slice(dateScopeLength - 1, dateScopeLength);

      leftCircleTarget.push(new Date(firstIndex)); // new Date로 넣기
      squareTarget.push(new Date(othersIndex));
      rightCircleTarget.push(new Date(lastIndex));
    }
  }

  console.log(squareTarget);

  return {
    circleTarget,
    leftCircleTarget,
    rightCircleTarget,
    squareTarget,
  };
}

module.exports = {
  getTargetsByDateList,
};
