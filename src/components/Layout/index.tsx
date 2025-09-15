import "./styles.css";

import { Outlet } from "react-router";

export function Layout() {
    return (
        <div>
            <header className="header">
                <p>Olá, visitante!</p>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="copyright">
                <span>Todos os direitos reservados</span>
            </footer>
        </div>
    );
}
