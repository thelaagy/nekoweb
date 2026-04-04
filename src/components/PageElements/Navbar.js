import "./Navbar.css";

function Item({ href, children }) {
    return (
        <li>
            <a href={href}>{children}</a>
        </li>
    );
}

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li style={{ flexGrow: 8, fontFamily: "cursive" }}>
                    <h3>Laggy's website</h3>
                </li>
                <Item href={"/"}>Home</Item>
                <Item href={"/about"}>About</Item>
                <Item href={"/music"}>Music</Item>
            </ul>
        </nav>
    );
}
