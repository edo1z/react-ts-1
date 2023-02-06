import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Default(props:any) {
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  )
}
export default Default
