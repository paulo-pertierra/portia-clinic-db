import { Timestamp, boolean } from "firebase/firestore";

export interface Patient {
  id?: string;
  address?: string;
  age?: number;
  created_at?: Timestamp;
  city?: string;
  civil_status?: string;
  contact_number?: string;
  date_of_birth?: Timestamp;
  date_of_marriage?: string;
  email_address?: string;
  environment_history: {
    alcohol?: boolean;
    cigarette?: boolean;
    drugs?: boolean;
  };
  family_history: {
    allergy?: boolean;
    asthma?: boolean;
    blood_disease?: boolean;
    cancer?: boolean;
    cleft_lip?: boolean;
    cyst?: boolean;
    diabetes?: boolean;
    epilepsy?: boolean;
    goiter?: boolean;
    heart_disease?: boolean;
    hyper_tension?: boolean;
    lung_disease?: boolean;
    mentally_retarded?: boolean;
    myoma?: boolean;
    pre_eclampsia?: boolean;
    twins?: boolean;
    uti?: boolean;
  };
  first_name?: string;
  image?: string;
  last_name?: string;
  medical_history: {
    allergy?: boolean;
    blood_disease?: boolean;
    convulsion?: boolean;
    cyst?: boolean;
    diabetes?: boolean;
    goiter?: boolean;
    heart_disease?: boolean;
    hypertension?: boolean;
    lung_disease?: boolean;
    myoma?: boolean;
    pre_eclampsia?: boolean;
    uti?: boolean;
  };
  middle_name?: string;
  occupation?: string;
  religion?: string;
  remarks?: string;
  sex?: string;
  spouse_age?: number;
  spouse_occupation?: string;
  state?: string;
  updated_at?: Timestamp;
}
