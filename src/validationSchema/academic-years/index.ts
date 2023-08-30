import * as yup from 'yup';

export const academicYearValidationSchema = yup.object().shape({
  year: yup.number().integer().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  organization_id: yup.string().nullable().required(),
});
