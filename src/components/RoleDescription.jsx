import "./RoleDescription.css";
import Tags from "./Tags";

function RoleDescription({ description, tags = [], items = [] }) {

    return (<div className={"role-description"}>
        <Tags tags={tags} />
        {/*<span>{description}</span>*/}
        <ul className={"role-description-points"}>
            {items.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
    </div>);
}

export default RoleDescription;