import React, { useEffect, useState } from "react";
import * as yup from "yup";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Container,
  Checkbox,
  Select,
  Heading,
} from "@chakra-ui/react";

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "User",
  terms: false,
};

const schema = yup.object().shape({
  firstName: yup
    .string("Invalid type.")
    .min(3, "FirstName must have minimum length of 3 chars.")
    .required("FirstName can't be empty."),
  lastName: yup
    .string("Invalid type.")
    .max(20, "LastName must have max length of 20 chars.")
    .required("LastName can't be empty."),
  email: yup.string().email().required("Email is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(6, "Password can't be shoter than 6 chars")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  role: yup.string().required("Role is required."),
  terms: yup.boolean().oneOf([true]).required(),
});

const RegisterForm = (props) => {
  const [formData, setFormData] = useState(initialData);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    //terms: "",
  });

  useEffect(() => {
    async function helper() {
      const valid = await schema.isValid(formData);
      setIsButtonDisabled(!valid);
    }

    helper();
  }, [formData]);

  const handleFieldValidation = (event) => {
    yup
      .reach(schema, event.target.name)
      .validate(event.target.value)
      .then(() => {
        setErrorMessage({ ...errorMessage, [event.target.name]: "" });
      })
      .catch((error) => {
        setErrorMessage({
          ...errorMessage,
          [event.target.name]: error.errors[0],
        });
      });
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
    handleFieldValidation(event);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("formData: ", formData);

    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => props.addNewUser(response.data));

    setFormData(initialData);
  };
  console.log("formData: ", formData);

  return (
    <Container>
      <Heading as="h2" color="blue.300">
        Register Form
      </Heading>
      <form onSubmit={handleFormSubmit}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          {errorMessage.firstName ? (
            <p style={{ color: "red" }}>{errorMessage.firstName}</p>
          ) : null}
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          {errorMessage.lastName ? (
            <p style={{ color: "red" }}>{errorMessage.lastName}</p>
          ) : null}
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          {errorMessage.email ? (
            <p style={{ color: "red" }}>{errorMessage.email}</p>
          ) : null}
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          {errorMessage.password ? (
            <p style={{ color: "red" }}>{errorMessage.password}</p>
          ) : null}
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Role</FormLabel>
          {errorMessage.role ? (
            <p style={{ color: "red" }}>{errorMessage.role}</p>
          ) : null}
          <Select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="Customer">Customer</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Terms</FormLabel>
          {/* {errorMessage.terms ? (
            <p style={{ color: "red" }}>{errorMessage.terms}</p>
          ) : null} */}
          <Checkbox
            name="terms"
            type="checkbox"
            checked={formData.terms}
            onChange={handleInputChange}
          >
            Please Accept our Terms and Conditions.
          </Checkbox>
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          mt="10px"
          disabled={isButtonDisabled}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
