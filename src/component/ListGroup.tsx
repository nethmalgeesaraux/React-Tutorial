import { Fragment } from "react/jsx-runtime";
import './ListGroup.css';
import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {


    const [selectedIndex, setSelectedIndex] = useState(-1);
    //items = []; 
    //const handleClick = (event: React.MouseEvent<HTMLLIElement>) => console.log(event);

    return <div>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No Item Found</p>}
        <ul className="list-group">
            {items.map((item, index) => (
                <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={() => { setSelectedIndex(index); onSelectItem?.(item); }}>{item}</li>
            ))}
        </ul>

    </div>
}
export default ListGroup;