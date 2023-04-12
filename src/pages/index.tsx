import About from '../../components/About'
import Carousel from '../../components/Carousel'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import PartnesClients from '../../components/PartnesClients'
import { fetchDetail } from '../../components/getNewsApi'
import { News } from '../../components/interface/interface'

interface DetailProps {
  data: News
}

export default function Home({ data }: DetailProps) {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Carousel data={data} />
      <PartnesClients />
    </>
  )
}

export async function getStaticProps() {
  const data = await fetchDetail()

  return { props: { data } }
}
