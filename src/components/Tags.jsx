import Lozenge from "./Lozenge";
import "./Tags.css";

function Tags({tags = []}) {
    return <span className={"tags"}>
        {tags.map(tag => <Lozenge key={tag}>{tag}</Lozenge>)}
    </span>
}

export default Tags;