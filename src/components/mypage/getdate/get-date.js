import getTargetsByDateList from "../getdate/get-date-option";
import getCalenderCss from "../getdate/get-date-mark";

function getDateOption(props) {
  const failCssList = getCalenderCss("fail");
  const failTargetList = getTargetsByDateList(props.fail);

  const successCssList = getCalenderCss("success");
  const successTargetList = getTargetsByDateList(props.success);

  return {
    modifiers: {
      // 실패
      "circle-on-fail": failTargetList.circleTarget,
      "left-circle-on-fail": failTargetList.leftCircleTarget,
      "right-circle-on-fail": failTargetList.rightCircleTarget,
      // 성공
      "left-circle-on-success": successTargetList.leftCircleTarget,
      "right-circle-on-success": successTargetList.rightCircleTarget,
      "square-on-success": successTargetList.squareTarget,
    },
    modifiersStyles: {
      // 실패
      "circle-on-fail": failCssList.circleCss,
      "left-circle-on-fail": failCssList.leftCircleCss,
      "right-circle-on-fail": failCssList.rightCircleCss,
      // 성공
      "left-circle-on-success": successCssList.leftCircleCss,
      "right-circle-on-success": successCssList.rightCircleCss,
      "square-on-success": successCssList.squareCss,
    },
  };
}

export default getDateOption;
