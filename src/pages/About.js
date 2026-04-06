//import SiteButton from "../assets/images/button.png";

import Rakka from "../assets/images/rakka2.gif";

export default function About() {
    return (
        <div className="content">
            <h1>About Me</h1>
            <p>
                Hi! I'm Laggy. I don't know what to put here other then I like
                music, anime/manga, games and old stuff. So here some places
                where you can find me doing something I guess.
            </p>
            <ul>
                <li>
                    <a href="https://www.youtube.com/@Laagy">Youtube</a>
                </li>
                <li>
                    <a href="https://thelaagy.bandcamp.com/">Bandcamp</a>
                </li>
                <li>
                    <a href="https://soundcloud.com/laagy">Soundcloud</a>
                </li>
                <li>
                    <a href="https://bsky.app/profile/laggy.com.br">Bluesky</a>
                </li>
                <li>
                    <a href="https://thelaggy.itch.io/">Itch.io</a>
                </li>
                <li>
                    <a href="https://ko-fi.com/laagy">Ko-fi</a>
                </li>
            </ul>

            <p>My awesome button.</p>
            <p>
                <a
                    href="https://laggy.com.br/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        style={{ width: "auto" }}
                        src={process.env.PUBLIC_URL + "/button.png?"}
                        width="88"
                        height="31"
                        alt="Laggy Website"
                    />
                </a>
            </p>
            <p>
                <textarea
                    style={{ width: "300px" }}
                    value={
                        "<a href='https://laggy.com.br/'><img src='https://laggy.com.br/button.png?' width='88' height='31' alt='Laggy Website'/></a>"
                    }
                />
            </p>
            <p style={{ textAlign: "center" }}>
                <img src={Rakka} alt="" />
            </p>
        </div>
    );
}
