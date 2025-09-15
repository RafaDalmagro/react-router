import { useParams } from "react-router";
import { useNavigate } from "react-router";
export function Details() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-1)}>Voltar</button>

            <h1>Detalhes</h1>

            <span>
                Produto: <strong>{id}</strong>
            </span>
        </div>
    );
}
