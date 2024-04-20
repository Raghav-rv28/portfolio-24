import Image from "next/image";
import Link from "next/link";

export default async function publication({
  title,
  imageUrl,
  url,
}: {
  title: string;
  imageUrl: string;
  url: string;
}) {
  return (
    <Link href={url}>
      <div className="flex flex-col m-10 bg-primary w-1/3 justify-center items-center rounded-lg">
        <div className="w-full text-xl text-center text-light">{title}</div>
        <Image alt={title} src={imageUrl} width={250} height={250} />
      </div>
    </Link>
  );
}
