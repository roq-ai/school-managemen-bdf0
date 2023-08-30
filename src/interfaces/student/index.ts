import { ScheduleInterface } from 'interfaces/schedule';
import { UserInterface } from 'interfaces/user';
import { AcademicYearInterface } from 'interfaces/academic-year';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  class: string;
  section: string;
  fees: number;
  transport_details?: string;
  user_id: string;
  academic_year_id: string;
  created_at?: any;
  updated_at?: any;
  schedule?: ScheduleInterface[];
  user?: UserInterface;
  academic_year?: AcademicYearInterface;
  _count?: {
    schedule?: number;
  };
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  class?: string;
  section?: string;
  transport_details?: string;
  user_id?: string;
  academic_year_id?: string;
}
