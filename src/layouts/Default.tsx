import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Container } from '@chakra-ui/react'

function Default(props:any) {
  return (
    <div>
      <NavBar />
      <Container>
        {props.children}
      </Container>
      <Footer />
    </div>
  )
}
export default Default
