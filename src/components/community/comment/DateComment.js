import { format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

function DateComment(props) {
  const d = new Date(props.date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;
  if (diff < 60 * 1) {
    // 1분 미만일땐 방금 전 표기
    return "방금 전";
  }
  if (diff < 60 * 60 * 24 * 7) {
    // 3일 미만일땐 시간차이 출력(몇시간 전, 며칠 전)
    return formatDistanceToNow(d, { addSuffix: true, locale: ko });
  }
  return format(d, "PPP EEE p", { locale: ko }); // 날짜 포맷
}

export default DateComment;
