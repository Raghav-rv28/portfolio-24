import AnimatedText from "../custom/animated-text";
import Experience from "../custom/experience";

export default async function About() {
  return (
    <div
      id="about"
      className="flex flex-col min-h-screen items-start justify-start bg-background"
    >
      <div className="mt-10 text-center w-full">
        <AnimatedText text="About Me" fontSize="text-5xl" bold />
      </div>
      <div className="flex justify-center  md:m-10 flex-col">
        <div className="bg-primary text-base md:text-lg text-light p-5 md:p-10 w-4/5 md:w-3/5 self-center md:self-start rounded-lg">
          Senior Software Engineer with a Bachelor of Science in Computer
          Science from Lakehead University, with 3 years of Experience
          developing, maintaining and scaling Enterprise level applications.
          experienced in React, Node, Next, and various AWS services. Strong
          academic background with a GPA of 3.7. Skilled in developing
          integrated applications,responsive frontend components, and upgrading
          existing applications to use serverless and Microservices
          architecture.
        </div>
        <div className="self-center md:self-end bg-red-100 text-2xl m-10 w-3/5">
          <AnimatedText text="Experience" fontSize="text-3xl" />
          <Experience
            jobTitle="Senior Software Engineer | Dubai Jewellers"
            timePeriod="Nov 2023-Present"
            description="Working on Developing Ecommerce and in house solutions to increase sales,
            and time to sale efficiency"
          />
          <Experience
            jobTitle="Full Stack Cloud Engineer | RSI"
            timePeriod="May 2022 - Aug 2023"
            description="Developed revenue-driving microservices with React, Node, and AWS;
            led migration to serverless architecture; improved features and UX; promoted Agile practices."
            alternate
          />
          <Experience
            jobTitle="Junior Software Engineer | Bangaree Solutions"
            timePeriod="Jan 2020 - Nov 2021"
            description="Participated in customer meetings, developed inventory tracking apps using React, Node.js, Flask, managed databases with PostgreSQL, MySQL, AWS storage, and created Python ETL scripts for data processing and analytics."
          />
        </div>
      </div>
    </div>
  );
}
