'use client'
import ProductCard from "@/components/productCard/productCard";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/api/produtos")
        const productsData = await response.json()
        setProducts(productsData);
      } catch (error) {
        console.log("Erro ao buscar os produtos.", error);
      }
    } 

    loadProducts()
  }, [])

  return (
    <main className="flex flex-col items-center text-center p-4">
      <section className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-(--heading-color)">
          Bem-vindo à Delícias da Branca
        </h1>
        <p className="mt-2 text-(--tertiary-color)">
          Doces e salgados feitos com amor
        </p>
        
        <a href="#menu" className="mt-4 bg-(--button-color) active:bg-(--hover-button-color) text-white px-6 py-3 rounded-full">
          Ver Cardápio
        </a>
      </section>

      <section id="menu" className="mt-10 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-6">Nosso Cardápio</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              ingredients={product.ingredients}
              img={product.img}
            />
          ))}
        </div>
      </section>

    </main>

  );
}
