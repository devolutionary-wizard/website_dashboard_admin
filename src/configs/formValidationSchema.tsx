import * as Yup from "yup";

export const formValidation = {
  loginValidationSchema: Yup.object({
    password: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  }),
  createArticleSchema: Yup.object({
    // images: Yup.array().min(1).required('Please Drop Your File in here'),
    titleEn: Yup.string()
      .max(20, "max 20 characters")
      .required("Please Input the Title in English"),
    titleKh: Yup.string()
      .max(35, "max 35 characters")
      .required("Please Input the Title in Khmer"),
    descriptionEn: Yup.string()
      .trim()
      .max(250, "max 250 characters")
      .required("Please Input the Description in English"),
    descriptionKh: Yup.string()
      .trim()
      .max(250, "max 250 characters")
      .required("Please Input the Description in Khmer"),
    contentEn: Yup.string().required("Please Input the Content in English "),
    contentKh: Yup.string().required("Please Input the Content in Khmer"),
    slug: Yup.string().required("Required"),
  }),
};
