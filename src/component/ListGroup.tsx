import { Fragment } from "react/jsx-runtime";
import './ListGroup.css';
import { useState } from "react";

 interface Props {
        items: string[];
        heading: string;
    }
function ListGroup({items, heading}: Props) {

    
    const[selectedIndex, setSelectedIndex] = useState(-1);
    //items = []; 
    
    //const handleClick = (event: React.MouseEvent<HTMLLIElement>) => console.log(event);
        
    return <div>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No Item Found</p>}
        <ul className="list-group">
            {items.map((items,index)=> (
                <li className={selectedIndex === index? "list-group-item active": "list-group-item"} key={items} onClick={()=> setSelectedIndex(index)}>{items}</li>
            ))}
        </ul>
       
    </div>
}
export default ListGroup;