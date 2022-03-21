import { useState } from "react";

export default function Assets() {
  const questions = [
    {
      id: 1,
      title: "Free Delivery in 4 to 7 working days",
      content:
        "We process each order as quickly as possible while maintaining the strictest quality control.",
      icon: "icons/delivery.svg",
      active: false,
    },
    {
      id: 2,
      title: "24/7 customer service",
      content:
        "Our customer service is at your disposal 24/7. We answer you very quickly.",
      icon: "icons/chat.svg",
      active: false,
    },
  ];

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <>
      <section className=' flex justify-center space-x-2 py-1 pt-2'>
        <img
          src='/payments/visa.png'
          alt='visa'
          className='h-[15px] w-[42px]'
        />
        <img
          src='/payments/mastercard.png'
          alt='mastercard'
          className='h-[15px] w-[25px]'
        />
        <img
          src='/payments/amex.png'
          alt='amex'
          className='h-[15px] w-[33px]'
        />
        <img
          src='/payments/paypal.png'
          alt='paypal'
          className='h-[15px] w-[57px]'
        />
      </section>

      <section className='flex items-center justify-center space-x-1 text-sm'>
        <img src='/icons/lock.svg' alt='lock' />
        <h3>Secure payments with our partners</h3>
      </section>

      <section className='mt-5 flex justify-center space-x-2 rounded-lg bg-primary p-1 py-2 text-sm md:mx-auto md:w-3/5 lg:w-full tracking-wider'>
        <img alt='warning' src='icons/warning.svg' className='w-[20px]' />
        <h3 className="tracking-wider">
          <strong>Warning!</strong> They are only <strong>7 </strong>
          sales left at <strong>50% OFF</strong>
        </h3>
      </section>

      <section className='mt-5 rounded-lg border-[3px] border-secondary p-2 py-3 md:mx-auto md:w-3/5 lg:w-full'>
        {questions.map((item, index) => {
          return (
            <article
              key={index}
              onClick={() => toggle(index)}
              className={`flex cursor-pointer justify-between space-x-4 first:mb-2 first:border-b first:pb-2 ${clicked === index ? " transition-all" : null
            } `}>
              <img alt='delivery' src={item.icon} className='w-[20px]' />
              <div className='grow'>
                <h1 className='font-semibold'>{item.title}</h1>

                {clicked === index ?  (
                  <p className='pl-3 text-sm'>{item.content}</p>
                ) : (
                  ""
                )}
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
      </section>
    </>
  );
}
