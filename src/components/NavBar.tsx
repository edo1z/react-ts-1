import { Box, IconButton } from "@chakra-ui/react";
import { BiLogIn } from "react-icons/bi";

function NavBar() {
  return (
    <Box
      w="100%"
      p={4}
      color="white"
      bgGradient="linear(to-t, green.500, blue.500)"
    >
      NavBar
      <IconButton
        aria-label="Search database"
        colorScheme="blue"
        size="lg"
        variant="outline"
        icon={<BiLogIn />}
      />
    </Box>
  );
}
export default NavBar;
