import "./App.css";
import { useEffect, useState } from "react";
import Splash from "./pages/Splash.js";
import useSound from "use-sound";
import bootSfx from "./assets/sound/boot.wav";
import Desktop from "./pages/Desktop.js";

function App() {
    const [isLoading, setIsloading] = useState(true);

    const [boot] = useState(() => {
        const savedData = localStorage.getItem("booted");
        return savedData ? JSON.parse(savedData) : { booted: true };
    });

    const [play] = useSound(bootSfx, { volume: 0.1 });

    useEffect(() => {
        if (!localStorage.getItem("booted")) {
            setTimeout(() => {
                setIsloading(false);
                localStorage.setItem("booted", "true");
                play();
            }, 5000);
        }
        // eslint-disable-next-line
    }, [boot]);

    return isLoading && !localStorage.getItem("booted") ? (
        <Splash />
    ) : (
        <Desktop />
    );
}

export default App;
