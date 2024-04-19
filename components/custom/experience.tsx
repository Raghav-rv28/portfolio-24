export default async function Experience({
  jobTitle,
  timePeriod,
  description,
}: {
  jobTitle: string;
  timePeriod: string;
  description: string;
}) {
  return (
    <div className="text-center rounded-xl bg-primary mt-5 p-5">
      <div className="text-2xl text-light font-bold">{jobTitle}</div>
      <div className="text-xl text-light">{description}</div>
      <div className="text-base text-light text-end pr-16 my-2 font-mono">
        {timePeriod}
      </div>
    </div>
  );
}
