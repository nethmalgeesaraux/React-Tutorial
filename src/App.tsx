import Alert from "./component/Alert";
import ListGroup from "./component/ListGroup";

function App() {
let items = ["nethmal", "malaka", "shan", "dilshan"];
const onSelectItem = (item: string) => console.log(item);

  return <div><ListGroup items={items} heading="List of names(Cities)"onSelectItem={onSelectItem}/>
  <hr></hr>
  <hr></hr>
  <Alert>
    Hello <span>World</span>
  </Alert>
  </div>
}

export default App;