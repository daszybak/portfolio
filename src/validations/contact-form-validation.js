import * as yup from 'yup';

const contactFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email().required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

export default contactFormSchema;
