import { produit } from "./config";

export default function Benefices() {
  return (
    <>
      <img
        alt='wavebottom'
        src='general/wave.svg'
        className='z-1 lg:-mt-[130px]'
      />
      <section className='bg-[#e6f0fd] lg:-mt-10'>
        <h1 className='pb-10 text-center text-lg font-bold uppercase lg:text-3xl'>
          BENEFITS OF {produit.name}
        </h1>

        <img
          alt='benefice'
          src='produits/benefice/benefice_1.webp'
          className='m-auto -mb-20 block w-[200px] lg:hidden'
        />

        <section className='m-auto flex w-3/5 justify-between lg:hidden'>
          <article className=''>
            <img
              alt='arrow'
              src='icons/arrow.svg'
              className='w-[20px] -rotate-[120deg]'
            />
          </article>
          <article className=''>
            <img
              alt='arrow'
              src='icons/arrow.svg'
              className='w-[20px] -rotate-[240deg]'
            />
          </article>
        </section>

        <section className='m-auto flex w-[100%] items-center justify-evenly lg:w-3/5 '>
          <div className='space-y-[25px] lg:space-y-[50px]'>
            <article className='flex items-center'>
              <div>
                <img alt='greencheckB' className='lg:min-w-[50px] max-w-[30px]' src='icons/greencheckB.svg' />
              </div>
              <h2 className='pl-4 text-l font-bold lg:text-xl'>
                {produit.argument1}
              </h2>
              <div className='hidden pl-10 pt-5 lg:block'>
                <img
                  alt='arrow'
                  src='icons/arrow.svg'
                  className='w-[30px] -rotate-[80deg]'
                />
              </div>
            </article>
            <article className='flex items-center'>
              <div>
                <img alt='greencheckB' className='lg:min-w-[50px] max-w-[30px]' src='icons/greencheckB.svg' />
              </div>
              <h2 className='pl-4 text-l font-bold lg:text-xl'>
                {produit.argument2}
              </h2>
              <div className='hidden pl-10 lg:block'>
                <img
                  alt='arrow'
                  src='icons/arrow.svg'
                  className='w-[30px] -rotate-[90deg]'
                />
              </div>
            </article>
            <article className='flex items-center'>
              <div>
                <img alt='greencheckB' className='lg:min-w-[50px] max-w-[30px]' src='icons/greencheckB.svg' />
              </div>
              <h2 className='pl-4 text-l font-bold lg:text-xl'>
                {produit.argument3}
              </h2>
              <div className='hidden pl-10 pb-5 lg:block'>
                <img
                  alt='arrow'
                  src='icons/arrow.svg'
                  className='w-[30px] -rotate-[100deg]'
                />
              </div>
            </article>
          </div>
          <article className='hidden lg:block'>
            <img
              alt='benefice'
              src='produits/benefice/benefice_1.webp'
              className='m-auto w-[350px]'
            />
          </article>
          <article className='space-y-[25px] lg:space-y-[50px]	'>
            <div className='flex items-center justify-end'>
              <div className='hidden pr-10 pt-5 lg:block'>
                <img
                  alt='arrow'
                  src='icons/arrow.svg'
                  className='w-[30px] rotate-[80deg]'
                />
              </div>
              <h2 className='pr-4 text-l font-bold lg:text-xl  text-right'>
                {produit.argument4}
              </h2>
              <div className=''>
                <img alt='greencheckB' className='lg:min-w-[50px] max-w-[30px]' src='icons/greencheckB.svg' />
              </div>
            </div>
            <article className='flex items-center justify-end'>
              <div className='hidden pr-10 lg:block'>
                <img
                  alt='arrow'
                  src='icons/arrow.svg'
                  className='w-[30px] rotate-[90deg]'
                />
              </div>
              <h2 className='pr-4 text-l font-bold lg:text-xl text-right'>
                {produit.argument5}
              </h2>
              <div>
                <img alt='greencheckB' className='lg:min-w-[50px] max-w-[30px]' src='icons/greencheckB.svg' />
              </div>
            </article>
            <article className='flex items-center justify-end' space-x-5>
              <div className='hidden pr-10 pb-5 lg:block'>
                <img
                  alt='arrow'
                  src='icons/arrow.svg'
                  className='w-[30px] rotate-[100deg]'
                />
              </div>
              <h2 className='pr-4 text-l font-bold lg:text-xl text-right'>
                {produit.argument6}
              </h2>
              <div>
                <img alt='greencheckB' className='lg:min-w-[50px] max-w-[30px]' src='icons/greencheckB.svg' />
              </div>
            </article>
          </article>
        </section>
      </section>
      <img alt='wavebottom' src='general/wave.svg' className='rotate-180' />
    </>
  );
}
