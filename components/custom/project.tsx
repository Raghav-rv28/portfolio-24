import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Project({
  title,
  url,
  imageUrl,
  description,
  demo,
  alternate,
}: {
  title: string;
  imageUrl: string;
  url: string;
  description: string;
  demo?: string;
  alternate?: boolean;
}) {
  if (!demo) {
    return (
      <Link href={url}>
        <div
          className={cn(
            "py-10 w-full flex flex-col border-y-2 border-light",
            alternate ? "text-end" : "",
          )}
        >
          <div className="p-10 pt-0 ">{title}</div>
          <div className={alternate ? "pr-20 self-end" : "pl-20"}>
            <Image alt={title} src={imageUrl} width={384} height={216} />
          </div>
          <div className="text-base p-10">{description}</div>
        </div>
      </Link>
    );
  } else {
    return (
      <div
        className={cn(
          "py-10 w-full flex flex-col border-y-2 border-light",
          alternate ? "text-end" : "",
        )}
      >
        <div className="p-10 pt-0">{title}</div>
        <div className={alternate ? "pr-20 self-end" : "pl-20"}>
          <Link href={demo}>
            <Image alt={title} src={imageUrl} width={384} height={216} />
          </Link>
        </div>
        <div className="text-base p-10">{description}</div>
        <div className="text-base flex flex-row w-full justify-center items-center">
          <Link
            className="mx-5 bg-secondary p-2 px-4 rounded-md hover:bg-background hover:border-secondary hover:border-2"
            href={url}
          >
            Code
          </Link>
          <Link
            className="mx-5 bg-secondary p-2 px-4 rounded-md hover:bg-background hover:border-secondary hover:border-2"
            href={demo}
          >
            Demo
          </Link>
        </div>
      </div>
    );
  }
}
