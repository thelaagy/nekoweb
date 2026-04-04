import Rakka1 from "../assets/images/rakka.gif";
import MikuGif from "../assets/images/miku.gif";

export default function Home() {
    return (
        <div className="content">
            <h1>Welcome</h1>
            <p>
                I made this website to be a hub with where you can find me and
                the things I do!
                <img src={MikuGif} style={{ width: "16px" }} alt="" />
            </p>
            <p>
                Click on the buttons at the <i>navigation bar on the left</i>{" "}
                for more info.
            </p>
            <p style={{ textAlign: "center" }}>
                <img src={Rakka1} alt="" />
            </p>
            <h2>Latest youtube upload</h2>
            <div className="responsive-iframe" style={{ textAlign: "center" }}>
                <iframe
                    title="latestyt"
                    className="iframe"
                    src="https://www.youtube.com/embed?listType=playlist&list=UUMa7NwVZOrCRZUcbdbRa3tg"
                ></iframe>
            </div>
        </div>
    );
}
