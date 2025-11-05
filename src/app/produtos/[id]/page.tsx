import { notFound } from "next/navigation";
import { Product } from "@/types/product";
import Image from "next/image";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/produtos`, { cache: "no-store" });
  const allProducts: Product[] = await response.json();
  const product = allProducts.find(p => p.id === Number(id));

  if (!product) return notFound();

  return (
    <main className="p-6 h-full flex items-center justify-center flex-col mt-16">
      <Image
        className="rounded-xl"
        src={product.img}
        height={256}
        width={256}
        alt={product.name}
      />
      <h1 className="text-2xl font-bold text-(--button-color) mt-4 mb-2">{product.name}</h1>
      <div className="w-full pl-2">
        <ul className="text-(--tertiary-color) mt-2 list-disc">
          { product.ingredients.map((ingredient) => (<li key={ingredient}>{ingredient}</li>)) }
        </ul>
      </div>

      <p className="text-lg font-medium mt-4 text-green-600">R$ {product.price}</p>
    </main>
  );
}
