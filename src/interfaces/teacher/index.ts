import { ScheduleInterface } from 'interfaces/schedule';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TeacherInterface {
  id?: string;
  subject: string;
  class_assigned: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  schedule?: ScheduleInterface[];
  user?: UserInterface;
  _count?: {
    schedule?: number;
  };
}

export interface TeacherGetQueryInterface extends GetQueryInterface {
  id?: string;
  subject?: string;
  class_assigned?: string;
  user_id?: string;
}
