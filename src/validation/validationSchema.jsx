import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().when('$isStep1', {
    is: true,
    then: Yup.string().required('Name is required')
  }),
  email: Yup.string().email('Invalid email format').when('$isStep1', {
    is: true,
    then: Yup.string().required('Email is required')
  }),
  address: Yup.string().when('$isStep2', {
    is: true,
    then: Yup.string().required('Address is required')
  }),
  city: Yup.string().when('$isStep2', {
    is: true,
    then: Yup.string().required('City is required')
  }),
  zip: Yup.string().matches(/^[0-9]{5}$/, 'Zip code must be 5 digits').when('$isStep2', {
    is: true,
    then: Yup.string().required('Zip code is required')
  }),
  cardNumber: Yup.string().matches(/^[0-9]{16}$/, 'Card number must be exactly 16 digits').when('$isStep3', {
    is: true,
    then: Yup.string().required('Card number is required')
  }),
  billingAddress: Yup.string().when('$isStep3', {
    is: true,
    then: Yup.string().required('Billing address is required')
  }),
});

export default validationSchema;
