import { FAQdata } from "../components/datas/faq-data";
import { useState } from "react";
import SEO from "../components/Seo";
import { site } from "../components/config";

export default function FAQ() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  const pageTitle = `FAQ | ${site.nom}`;

  return (
    <>
      <SEO title={pageTitle} />
      <section className='bg-primary'>
        <div className='m-auto pl-5 pt-10 lg:w-3/5 lg:pl-0'>
          <h1 className='text-4xl font-bold lg:text-5xl'>
            Frequently Asked Questions.
          </h1>
          <h2 className='text-xl font-medium'>
            Find answers to ours questions.
          </h2>
        </div>
      </section>
      <img
        alt='footer'
        src='general/barre.svg'
        className='min-h-[120px] 	object-cover'
      />

      <section className='m-auto flex w-[95%] md:w-[95%] lg:w-[70%]'>
        <div className='mx-auto -mt-20 mb-10 md:w-4/5 lg:w-3/5'>
          <div className='rounded-xl bg-white p-4 shadow-lg lg:w-[500px] lg:p-10 xl:w-[700px] '>
            <h1 className='pb-2 text-3xl font-bold'>Your answers</h1>
            {FAQdata.map((item, index) => {
              return (
                <article
                  key={index}
                  onClick={() => toggle(index)}
                  className='mb-2 flex cursor-pointer justify-between space-x-4 rounded-xl bg-secondary p-4 first:mb-2'>
                  <div className='grow'>
                    <h2 className='font-semibold lg:text-lg'>
                      {item.question}
                    </h2>

                    <h3
                      className={`pl-3  ${
                        clicked === index
                          ? "block transition-all"
                          : "hidden transition-all"
                      } `}>
                      {item.reponse}
                    </h3>
                  </div>
                  <img
                    alt='delivery'
                    src='icons/arrowright.svg'
                    className={`w-[20px] ${
                      clicked === index ? "rotate-90 transition-all" : null
                    } `}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
