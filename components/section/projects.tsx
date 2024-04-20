import AnimatedText from "../custom/animated-text";
import Project from "../custom/project";

export default async function Projects() {
  return (
    <div className="bg-background flex flex-col min-h-screen items-start justify-start">
      <div className="mt-10 text-center w-full">
        <AnimatedText text="Projects" fontSize="text-5xl" />
      </div>
      <div className="flex flex-col text-5xl w-full my-10">
        <Project
          title="Kitty-sesh"
          url="https://github.com/Raghav-rv28/kitty-sesh"
          imageUrl="https://github.com/Raghav-rv28/kitty-sesh/assets/62635473/70ae0a80-85b9-427b-9444-950cf7eafe0e"
          description="Kitty-sesh is an Kitty Terminal Session Manager, Go-based application that provides a graphical user interface (GUI) to manage and interact with Kitty terminal sessions. Users can save, view, rename, delete, and launch stored sessions directly from the application."
        />
        <Project
          title="Env-watcher"
          url="https://github.com/Raghav-rv28/env-watcher"
          imageUrl="https://github.com/Raghav-rv28/env-watcher/assets/62635473/5e36478c-41b7-4713-881d-703e346d2461"
          description="Tired of taking care of your .env files? no more. this script automatically encrypts all your .env files and creates a copy in the same directory which you can keep with the project/repo. any changes in the .env file(s) will automatically be reflected if the service is running in background. You can easily decrypt those files and it will override the orignal (unencrypted) files or create a new one if not there."
          alternate
        />
        <Project
          title="Clipboardpp"
          url="https://github.com/Raghav-rv28/clipboardpp"
          imageUrl="https://github.com/Raghav-rv28/clipboardpp/assets/62635473/5c226a4c-a421-40f7-b0fe-242467afbccd"
          description="a window like clipbboard extender (plus plus) which stores all the recent copied text into a database and helps manage multiple buffers."
        />
        <Project
          title="Custom-forms"
          url="https://github.com/Raghav-rv28/custom-forms"
          imageUrl="https://github.com/Raghav-rv28/custom-forms/assets/62635473/97f0cfc1-d8c7-4ca3-a467-ac3f44654fe8"
          demo="https://custom-forms-pi.vercel.app/"
          description="A form builder which lets user build an online form for surveys and feedbacks. utilizes Dnd kit for Drag and drop functionality. "
          alternate
        />
      </div>
    </div>
  );
}
