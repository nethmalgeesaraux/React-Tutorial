import ListGroup from "./component/ListGroup";

function App() {
let items = ["nethmal", "malaka", "shan", "dilshan"];
const onSelectItem = (item: string) => console.log(item);

  return <div><ListGroup items={items} heading="List of names(Cities)"onSelectItem={onSelectItem}/></div>
}

export default App;