import Routes from "../components/Routes/index.js";
import {
    Taskbar,
    TaskBeginButton,
    WinButton,
    TaskNotif,
} from "../components/Taskbar/Taskbar.js";
import Window from "../components/Window/Window.js";
import Footer from "../components/PageElements/Footer/Footer.js";
import Galery from "../components/PageElements/Galery/Galery.js";
import Navbar from "../components/PageElements/Navbar/Navbar.js";

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
                <WinButton href={"/"}>Home page</WinButton>
                <WinButton href={"/about"}>About</WinButton>
                <WinButton href={"/music"}>Music</WinButton>
                <TaskNotif />
            </Taskbar>
        </div>
    );
}
