import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util.js";
import FormInput from "../form-input/form-input.component.jsx";

import './sign-in-form.styles.scss';
import Button from "../button/button.component.jsx";

const defaultFormFiels = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFiels);
  const { email, password } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFiels);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      
      resetFormField();
    } catch (error) {
      
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Dispaly Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <br />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignInForm;
