import SEO from "../components/Seo";
import { site } from "../components/config";
export default function PrivacyPolicy() {
  const pageTitle = `Privacy Policy | ${site.nom}`;
  return (
    <>
      <SEO title={pageTitle} />
      <section className='bg-primary'>
        <div className='m-auto pl-5 pt-10 lg:w-3/5 lg:pl-0'>
          <div className='text-4xl font-bold lg:text-5xl'>Privacy Policy.</div>
        </div>
      </section>
      <img
        alt='footer'
        src='general/barre.svg'
        className='min-h-[120px] 	object-cover'
      />

      <div className='m-auto flex w-[95%] md:w-[95%] lg:w-[90%]'>
        <div className='mx-auto  -mt-20 mb-10'>
          <div className='m-auto rounded-xl bg-white p-4 shadow-lg lg:w-3/5 lg:p-10 '>
            <div className='py-5'>
              <div className='m-auto'>
                <div className='space-y-4'>
                  <h1 className='font-bold'>PRIVACY STATEMENT</h1>
                  <p>----</p>
                  <h1 className='font-bold'>
                    ARTICLE 1 - PERSONAL INFORMATION COLLECTED
                  </h1>
                  <p>
                    When you make a purchase from our store, as part of our
                    buying and selling process, we collect the personal
                    information you provide, such as your name, address and
                    e-mail address.
                    <br />
                    <br />
                    When you browse our store, we also automatically receive the
                    Internet Protocol (IP) address of your computer, which
                    allows us to obtain more details about the browser and
                    operating system you use.
                    <br />
                    <br />
                    E-mail Marketing (if applicable): With your permission, we
                    may send you emails about our store, new products and other
                    updates.
                  </p>
                  <h1 className='font-bold'>ARTICLE 2 - CONSENT</h1>
                  <p>
                    How do you obtain my consent?
                    <br />
                    <br />
                    When you provide us with your personal information to
                    complete a transaction, verify your credit card, place an
                    order, schedule a delivery or return a purchase, we will
                    assume that you consent to our collection and use of your
                    information for that purpose only.
                    <br />
                    <br />
                    If we ask you to provide your personal information for any
                    other reason, such as marketing purposes, we will ask you
                    directly for your express consent, or we will give you the
                    opportunity to decline.
                    <br />
                    <br />
                    How do I withdraw my consent?
                    <br />
                    <br />
                    If, after you have given us your consent, you change your
                    mind and no longer consent to our contacting you, collecting
                    your information or disclosing it, you may notify us by
                    contacting us at contact@{site.nom}.com
                  </p>
                  <h1 className='font-bold'>ARTICLE 3 - DISCLOSURE</h1>
                  <p>
                    We may disclose your personal information if we are required
                    to do so by law or if you violate our Terms and Conditions.
                  </p>
                  <h1 className='font-bold'>ARTICLE 4 - SHOPIFY</h1>
                  <p>
                    Our store is hosted on Shopify Inc. They provide us with the
                    online e-commerce platform that allows us to sell our
                    services and products to you.
                    <br />
                    <br />
                    Your data is stored in Shopify&apos;s data storage system
                    and databases, and in the general Shopify application. Your
                    data is kept on a secure server protected by a firewall.
                  </p>
                  <h1 className='font-bold'>Payment:</h1>
                  <p>
                    If you make your purchase through a direct payment gateway,
                    in that case Shopify will store your credit card
                    information. This information is encrypted in accordance
                    with the Payment Card Industry Data Security Standard
                    PCI-DSS. Your purchase transaction information is retained
                    for as long as necessary to complete your order. Once your
                    order is finalized, your purchase transaction information is
                    deleted.
                    <br />
                    <br />
                    All direct payment gateways are PCI-DSS compliant, managed
                    by the PCI Security Standards Council, which is a joint
                    effort of companies such as Visa, MasterCard, American
                    Express and Discover.
                    <br />
                    <br />
                    PCI-DSS requirements ensure the secure processing of credit
                    card data by our store and its service providers.
                    <br />
                    <br />
                    For more information, please see the Shopify Terms of
                    Service here or the Privacy Policy here.
                  </p>
                  <h1 className='font-bold'>
                    ARTICLE 5 - SERVICES PROVIDED BY THIRD PARTIES
                  </h1>
                  <p>
                    Generally, the third-party providers we use will only
                    collect, use and disclose your information to the extent
                    necessary to perform the services they provide to us.
                    <br />
                    <br />
                    However, some third party service providers, such as payment
                    gateways and other payment transaction processors, have
                    their own privacy policies regarding the information we are
                    required to provide to them for your purchase transactions.
                    <br />
                    <br />
                    With respect to these providers, we recommend that you read
                    their privacy policies carefully so that you can understand
                    how they will handle your personal information.
                    <br />
                    <br />
                    Keep in mind that some suppliers may be located or have
                    facilities located in a different jurisdiction than you or
                    us. So if you decide to proceed with a transaction that
                    requires the services of a third party supplier, then your
                    information may be governed by the laws of the jurisdiction
                    in which that supplier is located or the jurisdiction in
                    which its facilities are located.
                    <br />
                    <br />
                    For example, if you are located in Canada and your
                    transaction is processed through a payment gateway located
                    in the United States, your information used to complete the
                    transaction may be disclosed under United States law,
                    including the Patriot Act.
                    <br />
                    <br />
                    Once you leave our store site or are redirected to a third
                    party website or application, you are no longer governed by
                    this Privacy Policy or our website&apos;s Terms and
                    Conditions of Sale and Use.
                  </p>
                  <h1 className='font-bold'>Links</h1>
                  <p>
                    You may leave our website by clicking on certain links on
                    our site. We assume no responsibility for the privacy
                    practices of these other sites and recommend that you read
                    their privacy policies carefully.
                  </p>
                  <h1 className='font-bold'>ARTICLE 6 - SECURITY</h1>
                  <p>
                    To protect your personal information, we take reasonable
                    precautions and follow industry best practices to ensure
                    that it is not lost, misappropriated, accessed, disclosed,
                    altered or destroyed in an inappropriate manner.
                    <br />
                    <br />
                    If you provide us with your credit card information, it will
                    be encrypted through the use of the SSL security protocol
                    and stored with AES-256 encryption. While no method of
                    transmission over the Internet or electronic storage is 100%
                    secure, we follow all the requirements of the PCI-DSS and
                    implement additional generally accepted industry standards.
                  </p>
                  <h1 className='font-bold'>COOKIES</h1>
                  <p>
                    The following is a list of cookies that we use. We have
                    listed them here so that you can choose whether or not to
                    allow them.
                    <br />
                    <br />
                    _session_id, a unique session identifier, allows Shopify to
                    store information about your session (referrer, landing
                    page, etc.).
                    <br />
                    <br />
                    _shopify_visit, no data retained, persists for 30 minutes
                    since last visit. Used by our website provider s internal
                    statistics tracking system to record the number of visits.
                    <br />
                    <br />
                    shopify_uniq, no data held, expires at midnight (depending
                    on visitor location) the next day. Calculates the number of
                    visits to a store per unique customer.
                    <br />
                    <br />
                    cart, unique identifier, persists for 2 weeks, stores your
                    shopping cart information.
                    <br />
                    <br />
                    _secure_session_id, unique session identifier
                    <br />
                    <br />
                    storefront_digest, unique identifier, undefined if the store
                    has a password, it is used to know if the current visitor
                    has access.
                  </p>
                  <h1 className='font-bold'>ARTICLE 7 - AGE OF CONSENT</h1>
                  By using this site, you represent that you are at least the
                  age of majority in your state or province of residence, and
                  that you have given us your consent to allow any minor in your
                  care to use this website.
                  <h1 className='font-bold'>
                    ARTICLE 8 - CHANGES TO THIS PRIVACY POLICY
                  </h1>
                  <p>
                    We reserve the right to change this Privacy Policy at any
                    time, so please review it frequently. Changes and
                    clarifications will take effect immediately upon posting on
                    the website. If we make changes to the content of this
                    policy, we will notify you here that it has been updated, so
                    that you will know what information we collect, how we use
                    it, and under what circumstances, if any, we disclose it.
                    <br />
                    <br />
                    If our store is acquired by or merged with another company,
                    your information may be transferred to the new owners so
                    that we can continue to sell products to you.
                  </p>
                  <h1 className='font-bold'>
                    Text Marketing Terms and Conditions:
                  </h1>
                  <p>
                    We are using a text messaging platform, which is subject to
                    the following terms and conditions. By opting in for our
                    text marketing and notifications, you agree to these terms
                    and conditions.
                    <br />
                    <br />
                    By entering your phone number in the checkout and
                    initializing a purchase, subscribing via our subscription
                    form or a keyword, you agree that we may send you text
                    notifications (for your order, including abandoned cart
                    reminders) and text marketing offers. You acknowledge that
                    consent is not a condition for any purchase.
                    <br />
                    <br />
                    Your phone number, name, and purchase information will be
                    shared with our SMS platform SMSBump Inc, an European Union
                    company with the office in Sofia, Bulgaria, EU. This data
                    will be used for sending you targeted marketing messages and
                    notifications. Upon sending the text messages, your phone
                    number will be passed to a text messages operator to fulfill
                    their delivery.
                    <br />
                    <br />
                    If you wish to unsubscribe from receiving text marketing
                    messages and notifications reply with STOP to any mobile
                    message sent from us or use the unsubscribe link we provided
                    you with in any of our messages. You understand and agree
                    that alternative methods of opting out, such as using
                    alternative words or requests will not be accounted as a
                    reasonable means of opting out. Message and data rates may
                    apply.
                    <br />
                    <br />
                    For any questions please text &quot;HELP&quot; to the number
                    you received the messages from. You can also contact us for
                    more information. If you wish to opt out please follow the
                    procedures above.
                    <br />
                    <br />
                    For US / CTIA/TCPA Compliance:
                  </p>
                  <h1 className='font-bold'>
                    Text Marketing and notifications:
                  </h1>
                  <p>
                    By entering your phone number in the checkout and
                    initializing a purchase, subscribing via our subscription
                    form or a keyword, you agree that we may send you text
                    notifications for your order, including abandoned cart
                    reminders and text marketing offers. Text marketing messages
                    will not exceed 5 a month. You acknowledge that consent is
                    not a condition for any purchase.
                    <br />
                    <br />
                    If you wish to unsubscribe from receiving text marketing
                    messages and notifications reply with STOP to any mobile
                    message sent from us or use the unsubscribe link we provided
                    you with in any of our messages. You understand and agree
                    that alternative methods of opting out, such as using
                    alternative words or requests will not be accounted as a
                    reasonable means of opting out. Message and data rates may
                    apply.
                    <br />
                    <br />
                    For any questions please text HELP to the number you
                    received the messages from. You can also contact us for more
                    information. If you wish to opt out please follow the
                    procedures above.
                  </p>
                  <h1 className='font-bold'>
                    QUESTIONS AND CONTACT INFORMATION
                  </h1>
                  <p>
                    If you would like to access, correct, amend or delete any
                    personal information we have about you, file a complaint, or
                    if you simply want more information, contact our Privacy
                    Officer at contact@{site.nom}.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
