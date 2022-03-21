export default function Infos() {
  return (
    <>
      <section className=' z-2 top-10 h-auto py-5 lg:pb-5'>
        <article className='relative z-0 m-auto w-[95%] lg:w-4/5 '>
          <h1 className=' pt-5 text-4xl font-semibold  lg:pl-12 lg:text-6xl'>
            Any questions?
          </h1>
          <h2 className='k pt-3 text-xl lg:pl-12'>Our answers.</h2>
        </article>
      </section>

      <section className='m-auto space-y-10 px-2 py-5 lg:flex lg:w-[75%] lg:space-x-32 lg:space-y-0 lg:px-0 '>
        <article className='h-full space-y-2'>
          <span>
            <img alt='livechat' src='icons/livechat.svg' className='w-5' />
          </span>
          <h2 className='text-sm font-bold'>LIVECHAT.</h2>
          <p className='text-sm'>
            From Monday to Friday. From 9am to 7pm. We answer all your questions
            on our chat.
          </p>
        </article>
        <article className='h-full space-y-2'>
          <span>
            <img alt='faq' src='icons/faq.svg' className='w-5' />
          </span>
          <h2 className='text-sm font-bold'>FAQ.</h2>
          <p className='text-sm'>
            Got a question? We surely have the answer in our Frequently Asked
            Questions.
          </p>
        </article>
        <artcle className='h-full space-y-2'>
          <span>
            <img alt='email' src='icons/email.svg' className='w-5' />
          </span>
          <h2 className='text-sm font-bold'>EMAIL.</h2>
          <p className='text-sm'>From Monday to Friday. From 9am to 7pm.</p>
        </artcle>
      </section>
    </>
  );
}
