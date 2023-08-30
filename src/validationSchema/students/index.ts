import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  class: yup.string().required(),
  section: yup.string().required(),
  fees: yup.number().integer().required(),
  transport_details: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  academic_year_id: yup.string().nullable().required(),
});
