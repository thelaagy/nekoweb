import Routes from "../routes.js";
import {
    Taskbar,
    TaskBeginButton,
    WinButton,
    TaskNotif,
} from "../components/Taskbar/Taskbar.js";
import Window from "../components/Window/Window.js";
import Footer from "../components/PageElements/Footer.js";
import Galery from "../components/PageElements/Galery.js";
import Navbar from "../components/PageElements/Navbar.js";

const url = "/nekoweb";

export default function Desktop() {
    document.body.classList.add("desktop-bg");
    return (
        <div className="App" style={{ opacity: 1 }}>
            <Window title={"Laggy's page"}>
                <div className="main">
                    <Navbar />
                    <Routes />
                    <Galery />
                </div>
                <Footer />
            </Window>
            <Taskbar>
                <TaskBeginButton />
                <WinButton href={url + "/"}>Home page</WinButton>
                <WinButton href={url + "/about"}>About</WinButton>
                <WinButton href={url + "/music"}>Music</WinButton>
                <TaskNotif />
            </Taskbar>
        </div>
    );
}
