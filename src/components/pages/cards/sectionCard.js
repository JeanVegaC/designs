import NavLink from '../../shared/navLink';
import { HTML, CSS } from '../../shared/icons';
import './sectionCard.css'

export default function SectionCard() {
    return (
        <section className="cards">
            <ul className="ul-cards">
                <li className="li-card">
                    <img src={''}></img>
                    <div className="overlay-project"></div>
                    <h3>Effect-3D</h3>
                    <NavLink to="effect-3d" children='See more'></NavLink>
                    <div className="tecs">
                        <span>Made with</span>
                        <HTML></HTML>
                        <CSS></CSS>
                    </div>
                </li>
            </ul>
        </section>
    )
}