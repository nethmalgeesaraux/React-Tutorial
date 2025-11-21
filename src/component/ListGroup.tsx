import { Fragment } from "react/jsx-runtime";
import './ListGroup.css';
function ListGroup() {

    let items = ["nethmal", "malaka", "shan", "dilshan"];
    items = []; 
    
    
        
    return <div>
        <h1>List Group</h1>
        {items.length === 0 && <p>No Item Found</p>}
        <ul className="list-group">
            {items.map((items)=> (
                <li key={items}>{items}</li>
            ))}
        </ul>
       
    </div>
}
export default ListGroup;