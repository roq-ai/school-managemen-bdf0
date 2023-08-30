import { TeacherInterface } from 'interfaces/teacher';
import { StudentInterface } from 'interfaces/student';
import { GetQueryInterface } from 'interfaces';

export interface ScheduleInterface {
  id?: string;
  day_of_week: number;
  start_time: any;
  end_time: any;
  class: string;
  subject: string;
  teacher_id: string;
  student_id: string;
  created_at?: any;
  updated_at?: any;

  teacher?: TeacherInterface;
  student?: StudentInterface;
  _count?: {};
}

export interface ScheduleGetQueryInterface extends GetQueryInterface {
  id?: string;
  class?: string;
  subject?: string;
  teacher_id?: string;
  student_id?: string;
}
