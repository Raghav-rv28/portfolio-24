"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Experience({
  jobTitle,
  timePeriod,
  description,
  alternate,
}: {
  jobTitle: string;
  timePeriod: string;
  description: string;
  alternate?: boolean;
}) {
  return (
    <Link href={"https://www.linkedin.com/in/raghav-rv28/"}>
      <motion.div
        className="text-center rounded-xl bg-primary mt-5 p-5 border-light  border-2"
        initial={{ y: -100, scale: 0 }}
        whileHover={{
          rotate: 0,
        }}
        whileInView={{
          y: 0,
          scale: 1,
          rotate: alternate ? 3 : -3,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.6,
          },
        }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="text-2xl text-secondary font-bold">{jobTitle}</div>
        <div className="text-xl text-light">{description}</div>
        <div className="text-base text-light text-end pr-16 my-2 font-mono">
          {timePeriod}
        </div>
      </motion.div>
    </Link>
  );
}
