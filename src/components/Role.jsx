import "./Role.css";

export default function({ from, to, children }) {

    return (
        <span className={"role-container"}>
           <span className={"role-contents"}>{children}</span>
           <span className={"role-date"}>{from} &ndash; {to}</span>
        </span>
    );

}