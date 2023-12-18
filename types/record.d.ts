import { Timestamp } from "firebase/firestore";

export type Record = {
  type: RecordType;
  created_at: Timestamp;
  physical?: {
    blood_pressure?: string;
    weight?: number;
  };
  history_menstruation?: {
    regular?: boolean;
    previous_menstruation?: {
      started_at?: Timestamp;
      amount_of_flow?: "light" | "moderate" | "heavy";
      duration?: number;
      dysmenorrhea?: boolean;
    };
  };
  history_present_illness?: {
    lower_abdomen_pain?: boolean;
    lower_abdomain_pain_on_period?: boolean;
    urination_pain?: boolean;
    vaginal_discharge?: {
      present?: boolean;
      coloration?: string;
      odor?: string;
    };
    contact_bleeding?: boolean;
    contact_lower_abdomain_pain?: boolean;
    contact_urination_pain?: boolean;
  };
  chief_of_complaints?: string;
};

export type RecordType =
  | "diagnostic-infertility-work-up"
  | "request-desirous-of-contraception"
  | "report-abnormal-menstruation"
  | "other-general-remarks"
  | "";
