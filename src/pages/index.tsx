import About from '../../components/About'
import Carousel from '../../components/Carousel'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import PartnesClients from '../../components/PartnesClients'
import Testimonial from '../../components/Testimonial'
import { fetchDetail } from '../../components/getNewsApi'
import { fetchTestimon } from '../../components/getTestimonials'
import { News, Coments } from '../../components/interface/interface'

interface DetailProps {
  data: News
  Testimonials: Coments[]
}

export default function Home({ data, Testimonials }: DetailProps) {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Carousel data={data} />
      <PartnesClients />
      <Testimonial Testimonials={Testimonials} />
      <Contact />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const data = await fetchDetail()
  const Testimonials = await fetchTestimon()

  return { props: { data, Testimonials } }
}
