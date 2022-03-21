import { Reviewsdata } from "./datas/reviews-data";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Reviews() {
  const [reviewsNumber, setreviewsNumber] = useState(20);

  return (
    <>
      <section className='py-5 text-center text-2xl font-bold lg:text-3xl'>
        Customer Reviews
      </section>
      <section className='m-auto flex w-[95%] items-center rounded-2xl border-[5px] border-secondary p-5 shadow-xl md:w-[90%] lg:w-[600px]'>
        <article className='w-full space-y-[-15px]'>
          <div className='flex  items-center justify-center pb-5 text-center font-medium'>
            <span className='mb-0 flex pb-0 text-4xl font-bold'>4.7</span>/5
          </div>
          <h2 className=' text-center font-medium'>Based on 236 Reviews</h2>
          <div className='flex items-center justify-center space-x-[5px] p-5 text-[20px] lg:px-0 lg:text-xl '>
            <img src='/icons/star.svg' alt='star' className='w-[17px]' />
            <img src='/icons/star.svg' alt='star' className='w-[17px]' />
            <img src='/icons/star.svg' alt='star' className='w-[17px]' />
            <img src='/icons/star.svg' alt='star' className='w-[17px]' />
            <img src='/icons/halfstar.svg' alt='star' className='w-[17px]' />
          </div>
        </article>
        <section className='w-full'>
          <article className='flex items-center'>
            <h3 className='w-full pr-2 text-right font-medium'>5 stars</h3>
            <div className='h-[5px] w-full rounded bg-gray-200'>
              <div className='h-[5px] w-[70%] rounded bg-[#007f4e]' />
            </div>
          </article>
          <article className='flex items-center'>
            <h3 className='w-full pr-2 text-right font-medium'>4 stars</h3>
            <div className='h-[5px] w-full rounded bg-gray-200'>
              <div className='h-[5px] w-[20%] rounded bg-[#007f4e]' />
            </div>
          </article>
          <article className='flex items-center'>
            <h3 className='w-full  pr-2 text-right font-medium'>3 stars</h3>
            <div className='h-[5px] w-full rounded bg-gray-200'>
              <div className='h-[5px] w-[5%] rounded bg-[#ffce00]' />
            </div>
          </article>
          <article className='flex items-center'>
            <h3 className='w-full pr-2 text-right font-medium'>2 stars</h3>
            <div className='h-[5px] w-full rounded bg-gray-200'>
              <div className='h-[5px] w-[3%] rounded bg-[#f7b927]' />
            </div>
          </article>
          <article className='flex items-center'>
            <h3 className='w-full pr-2 text-right font-medium'>1 star</h3>
            <div className=' h-[5px] w-full rounded bg-gray-200'>
              <div className='h-[5px] w-[1%] rounded bg-[#ff3722]' />
            </div>
          </article>
        </section>
      </section>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 600: 3, 900: 4, 1050: 5, 1200: 5 }}
        className='m-auto mt-10 w-[95%] lg:w-3/5 '>
        <Masonry>
          {Reviewsdata.slice(0, reviewsNumber).map((item, index) => {
            return (
              <article
                key={item.name}
                className='m-1 break-inside-avoid rounded-3xl border-[5px] border-secondary'>
                {item.photo ? (
                  <img
                    alt='avisphoto'
                    src={item.photo}
                    className='rounded-t-2xl'
                  />
                ) : (
                  ""
                )}

                <div className='p-2'>
                  <div className='flex items-center justify-center space-x-1'>
                    <img
                      src='/icons/star.svg'
                      alt='star'
                      className='w-[12px]'
                    />

                    {item.note >= 2 ? (
                      <img
                        src='/icons/star.svg'
                        alt='star'
                        className='w-[12px]'
                      />
                    ) : (
                      ""
                    )}

                    {item.note >= 3 ? (
                      <img
                        src='/icons/star.svg'
                        alt='star'
                        className='w-[12px]'
                      />
                    ) : (
                      ""
                    )}

                    {item.note >= 4 ? (
                      <img
                        src='/icons/star.svg'
                        alt='star'
                        className='w-[12px]'
                      />
                    ) : (
                      ""
                    )}

                    {item.note == 5 ? (
                      <img
                        src='/icons/star.svg'
                        alt='star'
                        className='w-[12px]'
                      />
                    ) : (
                      ""
                    )}

                    {item.note < 5 ? (
                      <img
                        src='/icons/halfstar.svg'
                        alt='star'
                        className='w-[12px]'
                      />
                    ) : (
                      ""
                    )}

                    {item.note < 4 ? (
                      <img
                        src='/icons/stargray.svg'
                        alt='star'
                        className='w-[12px]'
                      />
                    ) : (
                      ""
                    )}

                    {item.note < 3 ? (
                      <img
                        src='/icons/stargray.svg'
                        alt='star'
                        className='w-[12px]'
                      />
                    ) : (
                      ""
                    )}

                    {item.note < 2 ? (
                      <img
                        src='/icons/stargray.svg'
                        alt='star'
                        className='w-[12px]'
                      />
                    ) : (
                      ""
                    )}

                    <div className='font-medium'>{item.note}</div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <h3 className='font-medium'>{item.name}</h3>
                    <p className='text-sm'>{item.delay}</p>
                  </div>
                  <div>{item.avis}</div>
                </div>
              </article>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>

      <button
        onClick={() => setreviewsNumber(reviewsNumber + 10)}
        id='loadmore'
        type='button'
        className='m-auto flex rounded-xl bg-secondary p-2 px-4 text-center text-lg font-medium'>
        Show more
      </button>
    </>
  );
}
