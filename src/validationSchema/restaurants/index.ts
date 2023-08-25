import * as yup from 'yup';

export const restaurantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  menu: yup.string().required(),
  startup_id: yup.string().nullable().required(),
});
