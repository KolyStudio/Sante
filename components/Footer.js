import Link from "next/link";
import { site, produit } from "./config";
export default function Footer() {
  return (
    <footer>
      <img
        alt='footer'
        src='general/barre.svg'
        className='min-h-[120px] rotate-180 object-cover'
      />
      <main className='-mt-1 bg-primary pt-2'>
        <section className='m-auto w-[95%] justify-center space-y-2 pb-5 md:w-[70%] lg:flex lg:w-[90%] lg:max-w-[95%] lg:space-x-5 lg:space-y-0'>
          <div className='flex w-full items-center space-x-4 rounded-xl bg-white p-3 text-center'>
            <div>
              <img alt='secure' src='icons/secure.svg' className='w-[40px]' />
            </div>
            <div className='grow'>
              <h1 className='text-l text-center font-semibold lg:text-lg'>
                SECURE PAYMENT
              </h1>
              <p>Visa, Mastercard, Amex, Maestro</p>
            </div>
          </div>

          <article className='flex w-full items-center space-x-4 rounded-xl  bg-white p-3 text-center'>
            <div>
              <img alt='secure' src='icons/truck.svg' className='w-[40px]' />
            </div>
            <div className='grow'>
              <h1 className='text-l font-semibold lg:text-lg'>
                FREE DELIVERY
              </h1>
              <p>We deliver throughout Europe</p>
            </div>
          </article>

          <article className='flex w-full items-center space-x-4 rounded-xl bg-white p-3 text-center'>
            <div>
              <img alt='secure' src='icons/delay.svg' className='w-[40px]' />
            </div>
            <div className='grow'>
              <h1 className='text-l font-semibold lg:text-lg'>
                SHIPPING IN 48 HOURS
              </h1>
              <p>The treatment is fast to your home</p>
            </div>
          </article>

          <article className='flex w-full items-center space-x-4 rounded-xl bg-white p-3 text-center'>
            <div>
              <img alt='secure' src='icons/support.svg' className='w-[40px]' />
            </div>
            <div className='grow'>
              <h1 className='text-l font-semibold lg:text-lg'>
                24/7 CUSTOMER SUPPORT
              </h1>
              <p>Our team will gladly help you anytime</p>
            </div>
          </article>
        </section>
        {/* Séparateur */}
        <div className='m-auto mb-6 h-0.5 w-3/5 bg-accent' />
        <div className='m-auto w-[95%] justify-between pb-10 md:w-[75%] lg:flex lg:w-4/5'>
          {/* Newsletter */}
          <section className='rounded-xl bg-secondary p-5'>
            <h1 className='w-[300px] text-2xl font-semibold'>
              Recieve our good plans
            </h1>
            <h2 className='text-medium pb-5 text-xl'>
              and our latest news !
            </h2>
            <div className='flex'>
              <div className='w-full rounded-l-xl bg-white px-2 pt-2 font-medium'>
                Your email address*
              </div>
              <button className='cursor-pointer rounded-r-xl bg-accent p-2 font-semibold uppercase text-white'>
                Submit
              </button>
            </div>
          </section>
          {/* Menu général */}
          <section className='flex flex-col space-y-4 pt-10 md:flex-row md:space-y-0 md:space-x-20 lg:flex-row lg:space-y-0 lg:space-x-20 lg:pt-0'>
            <div className='flex flex-col space-y-2'>
              <h1 className='text-xl font-bold'>OUR MISSION.</h1>
              <Link href='/' passHref>
                <a className='font-medium'>{produit.name}.</a>
              </Link>
              <Link href='/' passHref>
                <a className='font-medium'>About us.</a>
              </Link>
            </div>
            <div className='shadow-t-xl flex flex-col space-y-2'>
              <h1 className='text-xl font-bold'>FOLLOW.</h1>
              <Link href='/' passHref>
                <a className='font-medium'>Track my parcel.</a>
              </Link>
            </div>
            <div className='flex flex-col space-y-2'>
              <h1 className='text-xl font-bold'>HELP.</h1>
              <Link href='/faq' passHref>
                <a className='font-medium'>FAQ.</a>
              </Link>
              <Link href='/contact' passHref>
                <a className='font-medium'>Contact us.</a>
              </Link>
              <p className='font-medium'>{site.email}</p>
            </div>
          </section>
        </div>
        {/* Menu bas & Copyright */}
        <section className='m-auto w-[95%] justify-between py-5 text-center lg:flex lg:w-4/5 '>
          <article className='flex space-x-3 text-sm font-semibold uppercase md:justify-center'>
            <Link href='/refundpolicy' passHref>
              <a>Refund policy</a>
            </Link>
            <Link href='/privacypolicy' passHref>
              <a>Privacy policy</a>
            </Link>
            <Link href='/tos' passHref>
              <a>Terms of sales</a>
            </Link>
            <Link href='/legalnotice' passHref>
              <a>Legal notice</a>
            </Link>
          </article>
          <article className='pt-5 text-center text-sm font-semibold uppercase text-slate-500 lg:pt-0'>
            © {site.nom} 2022
          </article>
        </section>
      </main>
    </footer>
  );
}
