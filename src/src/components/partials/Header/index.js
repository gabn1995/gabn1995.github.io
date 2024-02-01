import React from "react";
import { HeaderArea } from "./styled";
import { Link } from 'react-router-dom';

// import { isLogged, doLogout } from "../../../helpers/authHandler";

const Header = () => {
    // let logged = true
    // let logged = isLogged();

    // const handleLogout = () => {
    //     doLogout();
    //     window.location.href = '/';
    // }

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src="assets/logo/logo_white.png" alt="" />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="">Diferenciais</Link>
                        </li>
                        <li>
                            <Link to="">Contato</Link>
                        </li>
                        <li>
                            <img src="assets/icons/linkedin.png" alt="" />
                        </li>
                        <li>
                            <img src="assets/icons/whatsapp.png" alt="" />
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
};

export default Header;