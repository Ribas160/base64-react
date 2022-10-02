import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/img/logo.svg';

import './Header.css';

const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <Link to="/">
                    <Logo className="header--logo" />
                </Link>
            </div>
        </header>
    );
}

export default Header;