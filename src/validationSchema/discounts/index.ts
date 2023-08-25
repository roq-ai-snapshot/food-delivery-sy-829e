import * as yup from 'yup';

export const discountValidationSchema = yup.object().shape({
  code: yup.string().required(),
  description: yup.string().nullable(),
  restaurant_id: yup.string().nullable().required(),
});
