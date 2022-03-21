import { QuestionsProduit } from './config';
import { useState } from 'react';

export default function FAQProduit() {

    const [clicked, setClicked] = useState(false);

    const toggle = (index) => {
      if (clicked === index) {
        return setClicked(null);
      }
  
      setClicked(index);
    };

    
  return (
    <>
      <section className='m-auto mt-5 rounded-lg p-2 py-5 md:w-[90%] lg:w-2/5'>
        <h1 className='pb-4 text-center text-2xl font-bold lg:text-3xl'>
          Frequently Asked Questions
        </h1>

        {QuestionsProduit.map((item, index) => {
              return (
                <section
                  key={index}
                  onClick={() => toggle(index)}
                  className='mb-2 flex cursor-pointer justify-between space-x-4 rounded-xl bg-secondary p-4 first:mb-2'>
                  <article className='grow'>
                    <h1 className='font-semibold lg:text-lg'>
                      {item.question}
                    </h1>

                    <p
                      className={`pl-3  ${
                        clicked === index ? "block transition-all" : "hidden transition-all"
                      } `}>
                      {item.reponse}
                    </p>
                  </article>
                  <img
                    alt='delivery'
                    src='icons/arrowright.svg'
                    className={`w-[20px] ${
                      clicked === index ? "rotate-90 transition-all" : null
                    } `}
                  />
                </section>
              );
            })}
      </section>
    </>
  );
}
