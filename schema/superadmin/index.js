import * as Yup from 'yup';

export const createFranchiseSchema = Yup.object({
    bussinessname: Yup.string()
        .trim()
        .required('Business Name is required'),
    ownerName: Yup.string()
        .trim()
        .required('Owner Name is required'),
    location: Yup.string()
        .trim()
        .required('Location is required'),
    contactInfo: Yup.string()
        .trim()
        .required('Contact Info is required')
        .matches(
            /^[\d+\-().\s]+$/,
            'Contact Info must be a valid phone number or similar'
        ),
    planName: Yup.string()
        .trim()
        .required('Plan Name is required'),
    contractDuration: Yup.string()
        .trim()
        .required('Contract Duration is required'),

});


export const createSrSchema = Yup.object({
  name: Yup.string()
    .trim()
    .matches(/^\S.*\S$|^\S$/, 'No leading or trailing spaces allowed')
    .required('User name is required'),

  email: Yup.string()
    .trim()
    .email('Invalid email format')
    .required('Email is required'),

  phone: Yup.string()
    .trim()
    .matches(/^[0-9]+$/, 'Phone must be numeric')
    .min(10, 'Phone must be at least 10 digits')
    .required('Phone number is required'),

  password: Yup.string()
    .trim()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),

  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),

  region: Yup.string()
    .trim()
    .required('Region is required'),
  area: Yup.string()
    .trim()
    .required('Area is required'),
});


export const createZISchema = Yup.object({
  name: Yup.string()
    .trim()
    .matches(/^\S.*\S$|^\S$/, 'No leading or trailing spaces allowed')
    .required('User name is required'),

  email: Yup.string()
    .trim()
    .email('Invalid email format')
    .required('Email is required'),

  phone: Yup.string()
    .trim()
    .matches(/^[0-9]+$/, 'Phone must be numeric')
    .min(10, 'Phone must be at least 10 digits')
    .required('Phone number is required'),

  password: Yup.string()
    .trim()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),

  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),

  region: Yup.string()
    .trim()
    .required('Region is required'),

  zone: Yup.string()
    .trim()
    .required('Zone is required'),

  area: Yup.string()
    .trim()
    .required('Area is required'),
});


export const createSalesExecutiveSchema = Yup.object({
  name: Yup.string()
    .trim()
    .matches(/^\S.*\S$|^\S$/, 'No leading or trailing spaces allowed')
    .required('User name is required'),

  email: Yup.string()
    .trim()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .trim()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),

  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});