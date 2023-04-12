import Image from 'next/image'
import Link from 'next/link'

const Partnes = [
  {
    id: 0,
    name: 'Immersity',
    logo: '/immersity.png'
  },
  {
    id: 1,
    name: 'WifiPass',
    logo: '/pass.png'
  },
  {
    id: 2,
    name: 'Kinesis',
    logo: '/kinesis.png'
  },
  {
    id: 3,
    name: 'Mex',
    logo: '/mex.png'
  },
  {
    id: 4,
    name: 'Mobile',
    logo: '/mobile.png'
  },
  {
    id: 5,
    name: 'GoodTime',
    logo: '/good.png'
  }
]

export default function PartnesClients() {
  return (
    <section className='body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-col'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-[#222222]'>
            Our Partnes & Clients
          </h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mx-60'>
          {Partnes.map((item) => (
            <div
              key={item.id}
              className='flex py-6 justify-center items-center shadow-lg transition-all hover:bg-[#185F7F] text-[#185F7F] hover:text-white hover:scale-105'
            >
              <div className='flex relative flex-col justify-center items-center'>
                <Image
                  alt='logo'
                  src={item.logo}
                  width='100'
                  height='100'
                  className='w-auto h-auto'
                />
                <Link
                  className='leading-relaxed font-medium text-md pt-4'
                  href='#'
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* <section className='body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-[#222222]'>
            Our Partnes & Clients
          </h1>
        </div>
        <div className='container px-5 py-24 mx-32'>
          <div className='flex items-center flex-wrap'>
            {Partnes.map((item) => (
              <div
                key={item.id}
                className='lg:w-1/3 sm:w-1/2 justify-center p-4 max-h-60 rounded-sm flex shadow-lg transition-all hover:bg-[#185F7F] text-[#185F7F] hover:text-white hover:scale-105'
              >
                <div className='flex relative flex-col justify-center items-center'>
                  <Image
                    alt='logo'
                    src={item.logo}
                    width='100'
                    height='100'
                    className='w-auto h-auto'
                  />
                  <Link
                    className='leading-relaxed font-medium text-md pt-4'
                    href='#'
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section> */
