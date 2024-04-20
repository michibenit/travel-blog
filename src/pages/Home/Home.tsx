import BlogPreview from "../../components/BlogPreview/BlogPreview"
import Navbar from "../../components/Navbar/Navbar"
import "./Home.css"

const Home = () => {

  const name = "Michi"

  return (
    <>
    <Navbar></Navbar>
     <h1>El Blog de Viajes de {name}</h1>
     <BlogPreview/>
     <BlogPreview/>
     <BlogPreview/>
     <BlogPreview/>
     <BlogPreview/>
     <BlogPreview/>
     <BlogPreview/>
    </>
  )
}

export default Home