import About from "@/components/section/about";
import Hero from "@/components/section/hero";
import Projects from "@/components/section/projects";
import Publications from "@/components/section/publications";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      {/* First Section | Hero */}
      <Hero />
      {/* Second Section | About Me */}
      <About />
      {/* Third Section | Projects */}
      <Projects />
      {/* Fourth Section | Publications */}
      <Publications />
      {/* Fifth Section | Contact */}
      <div className="w-full bg-background py-10 justify-center items-center flex border-t-light border-t-2">
        <Link
          className="mx-5 bg-secondary p-2 px-4 rounded-md hover:bg-background hover:border-secondary hover:border-2"
          href="mailto:raghavrudhra28@gmail.com"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
