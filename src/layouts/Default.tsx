import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Box } from "@chakra-ui/react";

function Default(props: any) {
  return (
    <div>
      <NavBar />
      <Box pt={5} pb={20} bg="white">
        <Container>{props.children}</Container>
      </Box>
      <Footer />
    </div>
  );
}
export default Default;
