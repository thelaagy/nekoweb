export default function Music() {
    return (
        <div className="content">
            <h1>Music stuff</h1>
            <p>
                Hello! Here are the links to where you can listen to my music!!!
                If you've been to the <a href="?page=aboutme">about me page</a>{" "}
                before this one, you already saw these, but some redundancy
                won't bite anyone.
            </p>
            <ul>
                <li>
                    <a href="https://www.youtube.com/@Laagy">Youtube</a>
                </li>
                <li>
                    <a href="https://thelaagy.bandcamp.com/">Bandcamp</a>
                </li>
                <li>
                    <a href="https://soundcloud.com/laagy">Soundcloud*</a>
                </li>
            </ul>
            <p>
                * I will not upload to Soundcloud anytime soon again (upload
                limit reasons) and it's there that is where my old stuff is
                so...
            </p>

            <h2 style={{ textAlign: "center" }}>Latest youtube upload!</h2>
            <p style={{ textAlign: "center" }}>
                Personally I recommend you checking the newer stuff but you do
                whatever you want.
            </p>
            <p style={{ textAlign: "center" }}>
                <div class="responsive-iframe" style={{ textAlign: "center" }}>
                    <iframe
                        title="latestyt"
                        class="iframe"
                        src="https://www.youtube.com/embed?listType=playlist&list=UUMa7NwVZOrCRZUcbdbRa3tg"
                    ></iframe>
                </div>
            </p>

            <h2 style={{ textAlign: "center" }}>
                One of my favorite "8-bit" cover
            </h2>
            <p style={{ textAlign: "center" }}>Awesome plok.</p>
            <p style={{ textAlign: "center" }}>
                <div class="responsive-iframe" style={{ textAlign: "center" }}>
                    <iframe
                        title="yt1"
                        class="iframe"
                        src="https://www.youtube.com/embed/z1VAIPHhaTE"
                    ></iframe>
                </div>
            </p>

            <h2 style={{ textAlign: "center" }}>Random Autumn Leaves cover</h2>
            <p style={{ textAlign: "center" }}>Why not?</p>
            <p style={{ textAlign: "center" }}>
                <iframe
                    title="sc"
                    width="380"
                    height="300"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1179827560&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                ></iframe>
                <div
                    style={{
                        fontSize: "10px",
                        color: "#cccccc",
                        lineBreak: "anywhere",
                        wordBreak: "normal",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        fontFamily:
                            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                        fontWeight: 100,
                    }}
                ></div>
            </p>

            <h2 style={{ textAlign: "center" }}>
                My first and only album (yet)
            </h2>
            <p style={{ textAlign: "center" }}>
                I plan in doing more albums even if it's just a unreleased
                tracks from years ago collection.
            </p>
            <p style={{ textAlign: "center" }}>
                <iframe
                    title="bc"
                    style={{ border: 0, width: "380px", height: "472px" }}
                    src="https://bandcamp.com/EmbeddedPlayer/album=1605425563/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/"
                    seamless
                >
                    <a href="https://thelaagy.bandcamp.com/album/keep-tracking">
                        Keep Tracking by Laggy
                    </a>
                </iframe>
            </p>
        </div>
    );
}
