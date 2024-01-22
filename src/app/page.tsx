import About from "@/features/about/about";
import Contact from "@/features/contact/contact";
import Summary from "@/features/summary/summary";

export default function Home() {
  return (
    <main>
      <Summary />
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
