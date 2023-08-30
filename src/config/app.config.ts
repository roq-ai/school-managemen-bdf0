interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: [],
  tenantRoles: ['Admin', 'Teacher', 'Accountant', 'Student', 'Parent'],
  tenantName: 'Organization',
  applicationName: 'School management',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage academic years',
    'Manage users including students, parents, teachers, and accountants',
    'Create class schedules',
    'Send SMS alerts to parents',
    'Track school bus',
    'Publish circulars to all students',
  ],
};
