import * as Yup from 'yup';

export const formSchema = Yup.object({
   fullName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .min(3, 'Must be at least 3 characters')
      .required('Required'),
   textArea: Yup.string()
      .min(10, 'Must be at least 10 characters')
      .required('Required'),
   email: Yup.string().email('Invalid email address').required('Required'),
});
