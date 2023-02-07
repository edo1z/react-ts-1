import {
  Box,
  IconButton,
  Flex,
  Spacer,
  Heading,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { BiLogIn } from "react-icons/bi";

function NavBar() {
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        p={4}
        bg="green.300"
      >
        <Box p="2">
          <Heading size="md">NavBar</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal">Sign Up</Button>
          <Button colorScheme="teal">Log in</Button>
          <IconButton
            aria-label="Search database"
            colorScheme="white"
            size="lg"
            variant="ghost"
            icon={<BiLogIn />}
          />
        </ButtonGroup>
      </Flex>
    </>
  );
}
export default NavBar;
