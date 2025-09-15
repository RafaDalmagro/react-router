import { useNavigate } from "react-router";

export function Home() {
    const navigate = useNavigate();
    function goTo() {
        navigate("/products");
    }

    return (
        <div>
            <h1>Home</h1>

            <nav>
                <a href="/products">Produtos</a>
                <a href="/products?category=tvs">Categoria</a>

                <button type="button" onClick={goTo}>
                    Ver produtos
                </button>
            </nav>
        </div>
    );
}
