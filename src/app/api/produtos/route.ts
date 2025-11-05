import { NextResponse } from "next/server";

export async function GET() {
    const products = [
        {
            id: 1,
            name: "Copo da felicidade",
            price: 12.99,
            ingredients: [
                "Leite condensado",
                "Manteiga",
                "Chocolate em pó",
                "Creme de leite",
                "Morangos",
                "Bolo de chocolate triturado",
                "Chocolate meio amargo",
                "Chantilly",
                "Raspas de chocolate"
            ],
            img: "/imagens/produtos/copodafelicidade.png"
        },
        {
            id: 2,
            name: "Coxinha de frango",
            price: 1.99,
            ingredients: [
                "Peito de frango cozido e desfiado",
                "Cebola",
                "Alho",
                "Sal",
                "Pimenta-do-reino",
                "Salsinha ou cheiro-verde",
                "Leite",
                "Farinha de trigo",
                "Manteiga",
                "Caldo de galinha",
                "Farinha de rosca",
                "Ovos",
                "Óleo para fritar"
            ],
            img: "/imagens/produtos/coxinhadefrango.png"
        },
        {
            id: 3,
            name: "Pão de queijo",
            price: 0.99,
            ingredients: [
                "Polvilho azedo",
                "Leite",
                "Óleo",
                "Queijo minas ralado",
                "Ovos",
                "Sal"
            ],
            img: "/imagens/produtos/paodequeijo.png"
        },
        {
            id: 4,
            name: "Brownie",
            price: 6.5,
            ingredients: [
                "Chocolate meio amargo",
                "Manteiga",
                "Açúcar",
                "Ovos",
                "Farinha de trigo",
                "Cacau em pó",
                "Essência de baunilha",
                "Sal"
            ],
            img: "/imagens/produtos/brownie.png"
        },
        {
            id: 5,
            name: "Pastel de carne",
            price: 4.0,
            ingredients: [
                "Massa para pastel",
                "Carne moída",
                "Cebola",
                "Alho",
                "Temperos a gosto",
                "Óleo para fritar"
            ],
            img: "/imagens/produtos/pasteldecarne.png"
        },
        {
            id: 6,
            name: "Brigadeiro gourmet",
            price: 2.5,
            ingredients: [
                "Leite condensado",
                "Chocolate em pó",
                "Manteiga",
                "Granulado de chocolate"
            ],
            img: "/imagens/produtos/brigadeiro.png"
        },
        {
            id: 7,
            name: "Empada de frango",
            price: 3.99,
            ingredients: [
                "Farinha de trigo",
                "Manteiga",
                "Ovo",
                "Sal",
                "Frango desfiado",
                "Requeijão",
                "Cebola",
                "Temperos a gosto"
            ],
            img: "/imagens/produtos/empada.png"
        },
        {
            id: 8,
            name: "Torta de limão",
            price: 8.99,
            ingredients: [
                "Biscoito triturado",
                "Manteiga derretida",
                "Leite condensado",
                "Suco de limão",
                "Raspas de limão",
                "Chantilly"
            ],
            img: "/imagens/produtos/tortadelimao.png"
        },
        {
            id: 9,
            name: "Mini pizza de calabresa",
            price: 5.5,
            ingredients: [
                "Massa de pizza",
                "Molho de tomate",
                "Calabresa fatiada",
                "Mussarela",
                "Orégano"
            ],
            img: "/imagens/produtos/minipizza.png"
        },
        {
            id: 10,
            name: "Suco natural de maracujá",
            price: 4.5,
            ingredients: [
                "Maracujá",
                "Água",
                "Açúcar",
                "Gelo"
            ],
            img: "/imagens/produtos/sucomaracuja.png"
        }
    ];

    return NextResponse.json(products);
}
