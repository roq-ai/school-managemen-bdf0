import { StudentInterface } from 'interfaces/student';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface AcademicYearInterface {
  id?: string;
  year: number;
  start_date: any;
  end_date: any;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  student?: StudentInterface[];
  organization?: OrganizationInterface;
  _count?: {
    student?: number;
  };
}

export interface AcademicYearGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
}
