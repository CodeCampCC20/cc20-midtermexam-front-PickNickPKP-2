import * as Yup from "yup";

export const loginSchema = Yup.object({
  usename : Yup.string()
  .required("กรุณากรอกข้อมูล"),

password : Yup.string()
  .required("กรุณากรอกข้อมูล"),
})