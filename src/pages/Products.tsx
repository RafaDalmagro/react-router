import { useSearchParams } from "react-router";

export function Products() {
    const [searchParams] = useSearchParams();

    const category = searchParams.get("category");
    return (
        <div>
            <nav>
                <a href="/">Home</a>
            </nav>
            <h1>Produtos</h1>

            {category && (
                <span>
                    Categoria: <strong>{category}</strong>
                </span>
            )}

            <div className="cards">
                <a href="/details/1">Produto 1</a>
                <a href="/details/2">Produto 2</a>
                <a href="/details/3">Produto 3</a>
                <a href="/details/4">Produto 4</a>
                <a href="/details/5">Produto 5</a>
                <a href="/details/6">Produto 6</a>
                <a href="/details/7">Produto 7</a>
                <a href="/details/8">Produto 8</a>
                <a href="/details/9">Produto 9</a>
                <a href="/details/10">Produto 10</a>
            </div>
        </div>
    );
}
