import Image from 'next/image'
import {
  IconFacebook,
  IconInsta,
  IconLinkedin,
  IconLogoShok,
  IconSkype
} from './icons/iconSvg'

const itemsFooter = [
  {
    id: 0,
    name: 'Contact Us',
    links: ['+(1) 824-5428', 'Miami, United States', 'yfuentes@shokworks.io']
  },
  {
    id: 1,
    name: 'Our Company',
    links: ['About', 'Product', 'Portfolio', 'Career', 'Blog']
  },
  {
    id: 2,
    name: 'Social Contacts',
    links: ['Facebook', 'Linked In', 'Youtube', 'Vimeo', 'Skype']
  }
]

export default function Footer() {
  return (
    <footer className='text-gray-400 bg-white body-font'>
      <div className='container px-5 mx-auto'>
        <div className='flex items-center justify-center'>
          <IconLogoShok w='400' h='200' />
        </div>
        <div className='flex flex-wrap md:text-left text-center order-first md:mx-24'>
          {itemsFooter.map((item) => (
            <div key={item.id} className='lg:w-1/4 md:w-1/2 w-full px-4'>
              <h2 className='title-font font-semibold text-[#101C21] tracking-widest text-sm mb-3'>
                {item.name}
              </h2>
              <nav className='list-none mb-10'>
                <li>
                  {item.links.map((link, i) => (
                    <h4
                      key={i}
                      className='text-[#777777] cursor-pointer hover:text-black'
                    >
                      {link}
                    </h4>
                  ))}
                </li>
              </nav>
            </div>
          ))}

          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-semibold text-[#101C21] tracking-widest text-sm mb-3'>
              Address
            </h2>
            <div className='flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start'>
              <div className='relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2'>
                <p className='text-[#777777] text-sm mt-2 md:text-left text-center'>
                  Bitters chicharrones fanny pack waistcoat green juice
                </p>
              </div>
            </div>
            <h2 className='title-font font-semibold text-[#101C21] tracking-widest text-sm my-4'>
              Follow Us
            </h2>
            <div className='flex gap-2 md:flex-row md:justify-start items-center justify-center'>
              <div className='bg-gradient-to-r from-[#6362D7] via-[#6362D7] to-[#FF8FE2] p-2 rounded-full'>
                <IconFacebook />
              </div>
              <div className='bg-gradient-to-r from-[#00B56C] via-[#68D58C] to-[#9EE69D] p-2 rounded-full'>
                <IconSkype />
              </div>
              <div className='bg-gradient-to-r from-[#FF9AB6] via-[#F03295] to-[#F03295] p-2 rounded-full'>
                <IconLinkedin />
              </div>
              <div className='bg-gradient-to-r from-[#F09376] via-[#F09376] to-[#F0DB79] p-2 rounded-full'>
                <IconInsta />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='body-font relative'>
        <div className='absolute inset-0'>
          <Image
            src='/footer.png'
            fill
            priority
            alt='image'
            className='h-auto w-auto rounded-lg bg-cover bg-center object-cover object-center fill-blue-400'
          />
        </div>
        <div className='container flex flex-col items-center'>
          <div className='relative my-40 flex h-full w-full flex-col justify-center items-center text-center' />
        </div>
      </div>
    </footer>
  )
}
