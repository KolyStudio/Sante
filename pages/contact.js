import { useForm } from "react-hook-form";
import { useState } from "react";
import SEO from "../components/Seo";
import { site } from "../components/config";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);

  const pageTitle = `Contact us | ${site.nom}`;

  const onSubmitHandler = async (data) => {
    setIsLoading(false);
    reset();
    setIsSended(true);
    if (!isLoading) {
      setIsLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        console.log("error");
      } else {
        console.log("ok");
        reset();
        setIsSended(true);
      }
    }
  };

  return (
    <>
      <SEO title={pageTitle} />

      <section className='bg-primary'>
        <div className='m-auto pl-5 pt-10 lg:w-3/5 lg:pl-0'>
          <h1 className='text-5xl font-bold'>Contact us.</h1>
          <h2 className='text-xl font-medium'>Talk to us.</h2>
        </div>
      </section>

      <img
        alt='footer'
        src='general/barre.svg'
        className='min-h-[120px] 	object-cover'
      />

      <section className='m-auto flex w-[95%] lg:w-[70%]'>
        <div className='hidden w-4/5 pt-10 lg:block'>
          <h2 className='pb-10 text-2xl font-bold'>
            Contact us in other ways.
          </h2>

          <h3 className='pb-3 font-bold'>LIVE CHAT</h3>
          <p className='w-3/5 pb-10'>
            Monday to Friday from 9am to 7pm on Livechat
          </p>

          <h3 className='pb-3 font-bold'>EMAIL</h3>
          <p className='w-3/5'>
            Write. Exchange. Discuss. : contact@mookea.com
          </p>
        </div>
        <section className='mx-auto -mt-20 mb-10'>
          <div className='rounded-xl bg-white p-10 shadow-lg lg:w-[500px] xl:w-[700px] '>
            <h1 className='pb-2 text-3xl font-bold'>Customers</h1>
            <h2 className='text-lg'>
              Recommand. Ask. Comment. Share. Tell each other everything.
            </h2>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className='flex flex-col space-y-10 py-5'>
                <div>
                  <input
                    type='text'
                    className='input input-bordered w-full text-[16px]'
                    placeholder='Your name'
                    {...register("name", { required: true })}
                  />

                  {errors.name && (
                    <div className='p-1 text-sm text-red-600'>
                      Name is required
                    </div>
                  )}
                </div>
                <div>
                  <input
                    type='email'
                    className='input input-bordered w-full text-[16px]'
                    placeholder='Your email'
                    {...register("email", { required: true })}
                  />

                  {errors.email && (
                    <div className='p-1 text-sm text-red-600'>
                      Email is required
                    </div>
                  )}
                </div>
                <input
                  type='text'
                  className='input input-bordered w-full text-[16px]'
                  placeholder='Your Order ID'
                  {...register("orderid")}
                />
                <div>
                  <textarea
                    className='textarea textarea-bordered w-full text-[16px]'
                    placeholder='Your message'
                    {...register("message", { required: true })}
                  />

                  {errors.message && (
                    <div className='p-1 text-sm text-red-600'>
                      Message is required
                    </div>
                  )}
                </div>
              </div>
              {isSended && (
                <small className='mb-2 text-green-600'>
                  Your message has been successfully sent and we will respond to
                  you shortly.
                </small>
              )}
              <div className='flex items-center justify-between'>
                <button className='rounded-lg bg-accent px-6 py-2 font-bold text-white disabled:bg-opacity-50'>
                  SEND
                </button>
                <div>We answer you quickly</div>
              </div>
            </form>
          </div>
        </section>
      </section>
    </>
  );
}
