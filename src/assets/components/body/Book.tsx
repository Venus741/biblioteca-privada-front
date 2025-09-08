import { useEffect, useState } from "react";

export default function Book() {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://biblioteca-privada.onrender.com/books")
        .then((res) => res.json())
        .then((books) => {
            console.log(books)
            setBooks(books);
            setLoading(false);
        })
        .catch((error) => {
            console.log("Erro ao acessar a API", error),
            setLoading(false);
        })
    }, []);

    if (loading) return <p>carregando...</p>;

    return(
        <>
        { books.map((book) => (
            <div key={book.id} className="mt-3 pl-9 rounded-xl h-45 w-150 bg-blue-100 p-3">

                <h2 className="font-normal md:font-bold text-[20px]">
                    {book.title}
                </h2>
                
                <div className="mt-5 grid grid-flow-col grid-rows-2 gap-2">
                    <h5>Gênero: {book.gender}</h5>
                    <h5>Ano: {book.year}</h5>
                    <h5>Lido: {book.wasRead ? "Sim" : "Não"}</h5>
                    <h5>Tenho: {book.isInTheLibrary ? "Sim" : "Não"}</h5>
                </div>
            </div>
        ))}
        </>
    )
}