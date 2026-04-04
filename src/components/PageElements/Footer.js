import "./Footer.css";
import data from "./Footer.json";

function Category({ name, style, children }) {
    return (
        <ul style={style}>
            {name}
            {children}
        </ul>
    );
}

function Item({ href, children }) {
    return (
        <li>
            <a href={href} target="_blank" rel="noreferrer">
                {children}
            </a>
        </li>
    );
}

export default function Footer() {
    const categories = data.Categories;
    return (
        <footer>
            {categories.map((category) => (
                <Category name={category.name} style={category.style}>
                    {category.items.map((item) => (
                        <Item href={item.url}>{item.name}</Item>
                    ))}
                </Category>
            ))}
        </footer>
    );
}
