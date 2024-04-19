import About from "@/components/section/about";
import Hero from "@/components/section/hero";

export default function Home() {
  return (
    <div className="container">
      {/* First Section | Hero */}
      <Hero />
      {/* Second Section | About Me */}
      <About />
    </div>
  );
}
