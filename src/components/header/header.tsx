import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed p-2 top-0 right-0 left-0 flex justify-center">
        <Image src="/globe.svg" alt="" width={32} height={32}/>
    </header>
  );
}
