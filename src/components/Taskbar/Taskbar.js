import "./Taskbar.css";
import Icons from "../../assets/images/icons.js";

function TaskButton({ icon = Icons.file, href = "", style, children }) {
    return (
        <li>
            <a href={href} style={style}>
                <img src={icon} alt="" />
                {children}
            </a>
        </li>
    );
}

function WinButton({ icon, href, children }) {
    return (
        <TaskButton icon={icon} href={href} style={{ minWidth: 240 }}>
            {children}
        </TaskButton>
    );
}

function TaskNotif({ children }) {
    const date = new Date();
    const showTime = date.getHours() + ":" + date.getMinutes();
    return (
        <li id="notif">
            {children}
            <span>{showTime}</span>
        </li>
    );
}

function Taskbar({ children }) {
    return (
        <div className="taskbar">
            <ul>{children}</ul>
        </div>
    );
}

//
function TaskBeginButton() {
    return (
        <TaskButton icon={Icons.os}>
            <strong>Begin</strong>
        </TaskButton>
    );
}

export { Taskbar, TaskBeginButton, TaskButton, WinButton, TaskNotif };
