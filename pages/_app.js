import "../configureAmplify";
import { useState, useEffect } from "react";
import { Auth, Hub } from "aws-amplify";

import Nav from "../components/NavigationBar/Nav";
import { ThemeProvider } from "../components/themeContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [signedInUser, setSignedInUser] = useState(false);
  useEffect(() => {
    authListener();
  });

  async function authListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          return setSignedInUser(true);
        case "signOut":
          return setSignedInUser(false);
      }
    });
    try {
      await Auth.currentAuthenticatedUser();
      setSignedInUser(true);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <ThemeProvider>
        <Nav signedInUser={signedInUser} />
        <div>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
