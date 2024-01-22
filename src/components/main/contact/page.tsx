import ContactForm from "./contact-form/page";

export default function Contact() {
  return (
    <section
      className="bg-primary-300 flex justify-center items-center flex-col"
      id="contact"
    >
      <article className="min-w-[700px] text-center flex flex-col gap-8 my-24">
        <h2 className="text-white text-3xl font-bold">
          Have improvements ideas ?
        </h2>
        <p className="text-white">
          Do not hesitate and reach out to us at any time.
        </p>
        <ContactForm />
      </article>
    </section>
  );
}
