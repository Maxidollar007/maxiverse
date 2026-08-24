import * as yup from 'yup';


export const validationSchemaInformation = yup.object({
    name:yup
        .string()
        .required("Le nom est requis")
        .min(3,"Le nom doit contenir au moins 3 caractères"),
    email:yup.
        string()
        .email("Email invalide")
        .matches(/^[a-zA-Z0-9._%+-]+@(gmail|outlook|icloud|yahoo|hotmail)\.[a-zA-Z]{2,}$/,"Votre email doit être sous la forme wys@nomdomane")
        .typeError(" Email est requis" )
        .required("Email est requis"),
    message:yup
    .string().
    required("Message est requis")
})