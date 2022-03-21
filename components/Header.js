import Link from "next/link";
import { useState } from "react";
import { produit } from "./config";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header>
        <section className='border-1 flex items-center justify-between bg-primary py-3 text-center text-accent lg:py-4'>
          <article
            className='grow  basis-0 text-left lg:hidden'
            onClick={() => setIsOpen(true)}>
            <img
              alt='panier'
              className='ml-5 w-[25px] cursor-pointer lg:m-auto'
              src='icons/menu.svg'
            />
          </article>
          <h1 className='grow basis-0 cursor-pointer text-3xl font-bold'>
            Biorea.
          </h1>
          <nav className='hidden space-x-10 text-sm font-medium uppercase tracking-[0.03em] lg:block'>
            <Link href='/' passHref>
              <a>{produit.name}.</a>
            </Link>
            <Link href='/' passHref>
              <a>About us.</a>
            </Link>
            <Link href='/faq' passHref>
              <a>FAQ.</a>
            </Link>
            <Link href='/' passHref>
              <a>Track my order.</a>
            </Link>
            <Link href='/contact' passHref>
              <a>Contact us.</a>
            </Link>
          </nav>
          <article className='grow basis-0'
          onClick={() => setCart(true)}>
            <img
              alt='panier'
              className='ml-auto mr-5 cursor-pointer lg:m-auto '
              src='icons/bag.svg'
              
            />
          </article>
        </section>

        {/* Drawer */}
        <nav
          className={
            " fixed inset-0 z-10 transform overflow-hidden  bg-opacity-25 ease-in-out " +
            (cart
              ? " translate-x-0 opacity-100 transition-opacity duration-500  "
              : " translate-x-full opacity-0 transition-all delay-500  ")
          }>
          <section
            className={
              "delay-400 absolute right-0 w-[300px] lg:w-[350px] h-full  overflow-hidden transform bg-white shadow-xl transition-all duration-500 ease-in-out  " +
              (cart ? " translate-x-0 " : " translate-x-full ")
            }>
            <article className='relative flex h-full flex-col space-y-6 overflow-hidden  w-[300px] lg:w-[350px] '>
              <div className='border-1 relative -mb-[70px] flex  items-center justify-between bg-primary p-4 '>
                <h1 className='absolute lg:top-8 top-5 text-3xl font-bold '>Your cart</h1>
                <img
                  onClick={() => setCart(false)}
                  alt='close'
                  className='ml-auto mt-2 lg:w-[50px] h-full lg:h-3/5 cursor-pointer'
                  src='icons/x.svg'
                />
              </div>

              <img
                alt='footer'
                src='general/barre.svg'
                className='min-h-[120px]  object-cover   w-[300px] lg:w-[350px] '
              />

              <h1 className="text-center font-medium text-lg pt-[150px]">Your cart is empty !</h1>
            </article>
          </section>
          <section
            className=' h-full w-screen cursor-pointer '
            onClick={() => {
              setCart(false);
            }}></section>
        </nav>


        <nav
          className={
            " fixed inset-0 z-10 transform overflow-hidden  bg-opacity-25 ease-in-out " +
            (isOpen
              ? " translate-x-0 opacity-100 transition-opacity duration-500  "
              : " -translate-x-full opacity-0 transition-all delay-500  ")
          }>
          <section
            className={
              " delay-400 absolute left-0 h-full w-[80%] max-w-lg  transform bg-white shadow-xl transition-all duration-500 ease-in-out md:w-[300px]  " +
              (isOpen ? " translate-x-0 " : " -translate-x-full ")
            }>
            <article className='relative flex h-full w-screen max-w-lg flex-col space-y-6 overflow-y-scroll '>
              <div className='border-1 relative -mb-[70px] flex w-[80%] items-center justify-between bg-primary p-4 md:w-[300px]'>
                <h1 className='absolute top-5 text-3xl font-bold '>Menu</h1>
                <img
                  onClick={() => setIsOpen(false)}
                  alt='close'
                  className='ml-auto mt-2 w-[30px] cursor-pointer'
                  src='icons/x.svg'
                />
              </div>

              <img
                alt='footer'
                src='general/barre.svg'
                className='min-h-[120px]  w-[80%] object-cover  md:w-[58%]'
              />

              <article className='w-80bg-base-100 p-4'>
                {/* Sidebar content here */}

                {/* Menu Drawer */}
                <div className='flex w-[80%] flex-col space-y-2 border-b py-5 text-lg font-semibold md:w-[300px]'>
                  <Link href='/' passHref>
                    <a
                      onClick={() => {
                        setIsOpen(false);
                      }}>
                      {produit.name}
                    </a>
                  </Link>
                  <Link href='/' passHref>
                    <a
                      onClick={() => {
                        setIsOpen(false);
                      }}>
                      About us.
                    </a>
                  </Link>
                  <Link href='/faq' passHref>
                    <a
                      onClick={() => {
                        setIsOpen(false);
                      }}>
                      FAQ.
                    </a>
                  </Link>
                  <Link href='/' passHref>
                    <a
                      onClick={() => {
                        setIsOpen(false);
                      }}>
                      Track my order.
                    </a>
                  </Link>
                  <Link href='/contact' passHref>
                    <a
                      onClick={() => {
                        setIsOpen(false);
                      }}>
                      Contact us.
                    </a>
                  </Link>
                </div>
                <div className='text-l flex w-[80%] flex-col space-y-2 py-5 text-sm font-semibold md:w-[300px]'>
                  <Link href='/refundpolicy' passHref>
                    <a
                      onClick={() => {
                        setIsOpen(false);
                      }}>
                      Refund Policy.
                    </a>
                  </Link>
                  <Link href='/privacypolicy' passHref>
                    <a
                      onClick={() => {
                        setIsOpen(false);
                      }}>
                      Privacy Policy.
                    </a>
                  </Link>
                  <Link href='/legalnotice' passHref>
                    <a
                      onClick={() => {
                        setIsOpen(false);
                      }}>
                      Legal Notice.
                    </a>
                  </Link>
                  <Link href='/tos' passHref>
                    <a
                      onClick={() => {
                        setIsOpen(false);
                      }}>
                      Terms of sales.
                    </a>
                  </Link>
                </div>
              </article>
            </article>
          </section>
          <section
            className=' h-full w-screen cursor-pointer '
            onClick={() => {
              setIsOpen(false);
            }}></section>
        </nav>
      </header>
    </>
  );
}
