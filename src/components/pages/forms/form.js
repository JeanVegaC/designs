import { useParams } from "react-router-dom";
import { ABOUT, ARROBA, LOCK } from '../../shared/icons';
import './form.css';

export default function Form() {
    const { form } = useParams();
    switch (form) {
        case 'form-double': return (
            <div id="form-double">
                <div className="container">
                    <div className="type-form">
                        <span>LOG IN</span>
                        <span>SIGN IN</span>
                    </div>
                    <input type='checkbox'></input>
                    <form className="login">
                        <header>
                            <h3>Log In</h3>
                        </header>
                        <ul className="ul-inputs">
                            <li className="li-input">
                                <ARROBA /><input type='text' placeholder="Email"></input>
                            </li>
                            <li className="li-input">
                                <LOCK /><input type='text' placeholder="Password"></input>
                            </li>
                        </ul>
                        <button>SUBMIT</button>
                        <span>Forgot your password?</span>
                    </form>
                    <form className="signin">
                        <header>
                            <h3>SIGN IN</h3>
                        </header>
                        <ul className="ul-inputs">
                            <li className="li-input">
                                <ABOUT /><input type='text' placeholder="Name"></input>
                            </li>
                            <li className="li-input">
                                <ARROBA /><input type='text' placeholder="Email"></input>
                            </li>
                            <li className="li-input">
                                <LOCK /><input type='text' placeholder="Password"></input>
                            </li>
                        </ul>
                        <button>SUBMIT</button>
                    </form>
                </div>
            </div>
        )
        default: return ('Not for the momento form ' + form);
    }
}