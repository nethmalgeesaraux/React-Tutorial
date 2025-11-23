import ListGroup from "./component/ListGroup";

function App() {
let items = ["nethmal", "malaka", "shan", "dilshan"];

  return <div><ListGroup items={items} heading="List of names(Cities)"/></div>
}

export default App;