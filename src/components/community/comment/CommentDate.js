import { format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

function CommentDate(props) {
  const day = new Date(props.date);
  const now = Date.now();
  const diff = (now - day.getTime()) / 1000;

  const m = format(day, "MM");
  const d = format(day, "dd");
  if (diff < 60 * 1) {
    // 1분 미만일땐 방금 전 표기
    return "방금 전";
  }
  if (diff < 60 * 60 * 24 * 3) {
    // 3일 미만일땐 시간차이 출력(몇시간 전, 며칠 전)
    return formatDistanceToNow(day, { addSuffix: true, locale: ko });
  }
  return `${m}월 ${d}일`; // 날짜 포맷
}

export default CommentDate;
