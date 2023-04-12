/* eslint-disable multiline-ternary */
import Link from 'next/link'
import { IconClose, IconLogoShok, IconMenu } from './icons/iconSvg'
import { Disclosure } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const items = [
  {
    name: 'Home',
    href: '/',
    current: false
  },
  {
    name: 'About',
    href: '/about',
    current: false
  },
  {
    name: 'Portfolio',
    href: '/Portfolio',
    current: false
  },
  {
    name: 'Product',
    href: '/Product',
    current: false
  },
  {
    name: 'Career',
    href: '/Career',
    current: false
  },
  {
    name: 'Blog',
    href: '/Blog',
    current: false
  }
]

export default function NavBar() {
  return (
    <Disclosure as='nav' className='bg-white'>
      {({ open }) => (
        <>
          <div className='mx-1 md:mx-2 lg:mx-16 mt-4'>
            <div className='relative flex h-16 items-center justify-between'>
              {/* Menu Navbar */}
              <div className='flex flex-1 items-center justify-between'>
                <Link href='#' className='flex items-center'>
                  <IconLogoShok w='250' h='300' />
                </Link>

                <div
                  className='items-center lg:justify-between hidden w-full md:flex md:w-auto '
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
                          fillRule='evenodd'
                          d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                          clipRule='evenodd'
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
                  <button className=' hidden group relative md:inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#2C3636] to-[#1B92C8] p-0.5 text-sm font-medium text-white hover:text-[#185F7F] focus:outline-none focus:ring-1'>
                    <span className='relative rounded-md px-6 py-2.5 transition-all duration-75 ease-in hover:text-[#185F7F] group-hover:bg-white'>
                      Contact Us
                    </span>
                  </button>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className=' inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? <IconClose /> : <IconMenu />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu Panel */}
          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2 bg-slate-200'>
              {items.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-[#555555] hover:bg-gray-300',
                    'block rounded-md px-3 py-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className='flex flex-col gap-6'>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <svg
                      className='w-5 h-5 text-[#C6BAF8]'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                        clipRule='evenodd'
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
                <button className='group relative md:inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#2C3636] to-[#1B92C8] p-0.5 text-xs font-medium text-white focus:outline-none focus:ring-1 py-2'>
                  Contact Us
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
