function getDateOption(dataList) {
  const { getTargetsByDateList } = require("./hi");
  const { getCalenderCss } = require("./hello");

  const failCssList = getCalenderCss("fail");
  const failTargetList = getTargetsByDateList(dataList);

  const successCssList = getCalenderCss("success");
  const successTargetList = getTargetsByDateList(dataList);

  console.log(dataList);

  return {
    modifiers: {
      // 실패
      "circle-on-fail": failTargetList.circleTarget,
      "left-circle-on-fail": failTargetList.leftCircleTarget,
      "right-circle-on-fail": failTargetList.rightCircleTarget,
      "square-on-fail": failTargetList.squareTarget,

      // 성공
      "circle-on-success": successTargetList.circleTarget,
      "left-circle-on-success": successTargetList.leftCircleTarget,
      "right-circle-on-success": successTargetList.rightCircleTarget,
      "square-on-success": successTargetList.squareTarget,
    },
    modifiersStyles: {
      // 실패
      "circle-on-fail": failCssList.circleCss,
      "left-circle-on-fail": failCssList.leftCircleCss,
      "right-circle-on-fail": failCssList.rightCircleCss,
      "square-on-fail": failCssList.squareCss,
      // 성공
      "circle-on-success": successCssList.circleCss,
      "left-circle-on-success": successCssList.leftCircleCss,
      "right-circle-on-success": successCssList.rightCircleCss,
      "square-on-success": successCssList.squareCss,
    },
  };
}

module.exports = {
  getDateOption,
};
