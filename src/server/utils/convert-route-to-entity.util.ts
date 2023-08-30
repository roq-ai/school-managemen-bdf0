const mapping: Record<string, string> = {
  'academic-years': 'academic_year',
  organizations: 'organization',
  schedules: 'schedule',
  students: 'student',
  teachers: 'teacher',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
