import Router from './routes/routes';
import Nav from "./nav";
import './main.css';

export default function Main() {

    return (
        <>
            <header>
                <h1>Welcome to designs</h1>
            </header>
            <main>
                <Nav></Nav>
                <Router></Router>
            </main>
        </>
    )
}