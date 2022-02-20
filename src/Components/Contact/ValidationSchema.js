import * as yup from 'yup';

export const ValidationSchema = yup.object().shape({    
    name: yup.string().min(3, "It's too short").required("Required"),
    email: yup.string().email().required("Please give a valid email address"),    
    phone: yup.number("Please give a valid phone number"),
    message: yup.string().required("Required")
});