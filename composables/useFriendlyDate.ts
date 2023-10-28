import { Timestamp } from "firebase/firestore";
import { useDayjs } from "#imports";

export const useFriendlyDate = () => {
  const dayjs = useDayjs();
  function formatFromTimestamp(date: Timestamp) {
    if (!date) return "with an invalid date";
    return dayjs(date.toDate()).fromNow();
  }

  return { formatFromTimestamp }
}