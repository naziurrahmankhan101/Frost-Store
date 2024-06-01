import React from 'react';
import { Navbar, MobileNav, Typography, IconButton } from '@material-tailwind/react';

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleNavToggle = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      <Navbar className="fixed top-0 left-0 right-0 mx-auto max-w-screen-xxl px-4 py-2 border-none bg-white z-50">
        <div className="flex items-center justify-between text-blue-gray-900">
          <img src="/logo.svg" alt="" className="h-20 w-20"/>
          <div className="hidden lg:block flex-grow">
            <ul className="flex items-center justify-end gap-6">
              <li className="nav-link hover:bg-gray-500 rounded-xl p-2 text-black">
                <a href="Shop.jsx">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </a>
              </li>
              <li className="nav-link hover:bg-gray-500 rounded-xl p-2 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </li>
              <li className="nav-link hover:bg-gray-500 rounded-xl p-2 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </li>
              <li className="nav-link hover:bg-gray-500 rounded-xl p-2 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </li>
              <li>
                <Typography as="a" href="#" variant="small" className="nav-link bg-black hover:bg-gray-600 rounded-xl text-white py-2 px-5">
                  Login
                </Typography>
              </li>
            </ul>
          </div>
          <IconButton
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={handleNavToggle}
          >
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <ul className="flex flex-col items-center gap-2">
            <li>
              <Typography as="a" href="#" variant="small" className="nav-link hover:bg-gray-200 rounded-md p-2 text-white">
                Home
              </Typography>
            </li>
            <li>
              <Typography as="a" href="#" variant="small" className="nav-link hover:bg-gray-200 rounded-md p-2 text-white">
                About
              </Typography>
            </li>
            <li>
              <Typography as="a" href="#" variant="small" className="nav-link hover:bg-gray-200 rounded-md p-2 text-white">
                Services
              </Typography>
            </li>
            <li>
              <Typography as="a" href="#" variant="small" className="nav-link hover:bg-gray-200 rounded-md p-2 text-white">
                Contact
              </Typography>
            </li>
          </ul>
        </MobileNav>
      </Navbar>
      <div className="mt-24">
        {/* Hero Section or other content */}
      </div>
    </>
  );
}
