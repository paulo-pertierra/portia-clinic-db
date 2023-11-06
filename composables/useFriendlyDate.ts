import { Timestamp } from "firebase/firestore";
import { useDayjs } from "#imports";

export const useFriendlyDate = () => {
  const dayjs = useDayjs();
  function formatFromTimestamp(date: Timestamp | undefined) {
    if (!date) return "with an invalid date";
    return dayjs(date.toDate()).fromNow();
  }

  function formatFromDate(date: Date | undefined) {
    if (!date) return "No data";
    return dayjs(date).fromNow();
  }
  return { formatFromTimestamp, formatFromDate };
};
