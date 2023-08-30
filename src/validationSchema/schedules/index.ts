import * as yup from 'yup';

export const scheduleValidationSchema = yup.object().shape({
  day_of_week: yup.number().integer().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  class: yup.string().required(),
  subject: yup.string().required(),
  teacher_id: yup.string().nullable().required(),
  student_id: yup.string().nullable().required(),
});
