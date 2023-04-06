// eslint-disable-next-line no-unused-vars
import * as yup from "yup";
import { object, string, number } from "yup";
const emailRegEx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const alphaRegEx = /^[A-Za-z]+$/;
var usernameRegex = /^[a-zA-Z0-9.\-_$@*!]{3,30}$/;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createTask: object({
    title: string("Please enter a valid title.")
      .required("Title is required.")
      .trim(),
    email: string("Please enter a valid email address.")
      .required("Email is required.")
      .email("Please enter a valid email address.")
      .test(
        "email",
        "Please enter a valid email address.",
        (value) => !value || emailRegEx.test(value)
      )
      .trim(),
    description: string("Please enter a valid description.").trim(),
    range: number()
      .typeError("Only numeric values are allowed")
      .required("Range is required.")
      .min(0, "Minimum value cannot be less than zero(0)")
      .max(100, "Maximum value cannot be greater than 100."),
  }),
  signUp: object({
    firstName: string("Please enter a valid first name.")
      .required("First name is required.")
      .test(
        "firstName",
        "Only alphabets are allowed.",
        (value) => !value || usernameRegex.test(value)
      )
      .trim(),
    userName: string("Please enter a valid first name.")
      .required("User Name is required.")
      .test(
        "firstName",
        "Only alphabets are allowed and Numric are allowed, no whitespace are allowed.",
        (value) => !value || alphaRegEx.test(value)
      )
      .trim(),
    lastName: string("Please enter a valid last name.")
      .required("Last name is required.")
      .test(
        "lastName",
        "Only alphabets are allowed.",
        (value) => !value || alphaRegEx.test(value)
      )
      .trim(),
    password: string("Please enter a valid password.")
      .required("Password is required")
      .trim()
      .test(
        "password",
        "Password length must me be minimum 8 characters.",
        (value) => {
          return !value || value.length >= 8;
        }
      )
      .test(
        "password",
        "Password length can not be more than 20 characters.",
        (value) => {
          return !value || value.length <= 20;
        }
      )
      .test("password", "At least 1 lowercase letter required.", (value) => {
        return !value || value.toUpperCase() !== value;
      })
      .test("password", "At least 1 uppercase letter required.", (value) => {
        return !value || value.toLowerCase() !== value;
      })
      .test("password", "At least 1 digit is required.", (value) => {
        return !value || /\d/.test(value);
      })
      .test(
        "password",
        "At least 1 special character is required.",
        (value) => {
          return !value || !/^[A-Za-z0-9 ]+$/.test(value);
        }
      ),
    confirmPassword: string("Please enter a valid password.")
      .required("Password is required")
      .test(
        "confirmPassword",
        "Confirm Password must match the password.",
        function (value) {
          return this.parent.password === value;
        }
      )
      .trim(),
  }),
  changePassword: object({
    password: string("Please enter a valid password.")
      .required("Password is required")
      .trim()
      .test(
        "password",
        "Password length must me be minimum 8 characters.",
        (value) => {
          return !value || value.length >= 8;
        }
      )
      .test(
        "password",
        "Password length can not be more than 20 characters.",
        (value) => {
          return !value || value.length <= 20;
        }
      )
      .test("password", "At least 1 lowercase letter required.", (value) => {
        return !value || value.toUpperCase() !== value;
      })
      .test("password", "At least 1 uppercase letter required.", (value) => {
        return !value || value.toLowerCase() !== value;
      })
      .test("password", "At least 1 digit is required.", (value) => {
        return !value || /\d/.test(value);
      })
      .test(
        "password",
        "At least 1 special character is required.",
        (value) => {
          return !value || !/^[A-Za-z0-9 ]+$/.test(value);
        }
      ),
  }),
};
