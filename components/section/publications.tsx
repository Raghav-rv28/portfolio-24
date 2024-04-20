import AnimatedText from "../custom/animated-text";
import Publication from "../custom/publication";

export default async function publications() {
  return (
    <div className="bg-background flex flex-col">
      <div className="mt-10 text-center w-full">
        <AnimatedText text="Publications" fontSize="text-5xl" />
      </div>
      <div className="flex flex-col">
        <Publication
          title="Creating Cloud Batch Job using AWS ECS Fargate, Eventbridge Scheduler & Terraform"
          imageUrl="https://miro.medium.com/1*nZCBHLCi9K6ntbPbTQbcXA.png"
          url="https://medium.com/@speedgod/creating-cloud-batch-job-using-aws-ecs-fargate-eventbridge-scheduler-terraform-639b98322151"
        />
      </div>
    </div>
  );
}
