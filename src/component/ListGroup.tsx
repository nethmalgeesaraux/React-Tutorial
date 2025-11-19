import { Fragment } from "react/jsx-runtime";
import './ListGroup.css';
function ListGroup() {
    return <div>
        <h1 className="center-heading">List Group</h1>
        <ul className="list-group list-group-horizontal">
            <li className="list-group-item name-item">Name</li>
            <li className="list-group-item age-item">Age</li>
            <li className="list-group-item institute-item">Institute</li>
        </ul>


        <ul className="list-group list-group-horizontal-sm">
            <li className="list-group-item">Malaka</li>
            <li className="list-group-item">20</li>
            <li className="list-group-item">Icet</li>
        </ul>
        <ul className="list-group list-group-horizontal-md">
            <li className="list-group-item">Nethmal</li>
            <li className="list-group-item">20</li>
            <li className="list-group-item">Icet</li>
        </ul>
        <ul className="list-group list-group-horizontal-lg">
            <li className="list-group-item">Shan</li>
            <li className="list-group-item">23</li>
            <li className="list-group-item">Icet</li>
        </ul>

    </div>
}
export default ListGroup;