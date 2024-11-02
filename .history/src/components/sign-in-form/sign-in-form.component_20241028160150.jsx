import { useState } from "react";
import FormInput from "../form-input/form-input.component.jsx";

import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.util.js";
import Button from "../button/button.component.jsx";
import "./sign-in-form.styles.scss";

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

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      createUserDocumentFromAuth(user);
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      resetFormField();
    } catch (error) {}
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <br />
        <Button type="submit">Sign In</Button>
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignInForm;
