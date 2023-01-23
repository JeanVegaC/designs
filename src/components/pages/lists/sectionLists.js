import { HTML, CSS } from "../../shared/icons";
import NavLink from "../../shared/navLink";
import effect3d from '../../../assets/lists/effect-3d.PNG';
import effectFill from '../../../assets/lists/effect-fill.PNG';
import socialMedia1 from '../../../assets/lists/social-media-1.PNG';
import socialMedia2 from '../../../assets/lists/social-media-2.PNG';
import socialMedia3 from '../../../assets/lists/social-media-3.PNG';
import starRating from '../../../assets/lists/star-rating.PNG';
import './sectionLists.css';

export default function SectionLists() {
    return (
        <section className="lists">
            <ul className="ul-lists">
                <li className="li-list">
                    <img src={effect3d}></img>
                    <div className="overlay-project"></div>
                    <h3>Effect-3D</h3>
                    <NavLink to="effect-3d" children='See more'></NavLink>
                    <div className="tecs">
                        <span>Made with</span>
                        <HTML></HTML>
                        <CSS></CSS>
                    </div>
                </li>
                <li className="li-list">
                    <img src={effectFill}></img>
                    <div className="overlay-project"></div>
                    <h3>Effect-Fill</h3>
                    <NavLink to="effect-fill" children='See more'></NavLink>
                    <div className="tecs">
                        <span>Made with</span>
                        <HTML></HTML>
                        <CSS></CSS>
                    </div>
                </li>
                <li className="li-list">
                    <img src={socialMedia1}></img>
                    <div className="overlay-project"></div>
                    <h3>Social-media</h3>
                    <NavLink to="social-media-1" children='See more'></NavLink>
                    <div className="tecs">
                        <span>Made with</span>
                        <HTML></HTML>
                        <CSS></CSS>
                    </div>
                </li>
                <li className="li-list">
                    <img src={socialMedia2}></img>
                    <div className="overlay-project"></div>
                    <h3>Social-media-2</h3>
                    <NavLink to="social-media-2" children='See more'></NavLink>
                    <div className="tecs">
                        <span>Made with</span>
                        <HTML></HTML>
                        <CSS></CSS>
                    </div>
                </li>
                <li className="li-list">
                    <img src={socialMedia3}></img>
                    <div className="overlay-project"></div>
                    <h3>Social-media-3</h3>
                    <NavLink to="social-media-3" children='See more'></NavLink>
                    <div className="tecs">
                        <span>Made with</span>
                        <HTML></HTML>
                        <CSS></CSS>
                    </div>
                </li>
                <li className="li-list">
                    <img src={starRating}></img>
                    <div className="overlay-project"></div>
                    <h3>Rating-Stars</h3>
                    <NavLink to="rating-stars" children='See more'></NavLink>
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