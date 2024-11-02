// SignIn.js
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  auth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

const Authentication = () => {
  useEffect(() => {
    getRedirectResult(auth)
      .then((response) => {
        if (response) {
          const { user } = response;
          createUserDocumentFromAuth(user);
          console.log("Redirect result:", response);
        } else {
          console.log("No redirect result found (null).");
        }
      })
      .catch((error) => {
        console.error("Error fetching redirect result:", error);
      });
  }, []);

  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
