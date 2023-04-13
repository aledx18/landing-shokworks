import Image from 'next/image'

export default function About() {
  return (
    <section className='text-gray-400 body-font lg:mx-52'>
      <div className='container mx-auto flex py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-40 md:pr-24 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='sm:text-4xl text-3xl mb-4 font-montserrat lg:mr-40 text-[#222222]'>
            The Process About Our Work
          </h1>
          <p className='mb-8 text-[#555555]'>
            Alejandro Laplana leads and adaptable end-to-end development team
            consisting of a large portion of captable enterprise mixed reality
            solutions.
          </p>
          <div className='flex justify-center items-center'>
            <button className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#2C3636] to-[#1B92C8] p-0.5 md:text-sm text-xs text-white hover:text-white focus:outline-none focus:ring-1'>
              <span className='relative rounded-md md:px-6 px-4 py-2.5 transition-all duration-75 ease-in bg-white group-hover:bg-gradient-to-r from-[#2C3636] to-[#1B92C8] text-[#185F7F] hover:text-white'>
                Know More
              </span>
            </button>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <Image
            src='/build.png'
            width={1000}
            height={900}
            alt='about Build Image'
          />
        </div>
      </div>

      <div className='container mx-auto flex py-24 md:flex-row flex-col items-center'>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10'>
          <Image
            src='/article-image-5.png'
            width={1000}
            height={900}
            alt='about Build Image'
          />
        </div>
        <div className='lg:flex-grow md:w-1/2 lg:pl-48 md:pl-20 flex flex-col md:items-start md:text-left items-center text-center'>
          <h1 className='lg:mr-20 sm:text-4xl text-3xl mb-4 text-[#222222] font-montserrat'>
            We are here to <span className='font-semibold'>always help</span>{' '}
            you
          </h1>
          <p className='mb-8 leading-relaxed text-[#555555]'>
            Shokworks team provide solutions and guidance to every project,
            taking the project vision to high level.
          </p>
        </div>
      </div>
    </section>
  )
}
