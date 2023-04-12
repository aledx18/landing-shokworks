import Image from 'next/image'
import { News } from './interface/interface'

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
          {data.articles.slice(0, 5).map((item, i) => (
            <div key={i} className='xl:w-1/4 md:w-1/2 p-4'>
              <div className='bg-opacity-40 p-6 rounded-md shadow-lg'>
                <Image
                  className='h-auto rounded-full w-auto object-cover object-center '
                  src={item.urlToImage}
                  alt='content'
                  width={100}
                  height={100}
                />

                <h2 className='text-lg text-black font-semibold title-font mb-4'>
                  {item.title}
                </h2>
                <p className='leading-relaxed text-black'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
