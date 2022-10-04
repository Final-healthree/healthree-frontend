function getTargetsByDateList(dataList) {
  console.log(dataList);
  const circleTarget = [];
  const leftCircleTarget = [];
  const rightCircleTarget = [];
  const squareTarget = [];
  for (const date of dataList) {
    const { day1, day2, day3, goal_id } = date;
    if (day1 && day2 === undefined) {
      circleTarget.push(new Date(day1));
    } else if (day1 && day2 && day3 === undefined) {
      leftCircleTarget.push(new Date(day1));
      rightCircleTarget.push(new Date(day2));
    } else {
      leftCircleTarget.push(new Date(day1)); // new Date로 넣기
      squareTarget.push(new Date(day2));
      rightCircleTarget.push(new Date(day3));
    }
  }

  return {
    circleTarget,
    leftCircleTarget,
    rightCircleTarget,
    squareTarget,
  };
}

export default getTargetsByDateList;
