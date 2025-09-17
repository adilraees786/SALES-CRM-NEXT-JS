

import * as Yup from 'yup';

export const createDailysale = Yup.object({
    spice: Yup.string()
        .trim().
        required('Spice is required'),
    lacha: Yup.string().
        trim().
        required('Lacha is required'),
    cake: Yup.string().
        trim().
        required('Cake is required'),
    semi: Yup.string().
        trim().
        required('Semi is required'),
    chips: Yup.string().
        trim().
        required('Chips is required'),
    shop: Yup.string().
        trim().
        required('Shop is required'),
    ims: Yup.string().
        trim().
        required('IMS is required'),
    image: Yup.mixed()
        .notRequired(),
});
