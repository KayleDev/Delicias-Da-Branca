import Image from "next/image";
import { Product } from "@/types/product";

export default function ProductCard({ id, img, name, price }: Product) {
  return (
    <div
      className="flex flex-col rounded-xl bg-white shadow-md overflow-hidden
                 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-4 flex flex-col grow">
        <h3 className="text-lg font-semibold text-(--button-color)">
          {name}
        </h3>

        <p className="text-green-600 text-base mt-1 font-medium">
          R$ {price.toFixed(2)}
        </p>

        <a
          href={`/produtos/${id}`}
          className="mt-auto text-(--links-color) underline underline-offset-2 hover:text-(--hover-button-color)"
        >
          Mais informações
        </a>
      </div>
    </div>
  );
}
