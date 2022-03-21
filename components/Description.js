import DescriptionDroite from "./DescriptionDroite";
import DescriptionGauche from "./DescriptionGauche";

export default function Description() {
  return (
    <section className='space-y-10 lg:-mt-[100px] lg:space-y-20'>
      <DescriptionDroite
        image='produits/description/description_1.webp'
        titre='Do you want to live '
        titrebg='without skin tags?'
        texte='
        Having skin tags on your body can <b>reduce your confidence.</b> After all, why would you feel confident with <b>ugly spots on your body?</b><br><br>
        Not only that, skin tags can actually <b>increase in size if not treated properly.</b><br><br>
        Applying silicone kit around the base of a skin tag, <b>limiting the blood supply that is vital for its growth and survival.</b> The fact that the treatment is painless and there are <b>no side effects</b> makes it a product worth checking out.
        '
      />

      <DescriptionGauche
        image='produits/description/description_2.webp'
        titre='Skin tags '
        titrebg="don't match you"
        texte='
        Worrying about <b>unsightly skin tags</b> or wanting to get rid of them as soon as possible leads to nothing but <b>wasted time and money spent on ineffective treatments.</b><br><br>
        Trust us when we say that the ligature method makes <b>quick work of skin tags.</b><br><br>
        You will have the ability to rid yourself of these unsightly things with <b>just a few simple steps.</b>
'
      />

      <DescriptionDroite
        image='produits/description/description_3.webp'
        titre='Take Care of  '
        titrebg='Your Beauty Complex!'
        texte="
        Having a skin tag on your body is <b>embarrassing and it looks ugly.</b> Some people handle it by cutting or burning it off, but <b>those methods are dangerous because they can cause permanent scarring.</b><br><br>
        Our product presents you with the <b>safe and natural way for removing them.</b><br><br>
        Now you have the opportunity to <b>easily eliminate those skin tags</b> with our unique anti skin tag band, so you don't have to deal with them again.
"
      />

      <DescriptionGauche
        image='produits/description/description_4.webp'
        titre="Remove Skin Tags & "
        titrebg='Grow Comfortably'
        texte="
        Having to take time off work in order to <b>visit a dermatologist</b> for skin tag removal.<br><br>
        Aesthetics are important to most people, and having a skin tag on show is <b>rarely a good look.</b><br><br>
        Our Skin Tags Treatment Kit is the <b>fastest, easiest, and cheapest way to remove a skin tag permanently</b> using just one method - ligature. You don't need to see a doctor or pay for expensive treatments, kits or devices. <b>Why wait any longer?</b>"
      />
    </section>
  );
}
