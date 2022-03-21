import { site } from "./config";

export default function Announcement() {
  return (
    <section className='bg-secondary py-2 text-center text-sm font-semibold text-black tracking-wider'>
      {site.offre}
    </section>
  );
}
