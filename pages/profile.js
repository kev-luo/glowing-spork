import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";
import { Box, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

import StatsCard from "../components/StatsCard";

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
    <Box maxW="7xl" mx="auto" pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Heading as="h1" textAlign="center" py={10}>
        Tell Me About Myself
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={"My Username Is"} stat={user.username} />
        <StatsCard title={"My Email Is"} stat={user.attributes.email} />
        <StatsCard title={"My Name Rhymes With"} stat={"TBD"} />
      </SimpleGrid>
      <Button
        onClick={signOut}
        colorScheme="red"
        fontWeight="semibold"
        py={2}
        mt={10}
      >
        Sign Out
      </Button>
    </Box>
  );
}

export default withAuthenticator(Profile);
