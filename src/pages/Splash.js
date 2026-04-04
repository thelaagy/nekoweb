import "./Pages.css";

export default function Splash() {
    return (
        <div class="starting">
            <ul>
                <li className="delay-1">
                    Welcome to Laggy n' Dirty Operating System
                </li>
                <li></li>
                <div className="delay-2">
                    <li>MiceDriver v6.9 installed...</li>
                    <li>KeyboardDriver v4.20 installed...</li>
                    <li>MVideo v0.256 BETA installed...</li>
                    <li>SoundEXpansion v0.9999 installed...</li>
                </div>
                <li></li>
                <li className="delay-3">A:\&gt;LAGOS\los.run</li>
                <li className="delay-4">
                    Starting LagOS Window Manager...<span class="blink">_</span>
                </li>
            </ul>
            <p></p>
        </div>
    );
}
