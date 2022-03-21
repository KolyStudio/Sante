import SEO from "../components/Seo";
import { site } from "../components/config";

export default function LegalNotice() {
  const pageTitle = `Legal Notice | ${site.nom}`;

  return (
    <>
      <SEO title={pageTitle} />
      <div className='bg-primary'>
        <div className='m-auto pl-5 pt-10 lg:w-3/5 lg:pl-0'>
          <div className='text-4xl font-bold lg:text-5xl'>Legal notice.</div>
        </div>
      </div>
      <img
        alt='footer'
        src='general/barre.svg'
        className='min-h-[120px] 	object-cover'
      />

      <section className='m-auto flex w-[95%] md:w-[95%] lg:w-[90%]'>
        <div className='mx-auto  -mt-20 mb-10'>
          <div className='m-auto rounded-xl bg-white p-4 shadow-lg lg:w-3/5 lg:p-10 '>
            <div className='py-5'>
              <div className='m-auto '>
                <div className='space-y-4'>
                  <h1 className='font-bold'>
                    Legal notice of the {site.nom} UK site
                  </h1>

                  <p>----</p>

                  <p>
                    The {site.nom} UK website is accessible via the url address
                    {site.adresse} (hereinafter the &quot;Site&quot;).
                    <br />
                    <br />
                    You can also contact the Site&quot;s editor by email at the
                    following address: contact@heybreal.com
                    <br />
                    <br />
                    The {site.nom} site is edited by :<br />
                    <br />
                    {site.nom} UK
                    <br />
                    <br />
                    For any question(s) or problem(s) regarding your order,
                    please contact us via the email address mentioned above, we
                    will be happy to help you.
                    <br />
                    <br />
                    Sincerely,
                    <br />
                    <br />
                    The {site.nom} UK team.
                    <br />
                    <br />
                    All rights reserved - {site.nom} UK
                    <br />
                    <br />
                    If you have any questions regarding your return/refund,
                    please read our return/refund policies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
