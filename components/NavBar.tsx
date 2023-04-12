import Link from 'next/link'
import { IconLogoShok } from './icons/iconSvg'

const items = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Portfolio',
    href: '/Portfolio'
  },
  {
    name: 'Product',
    href: '/Product'
  },
  {
    name: 'Career',
    href: '/Career'
  },
  {
    name: 'Blog',
    href: '/Blog'
  }
]

export default function NavBar() {
  return (
    <div>
      <nav className='bg-white border-gray-200'>
        <div className='flex items-center justify-evenly mx-4 py-8'>
          <Link href='#' className='flex items-center'>
            <IconLogoShok />
          </Link>
          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto '
            id='navbar-search'
          >
            <ul className='flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white'>
              {items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className='block hover:text-[#185F7F] text-sm py-2 px-1 text-[#555555] rounded md:bg-transparent'
                    aria-current='page'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex gap-6 items-center'>
            <div className='relative hidden md:block'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-[#C6BAF8]'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span className='sr-only'>Search icon</span>
              </div>
              <input
                type='text'
                id='search-navbar'
                className='block w-full p-2 pl-10 text-sm text-[#555555] border border-[#c6b9f8] rounded-lg bg-gray-50 focus:outline-[#bcacfa] placeholder-[#CCCCCC] placeholder:text-xs'
                placeholder='Search Here...'
              />
            </div>
            <button className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#2C3636] to-[#1B92C8] p-0.5 text-sm font-medium text-white hover:text-[#185F7F] focus:outline-none focus:ring-1'>
              <span className='relative rounded-md px-6 py-2.5 transition-all duration-75 ease-in hover:text-[#185F7F] group-hover:bg-white'>
                Contact Us
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
