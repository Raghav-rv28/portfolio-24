import Link from "next/link";
import AnimatedText from "../custom/animated-text";
// import { motion } from "framer-motion";

export default async function Hero() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center text-white p-4">
      <h1 className="font-bold opacity-0 lg:opacity-100">
        <AnimatedText text="Raghav Rudhra" fontSize="text-9xl" />
      </h1>
      <h1 className="font-bold opacity-0 md:opacity-100 lg:opacity-0">
        <AnimatedText text="Raghav Rudhra" fontSize="text-5xl" />
      </h1>
      <h1 className="text-xl font-bold md:opacity-0">
        <AnimatedText text="Raghav" fontSize="text-3xl" />
        <AnimatedText text="Rudhra" fontSize="text-3xl" />
      </h1>
      <p className="text-light text-center m-4 text-base md:text-xl lg:text-3xl">
        Software Development Engineer with expertise in developing Full-Stack &
        Cloud solutions.
      </p>
      {/* <motion.div */}
      {/*   whileHover={{ */}
      {/*     scale: 1.1, */}
      {/*     rotate: 10, */}
      {/*   }} */}
      {/* > */}
      <Link
        className="m-5 bg-secondary p-2 px-4 rounded-md hover:bg-background hover:border-secondary hover:border-2"
        href="#about"
      >
        ABOUT ME
      </Link>
      {/* </motion.div> */}
      <nav className="mt-8">
        <ul className="flex space-x-6">
          <Link href="https://github.com/raghav-rv28">
            <li>
              <GithubIcon className="text-light w-8 h-8" />
            </li>
          </Link>
          <Link href="https://www.linkedin.com/in/raghav-rv28">
            <li>
              <LinkedinIcon className="text-light w-8 h-8" />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
function GithubIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
