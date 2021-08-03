import React from 'react';
import { Link } from 'react-router-dom';

const NaveBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-bg">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/home">DIGITAL NATION</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <Link to="/home">HOME</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/positioning">POSITIONING</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/portfolio">PORTFOLIO</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contacts">CONTACTS</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/blog">BLOG</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/admin">ADMIN</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login">LOGIN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav><br /><br /><br /><br />
        </div>
    );
};

export default NaveBar;