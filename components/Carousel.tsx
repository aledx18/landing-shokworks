import Image from 'next/image'
import { News } from './interface/interface'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

interface DetailProps {
  data: News
}

export default function Carousel({ data }: DetailProps) {
  return (
    <section className='text-gray-400 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col w-full mb-20 items-center justify-center'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-[#222222]'>
            What is the
          </h1>
          <h1 className='sm:text-3xl text-2xl font-semibold text-[#222222]'>
            Speciality Of Us?
          </h1>
        </div>
        <div className='flex flex-wrap m-4'>
          <Swiper
            slidesPerView={4}
            spaceBetween={9}
            pagination={{
              clickable: true
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1
              },
              '@0.75': {
                slidesPerView: 2
              },
              '@1.00': {
                slidesPerView: 3
              },
              '@1.50': {
                slidesPerView: 4
              }
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            {data.articles.slice(0, 8).map((item, i) => (
              <SwiperSlide key={i} className='cursor-pointer'>
                <div className='flex flex-col p-6 rounded-md shadow-lg items-center'>
                  <div className='w-6/12 sm:w-4/12 px-4'>
                    <Image
                      className='shadow-lg rounded-full max-w-full h-auto align-middle border-none'
                      src='https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg'
                      alt='content'
                      width={100}
                      height={100}
                    />
                  </div>

                  <h2 className='text-lg text-black font-semibold title-font mb-4'>
                    {item.title}
                  </h2>
                  <p className='leading-relaxed text-sm text-black'>
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
