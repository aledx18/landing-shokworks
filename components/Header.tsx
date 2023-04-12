import Image from 'next/image'

export default function Header() {
  return (
    <section className='mt-2'>
      <div className='body-font relative'>
        <div className='absolute inset-0'>
          <Image
            src='/fondoP.svg'
            fill
            priority
            alt='image'
            className='h-auto w-auto rounded-lg bg-cover bg-center object-cover object-center fill-blue-400'
          />
        </div>

        <div className='container flex flex-col items-center'>
          <div className='relative my-32 flex h-full w-full flex-col justify-center items-center text-center'>
            <Image
              src='/community1.png'
              width={350}
              height={700}
              priority
              alt='image'
              className='w-auto h-auto'
            />
            <div className='mx-96 pt-8'>
              <h1 className='font-bold px-24 text-4xl text-zinc-800'>
                A Brand New Way To See The World
              </h1>
              <div className='flex justify-center gap-4 pt-8'>
                <button className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#2C3636] to-[#1B92C8] p-0.5 text-sm font-medium text-white hover:text-[#185F7F] focus:outline-none focus:ring-1'>
                  <span className='relative rounded-md px-6 py-2.5 transition-all duration-75 ease-in hover:text-[#185F7F] group-hover:bg-white'>
                    Our Works
                  </span>
                </button>
                <button className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#2C3636] to-[#1B92C8] p-0.5 text-sm text-white font-medium hover:text-white focus:outline-none focus:ring-1'>
                  <span className='relative rounded-md px-6 py-2.5 transition-all duration-75 ease-in bg-white group-hover:bg-gradient-to-r from-[#2C3636] to-[#1B92C8] text-[#185F7F] hover:text-white'>
                    Know More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
