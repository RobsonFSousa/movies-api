import { Link } from "react-router-dom";

export const MainMenu = () => (
    <div class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class="nav-link">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);