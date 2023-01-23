import { useParams } from "react-router-dom";
import './card.css'

export default function Card() {
    const { card } = useParams();

    switch (card) {
        case 'effect-3d': return (
            <div id="effect-3d">
                <div className="container">
                    <ul className="ul-cards">
                        <li className="li-card">
                            <img className="img-overlay" src="https://aniyuki.com/wp-content/uploads/2022/02/aniyuki-boku-no-hero-academia-toga-himiko-coloring-page-25.jpg"></img>
                            <div className="overlay"></div>
                            <img className="img-3d" src="https://i.pinimg.com/originals/75/02/e8/7502e889a44def58786b7c39235da413.png"></img>
                            <div className="info">
                                <h3>Rey asdasd</h3>
                            </div>
                        </li>
                        <li className="li-card">
                            <img className="img-overlay" src="https://i.pinimg.com/originals/da/3a/a8/da3aa89a15707add38fa788430e39510.jpg"></img>
                            <div className="overlay"></div>
                            <img className="img-3d" src="https://sites.google.com/site/risagremoryloveissey/_/rsrc/1433259273912/home/akeno-san/Akeno.png?height=400&width=325"></img>
                            <div className="info">
                                <h3>Rey asdasd</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
        default: return ('Not for the moment card ' + card);
    }
}