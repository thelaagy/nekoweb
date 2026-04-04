// Resources
import { ReactComponent as CloseIcon } from "../../assets/svg/window/close.svg";
import { ReactComponent as MinimizeIcon } from "../../assets/svg/window/minimize.svg";
import { ReactComponent as MaximizeMin } from "../../assets/svg/window/maximize_min.svg";
import { ReactComponent as MaximizeMax } from "../../assets/svg/window/maximize_max.svg";
// Styling
import "./Titlebar.css";
import "./WindowFrame.css";
import Icons from "../../assets/images/icons.js";

// Window title bar icon
function TitleIcon({ src }) {
    return <img src={src} alt="" />;
}

// Window title bar buttons
function TitleButton({ enabled, style, children }) {
    // Check if enabled
    if (!enabled) return <></>;
    return (
        <button className="titlebutton" style={style}>
            {children}
        </button>
    );
}

function Close({ enabled }) {
    return (
        <TitleButton enabled={enabled}>
            <CloseIcon />
        </TitleButton>
    );
}
function Maximize({ enabled }) {
    return (
        <TitleButton enabled={enabled} style={{ marginLeft: 0 }}>
            <MaximizeIcon />
        </TitleButton>
    );
}

function MaximizeIcon() {
    return (
        <>
            <MaximizeMax id="max" />
            <MaximizeMin id="min" />
        </>
    );
}

function Minimize({ enabled }) {
    return (
        <TitleButton enabled={enabled}>
            <MinimizeIcon />
        </TitleButton>
    );
}

// Window title bar
function TitleBar({
    title = "Placeholder title",
    minimize,
    maximize,
    icon,
    close = true,
}) {
    return (
        <div className="titlebar">
            <div className="text">
                <TitleIcon src={icon} />
                {title}
            </div>
            <div className="buttons">
                <Minimize enabled={minimize} />
                <Maximize enabled={maximize} />
                <Close enabled={close} />
            </div>
        </div>
    );
}

// Window frame
export default function Window({
    title,
    icon = Icons.file,
    minimize = true,
    maximize = true,
    close = true,
    children,
}) {
    return (
        <div className="window">
            <TitleBar
                title={title}
                minimize={minimize}
                maximize={maximize}
                icon={icon}
                close={close}
            />
            <div className="container">{children}</div>
        </div>
    );
}
