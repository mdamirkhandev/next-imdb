import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center ">
      <Image src="/loader.svg" width={100} height={100} alt="loading" />
    </div>
  );
}
