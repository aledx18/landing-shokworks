import Image from 'next/image'

export default function Contact() {
  return (
    <section className='mt-2'>
      <div className='body-font relative bg-[#DFF0FF]/40 '>
        <div className='absolute inset-0'>
          <Image
            src='/fondoP.svg'
            fill
            priority
            alt='image'
            className='h-auto w-auto rounded-lg bg-cover bg-center object-cover object-center fill-blue-400'
          />
        </div>

        <div className='container flex flex-col'>
          <div className='flex flex-col items-center pt-12'>
            <h1 className='px-10 font-montserrat lg:px-40 md:text-3xl text-xl text-[#222222]'>
              Facing Problem?
            </h1>
            <h2 className='font-semibold font-montserrat px-10 lg:px-40 md:text-3xl text-xl text-[#222222]'>
              Lets Get In Touch Now
            </h2>
          </div>
          <div className='flex z-10 my-20 justify-evenly md:flex-row flex-col items-center text-center'>
            <div className='flex items-center justify-center md:flex-row flex-col'>
              <div className=' bg-white shadow-lg rounded-lg p-14 flex flex-col'>
                <div className='relative mb-4 flex justify-between gap-10'>
                  <label
                    htmlFor='UserEmail'
                    className='relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600'
                  >
                    <input
                      type='email'
                      id='UserEmail'
                      placeholder='Email'
                      className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                    />
                    <span className='absolute left-0 top-2 -translate-y-1/2 text-xs text-[#101C21] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs'>
                      First Name
                    </span>
                  </label>
                  <label
                    htmlFor='UserEmail'
                    className='relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600'
                  >
                    <input
                      type='email'
                      id='UserEmail'
                      placeholder='Email'
                      className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                    />

                    <span className='absolute left-0 top-2 -translate-y-1/2 text-xs text-[#101C21] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs'>
                      Last Name
                    </span>
                  </label>
                </div>
                <div className='relative mb-4'>
                  <label
                    htmlFor='UserEmail'
                    className='relative my-10 block overflow-hidden border-b border-gray-200  focus-within:border-blue-600'
                  >
                    <input
                      type='email'
                      id='UserEmail'
                      placeholder='Email'
                      className='peer h-8 w-full border-none bg-transparent  placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                    />

                    <span className='absolute left-0 top-2 -translate-y-1/2 text-xs text-[#101C21] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs'>
                      Your Email Adress
                    </span>
                  </label>
                  <label
                    htmlFor='UserEmail'
                    className='relative my-10 block overflow-hidden border-b border-gray-200 focus-within:border-blue-600'
                  >
                    <input
                      type='email'
                      id='UserEmail'
                      placeholder='Email'
                      className='peer h-8 w-full border-none placeholder-transparent bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                    />

                    <span className='absolute left-0 top-2 -translate-y-1/2 text-xs text-[#101C21] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs'>
                      Wich Related Problem You Are Fancing?
                    </span>
                  </label>
                  <label
                    htmlFor='UserEmail'
                    className='relative mt-4 mb-8 block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600'
                  >
                    <input
                      type='email'
                      id='UserEmail'
                      placeholder='Email'
                      className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                    />

                    <span className='absolute left-0 top-2 -translate-y-1/2 text-xs text-[#101C21] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs'>
                      Type Your Message
                    </span>
                  </label>
                  <button className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#2C3636] to-[#1B92C8] p-0.5 md:text-sm text-xs text-white hover:text-white focus:outline-none focus:ring-1'>
                    <span className='relative rounded-md md:px-6 px-4 py-2.5 transition-all duration-75 ease-in bg-white group-hover:bg-gradient-to-r from-[#2C3636] to-[#1B92C8] text-[#185F7F] hover:text-white'>
                      Know More
                    </span>
                  </button>
                </div>
              </div>
              <Image
                src='/fly.png'
                width={100}
                height={100}
                priority
                alt='image'
                className='w-auto h-auto'
              />
            </div>

            <Image
              src='/banner-1.png'
              width={350}
              height={700}
              priority
              alt='image'
              className='w-auto h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
