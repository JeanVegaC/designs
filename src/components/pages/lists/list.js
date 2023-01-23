import { useState, useEffect, } from 'react'
import { useFetcher, useParams } from "react-router-dom"
import { HOME, ABOUT, SKILLS, CONTACT, FACEBOOK, TWITTER, WHATSAPP, LINKEDIN, INSTAGRAM, STAR } from "../../shared/icons";

import './list.css';

export default function List() {
    const { list } = useParams();

    const [stars, setStars] = useState(null);
    const [ulStars, setUlStars] = useState(null);
    useEffect(() => {
        setStars(document.querySelectorAll('.li-star'));
        setUlStars(document.querySelector('.ul-stars'));
    }, []);

    switch (list) {
        case 'effect-3d': return (
            <div id="effect-3d">
                <div className="container">
                    <nav className="nav-3d">
                        <ul className="ul-links">
                            <li className="li-link">
                                <HOME />
                                <span>Home</span></li>
                            <li className="li-link">
                                <ABOUT />
                                <span>About</span></li>
                            <li className="li-link">
                                <SKILLS />
                                <span>Skills</span></li>
                            <li className="li-link">
                                <CONTACT />
                                <span>Contact</span></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
        case 'effect-fill': return (
            <div id="effect-fill">
                <div className="container">
                    <nav className="nav-fill">
                        <ul className="ul-links">
                            <li className="li-link">
                                <span>HOME</span>
                            </li>
                            <li className="li-link">
                                <span>SKILLS</span>
                            </li>
                            <li className="li-link">
                                <span>PROJECTS</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
        case 'social-media-1': return (
            <div id="social-media">
                <div className="container">
                    <ul className="ul-socials">
                        <li className="li-social" data-social="FACEBOOK">
                            <FACEBOOK />
                        </li>
                        <li className="li-social" data-social="TWITTER">
                            <TWITTER />
                        </li>
                        <li className="li-social" data-social="WHATSAPP">
                            <WHATSAPP />
                        </li>
                        <li className="li-social" data-social="LINKEDIN">
                            <LINKEDIN />
                        </li>
                        <li className="li-social" data-social="INSTAGRAM">
                            <INSTAGRAM />
                        </li>
                    </ul>
                </div>
            </div>
        )
        case 'social-media-2': return (
            <div id="social-media-2">
                <div className="container">
                    <ul className="ul-socials">
                        <li className="li-social">
                            <FACEBOOK />
                        </li>
                        <li className="li-social">
                            <TWITTER />
                        </li>
                        <li className="li-social">
                            <WHATSAPP />
                        </li>
                        <li className="li-social">
                            <LINKEDIN />
                        </li>
                        <li className="li-social">
                            <INSTAGRAM />
                        </li>
                    </ul>
                </div>
            </div>
        )
        case 'social-media-3': return (
            <div id="social-media-3">
                <div className="container">
                    <ul className="ul-socials">
                        <li className="li-social" data-social="FACEBOOK">
                            <FACEBOOK />
                        </li>
                        <li className="li-social" data-social="TWITTER">
                            <TWITTER />
                        </li>
                        <li className="li-social" data-social="WHATSAPP">
                            <WHATSAPP />
                        </li>
                        <li className="li-social" data-social="LINKEDIN">
                            <LINKEDIN />
                        </li>
                        <li className="li-social" data-social="INSTAGRAM">
                            <INSTAGRAM />
                        </li>
                    </ul>
                </div>
            </div>
        )
        case 'rating-stars':




            stars && stars.forEach(e => {
                e.addEventListener('mouseover', (e) => {
                    stars.forEach(e => {
                        e.classList.remove('star-hover');
                    })

                    const limit = e.target.id;
                    for (let index = 0; index < limit; index++) {
                        stars[index].classList.add('star-hover');
                    }
                })

                ulStars && ulStars.addEventListener('mouseout', (e) => {
                    stars.forEach(e => {
                        e.classList.remove('star-hover');
                    })
                })
            })

            const checkStars = (e) => {
                const stars = document.querySelectorAll('.li-star');
                const limit = e.target.id;

                stars.forEach(e => {
                    e.classList.remove('star-selected');
                    e.classList.remove('splash');
                })

                

                for (let index = 0; index < limit; index++) {
                    stars[index].classList.add('splash');
                    stars[index].classList.add('star-selected');
                }
            }


            return (


                <div id="rating-stars">
                    <div className="container">
                        <ul className="ul-stars">
                            <li onClick={checkStars} className="li-star" id="1">
                                <span></span>
                                <span></span>
                                <span></span>
                                <STAR />
                            </li>
                            <li onClick={checkStars} className="li-star" id="2">
                                <span></span>
                                <span></span>
                                <span></span>
                                <STAR />
                            </li>
                            <li onClick={checkStars} className="li-star" id="3">
                                <span></span>
                                <span></span>
                                <span></span>
                                <STAR />
                            </li>
                            <li onClick={checkStars} className="li-star" id="4">
                                <span></span>
                                <span></span>
                                <span></span>
                                <STAR />
                            </li>
                            <li onClick={checkStars} className="li-star" id="5">
                                <span></span>
                                <span></span>
                                <span></span>
                                <STAR />
                            </li>
                        </ul>
                    </div>
                </div>
            )
    }

}