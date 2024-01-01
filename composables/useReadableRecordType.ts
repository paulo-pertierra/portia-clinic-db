import { Record } from "~/types/record";

export const useReadableRecordType = (recordType: Record["type"]) => {  
  if (recordType === "diagnostic-infertility-work-up")
    return "Infertility Work Up"
  if (recordType === "other-general-remarks")
    return "Other/General Remarks"
  if (recordType === "report-abnormal-menstruation")
    return "Abnormal Menstruation"
  if (recordType === "request-desirous-of-contraception")
    return "Desirous of Contraception"
}