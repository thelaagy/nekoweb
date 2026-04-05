import "./Navbar.css";

function Item({ href, children }) {
    return (
        <li>
            <a href={href}>{children}</a>
        </li>
    );
}

const url = "/nekoweb";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li style={{ flexGrow: 8, fontFamily: "cursive" }}>
                    <h3>Laggy's website</h3>
                </li>
                <Item href={url + "/"}>Home</Item>
                <Item href={url + "/about"}>About</Item>
                <Item href={url + "/music"}>Music</Item>
            </ul>
        </nav>
    );
}
