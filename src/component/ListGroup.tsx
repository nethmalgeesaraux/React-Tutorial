import { Fragment } from "react/jsx-runtime";
import './ListGroup.css';
function ListGroup() {

    let items = ["nethmal", "malaka", "shan", "dilshan"];
    //items = []; 
    
    const handleClick = (event: React.MouseEvent<HTMLLIElement>) => console.log(event);
        
    return <div>
        <h1>List Group</h1>
        {items.length === 0 && <p>No Item Found</p>}
        <ul className="list-group">
            {items.map((items)=> (
                <li className="list-group-item" key={items} onClick={handleClick}>{items}</li>
            ))}
        </ul>
       
    </div>
}
export default ListGroup;