import { AiFillHtml5, AiOutlineHome, AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineLock, AiFillStar } from "react-icons/ai";
import { BsFillPersonFill, BsFillBriefcaseFill } from 'react-icons/bs';
import { BiMessageMinus } from 'react-icons/bi';
import { DiCss3, DiReact } from "react-icons/di";
import { FaFacebookF, FaRegIdCard } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { SiJavascript } from "react-icons/si";
import { RiLinkedinFill } from 'react-icons/ri';

const HOME = () => <AiOutlineHome className="icon" />

const ABOUT = () => <BsFillPersonFill className="icon" />

const SKILLS = () => <BsFillBriefcaseFill className="icon" />

const CONTACT = () => <BiMessageMinus className="icon" />

const HTML = () => <AiFillHtml5 className="icon" style={{ color: 'rgb(248, 156, 36)' }} />

const CSS = () => <DiCss3 className="icon" style={{ color: 'rgb(45, 150, 219)' }} />

const JS = () => <SiJavascript className="icon" style={{ color: '#fd1' }} />

const REACT = () => <DiReact className="icon" style={{ color: 'rgb(45, 150, 219)' }} />

const FACEBOOK = () => <FaFacebookF className="icon" />

const TWITTER = () => <AiOutlineTwitter className="icon" />

const WHATSAPP = () => <AiOutlineWhatsApp className="icon" />

const LINKEDIN = () => <RiLinkedinFill className="icon" />

const INSTAGRAM = () => <AiOutlineInstagram className="icon" />

const CARD = () => <FaRegIdCard className="icon" />

const ARROBA = () => <MdAlternateEmail className="icon" />

const LOCK = () => <AiOutlineLock className="icon" />

const STAR = () => <AiFillStar className="icon" />

export { HOME, ABOUT, SKILLS, CONTACT, HTML, CSS, JS, REACT, FACEBOOK, TWITTER, WHATSAPP, LINKEDIN, INSTAGRAM, CARD, ARROBA, LOCK, STAR }
