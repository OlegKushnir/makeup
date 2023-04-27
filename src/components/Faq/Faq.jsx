import app from '../App.module.css';

const Faq = () => {
  return (
    <section className={app.faq}>
      <h2 className={app.section__title}>FAQ</h2>
      <div className={app.wrapper}>
        <article className={app.text}>
          <h3>How to prepare for our meeting?</h3>
          <p>
            Try to avoid new procedures with your skin and do not use new
            cosmetic products for at least one week before the event. Try to do
            everything to avoid dehydration of the skin: apply a moisturizer in
            the morning and evening, you can make a moisturizing mask the day
            before or put a thick layer of moisturizer on the night before.
          </p>
          <p>
            The hair should be washed the night before or in the morning with
            shampoo and conditioner, oil and damp should not be applied. Thermal
            protection too - I will use it, I will treat your hair as carefully
            as possible.
          </p>
          <p>
            Please make sure your hair is 101% dry, it will make my job a lot
            easier.
          </p>
          <h3>How to prepare for a trial?</h3>
          <p>
            I will definitely ask you what makeup you wear every day, if you
            have a photo of your usual makeup, it will be great.
          </p>
          <h3>When is the best time for trial of a wedding look?</h3>
          <p>
            I recommend holding a trial a month and a half before the wedding.
            The sooner you do it, the greater the chance that you may change
            your mind and want a different look. You can find a photo of the
            makeup or hairstyle you like, ideally several photos.
          </p>
          <h3>Does the price include jewellery or extra hair?</h3>
          <p>
            No, they are not included. You need to bring your jewellery or hair
            and I will gladly complete your look with them.
          </p>
        </article>
      </div>
    </section>
  );
};
export default Faq;
