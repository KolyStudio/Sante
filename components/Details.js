import { useState } from "react";
import Assets from "./Assets";
import Link from "next/link";
import { produit, site } from "./config";
import * as ga from "../utils/ga";
import ReactHtmlParser from "react-html-parser";

export default function Details() {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState(
    `${site.checkoutx}${produit.id}_0_${quantity}`
  );

  const quantityPicker = (qty) => {
    setQuantity(qty);

    setLink(`${site.checkoutx}${produit.id}_0_${qty}`);

    console.log(link);
  };

  async function AddToCart() {
    setLoading(true);
    const { default: ReactPixel } = await import("react-facebook-pixel");
    ReactPixel.pageView();
    ReactPixel.track("AddToCart");

    ga.event({
      action: "add_to_cart",
      params: {},
    });

    window.location.href = link;
  }

  return (
    <section className='z-0 '>
      <article className='p-4 lg:max-w-[600px] lg:pt-10 '>
        <h2 className='w-[120px] animate-pulse bg-secondary p-1 text-center text-sm font-medium '>
          BEST SELLER IN UK
        </h2>

        <h1 className='text-2xl font-semibold '>{produit.name}</h1>

        <article className='flex space-x-1 py-1'>
          <div className='flex items-center space-x-0.5'>
            <img src='/icons/star.svg' alt='star' className='w-[17px]' />
            <img src='/icons/star.svg' alt='star' className='w-[17px]' />
            <img src='/icons/star.svg' alt='star' className='w-[17px]' />
            <img src='/icons/star.svg' alt='star' className='w-[17px]' />
            <img src='/icons/halfstar.svg' alt='star' className='w-[17px]' />
          </div>
          <span className='pt-1 font-medium'>
            {produit.note}
            <span className='pl-1 text-stone-500'>
              ({produit.review} Reviews)
            </span>
          </span>
        </article>

        <article className='flex items-center space-x-1 py-2'>
          <span className='text-xl font-bold text-vert'>
            {quantity == 1 ? (
              <h3>£{produit.price.toFixed(2)}</h3>
            ) : quantity == 2 ? (
              <h3>£{(produit.price * 1.5).toFixed(2)}</h3>
            ) : (
              <h3>£{(produit.price * 2).toFixed(2)}</h3>
            )}
          </span>
          <span className='text-xl font-medium text-stone-500 line-through'>
            {quantity == 1 ? (
              <h3>£{(produit.price * 2).toFixed(2)}</h3>
            ) : quantity == 2 ? (
              <h3>£{(produit.price * 2 * 2).toFixed(2)}</h3>
            ) : (
              <h3>£{(produit.price * 2 * 3).toFixed(2)}</h3>
            )}
          </span>
          <span className='rounded  bg-secondary p-1 text-sm font-medium uppercase tracking-wider'>
            {quantity == 1 ? (
              <span>50% </span>
            ) : quantity == 2 ? (
              <span>63% </span>
            ) : (
              <span>68% </span>
            )}
            OFF & Free Delivery
          </span>
        </article>

        <section className='pt-3 text-[15px] lg:w-4/5'>
        {ReactHtmlParser(produit.description)}
        </section>

        <section className='my-2 flex space-x-5 pb-3'>
          <article>
            <div className='flex space-x-1 '>
              <img
                alt='produit.price'
                src='icons/check.svg'
                className='w-[15px]'
              />
              <h3>{produit.small_argument1}</h3>
            </div>
            <div className='flex space-x-1'>
              <img
                alt='produit.price'
                src='icons/check.svg'
                className='w-[15px]'
              />
              <h3>{produit.small_argument2}</h3>
            </div>
          </article>
          <article>
            <div className='flex space-x-1'>
              <img
                alt='produit.price'
                src='icons/check.svg'
                className='w-[15px]'
              />
              <h3>{produit.small_argument3}</h3>
            </div>
            <div className='flex space-x-1'>
              <img
                alt='produit.price'
                src='icons/check.svg'
                className='w-[15px]'
              />
              <h3>{produit.small_argument4}</h3>
            </div>
          </article>
        </section>

        <section className='flex space-x-1 py-1  pb-2 text-sm font-medium uppercase'>
          <img alt='produit.price' src='icons/check.svg' className='w-[15px]' />
          <span>
            Choose your offer:
            {quantity == 1 ? (
              <span className='text-[16px] font-semibold'> 1-Unit</span>
            ) : quantity == 2 ? (
              <span className='text-[16px] font-semibold'> 2-Pack</span>
            ) : (
              <span className='text-[16px] font-semibold'> 3-Pack</span>
            )}
          </span>
        </section>
        <section className='m-auto mt-1 flex space-x-1'>
          <article
            onClick={() => quantityPicker(1)}
            className={`relative w-full cursor-pointer rounded-[8px] border-[3px] pt-[18px] text-center transition-all hover:z-[50] hover:scale-105 ${
              quantity == 1 ? "border-vert" : ""
            }`}>
            {quantity == 1 ? (
              <div className='absolute -left-1.5'>
                <img
                  alt='greencheck'
                  src='icons/greencheck.svg'
                  className='m-auto -mt-[28px] w-[25px] rounded-full border-[3px] border-vert '
                />
              </div>
            ) : (
              ""
            )}
            <h2 className='font-bold'>1-Unit</h2>
            <h3 className=''>
              Save <span className='font-bold text-vert '>50%</span>
            </h3>
            <img
              alt='trois'
              src='/produits/bundle/bundle_1.webp'
              className=' m-auto w-[80px] py-1'
            />
            <h3 className='flex justify-center space-x-1 text-[15px]'>
              <span className='font-bold text-vert'>
                £{produit.price.toFixed(2)}
              </span>
              <span className='line-through'>
                £{(produit.price * 2).toFixed(2)}
              </span>
            </h3>
            <span className='text-sm font-semibold'>
              £{produit.price.toFixed(2)} each
            </span>
          </article>

          <article
            onClick={() => quantityPicker(2)}
            className={`relative w-full cursor-pointer rounded-[8px]  border-[3px] bg-[#f7a08b]/10 text-center transition-all hover:z-[50] hover:scale-105  ${
              quantity == 2 ? "border-vert" : ""
            }`}>
            {quantity == 2 ? (
              <div className='absolute -left-1.5'>
                <img
                  alt='greencheck'
                  src='icons/greencheck.svg'
                  className='m-auto -mt-[10px] w-[25px] rounded-full border-[3px] border-vert '
                />
              </div>
            ) : (
              ""
            )}
            <h2 className='animate-pulse text-[12px] font-bold'>BEST SELLER</h2>
            <h2 className='font-bold'>2-Pack</h2>
            <h3 className=''>
              Save <span className='font-bold text-vert'>63%</span>
            </h3>
            <img
              alt='trois'
              src='/produits/bundle/bundle_2.webp'
              className=' m-auto w-[80px] py-1'
            />
            <h3 className='flex justify-center space-x-1 text-[15px]'>
              <span className='font-bold text-vert'>
                £{(produit.price * 1.5).toFixed(2)}
              </span>
              <span className='line-through'>
                £{(produit.price * 2 * 2).toFixed(2)}
              </span>
            </h3>
            <h3 className='text-sm font-semibold'>
              £{((produit.price * 1.5) / 2).toFixed(2)} each
            </h3>
          </article>
          <article
            onClick={() => quantityPicker(3)}
            className={`relative w-full cursor-pointer  rounded-[8px] border-[3px] pt-[18px] text-center transition-all hover:z-[50] hover:scale-105  ${
              quantity == 3 ? "border-vert" : ""
            }`}>
            {quantity == 3 ? (
              <div className='absolute -left-1.5'>
                <img
                  alt='greencheck'
                  src='icons/greencheck.svg'
                  className='m-auto -mt-[28px] w-[25px] rounded-full border-[3px] border-vert '
                />
              </div>
            ) : (
              ""
            )}
            <h2 className='font-bold'>3-Pack</h2>
            <h3 className=''>
              Save <span className='font-bold text-vert'>68%</span>
            </h3>
            <img
              alt='trois'
              src='/produits/bundle/bundle_3.webp'
              className=' m-auto w-[80px] py-1'
            />
            <h3 className='flex flex-shrink justify-center space-x-1 text-[15px]'>
              <span className='font-bold text-vert'>
                £{(produit.price * 2).toFixed(2)}
              </span>
              <span className='line-through'>
                £{(produit.price * 2 * 3).toFixed(2)}
              </span>
            </h3>
            <span className='text-sm font-semibold '>
              £{((produit.price * 2) / 3).toFixed(2)} each
            </span>
          </article>
        </section>
        <section className='m-auto md:w-3/5 lg:w-full'>
          <button
            onClick={AddToCart}
            className='mt-5 flex w-full items-center justify-center rounded-xl bg-vert p-2 py-3.5 font-bold text-white transition-all hover:z-[50] hover:scale-105 '>
            {loading ? (
              <svg
                className='-ml-1 mr-3 h-5 w-5 animate-spin text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'>
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
              </svg>
            ) : (
              ""
            )}

            <div>ADD TO CART</div>
          </button>
        </section>

        <Assets />
      </article>
    </section>
  );
}
