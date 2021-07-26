import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Wrapper from "../components/Wrapper";

function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
  }, []);
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
  }
  async function signOut() {
    try {
      await Auth.signOut();
      router.push("/");
    } catch (err) {
      console.log(`Error signing out: ${err}`);
    }
  }
  if (!user) return null;
  return (
    <Wrapper>
      <div className="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
        <h1>Tell me about myself</h1>
        <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
          <div className="w-full lg:w-1/5">
            <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-purple-400">
              <div className="flex items-center">
                <div className="icon w-14 p-3.5 bg-purple-400 text-white rounded-full mr-3">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-lg">My Username Is</div>
                  <div className="text-sm text-gray-400">{user.username}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/5">
            <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-blue-400">
              <div className="flex items-center">
                <div className="icon w-14 p-3.5 bg-blue-400 text-white rounded-full mr-3">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-lg">My Email Is</div>
                  <div className="text-sm text-gray-400">
                    {user.attributes.email}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/5">
            <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-yellow-400">
              <div className="flex items-center">
                <div className="icon w-14 p-3.5 bg-yellow-400 text-white rounded-full mr-3">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-lg">My Name Rhymes With</div>
                  <div className="text-sm text-gray-400">TBA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </Wrapper>
  );
}

export default withAuthenticator(Profile);
