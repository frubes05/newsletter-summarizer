import About from "@/components/main/about/page";
import Contact from "@/components/main/contact/page";
import SummaryForm from "@/components/main/summary-form/page";

export default function Home() {
  return (
    <main>
      <section className="flex justify-center items-center flex-col gap-12 pt-36 pb-24 bg-primary-300">
        <h1 className="text-white text-6xl">Summarize a report!</h1>
        <p className="text-white opacity-75">
          Use this tool to summarize the latest news and share them with your
          friends and family!
        </p>
        <SummaryForm />
      </section>
      <About />
      <Contact />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#111827"
          fillOpacity="1"
          d="M0,160L60,181.3C120,203,240,245,360,234.7C480,224,600,160,720,133.3C840,107,960,117,1080,128C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </main>
  );
}
