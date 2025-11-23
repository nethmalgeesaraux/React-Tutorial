import Alert from "./component/Alert";
import Button from "./component/Button";
import ListGroup from "./component/ListGroup";

function App() {
  let items = ["nethmal", "malaka", "shan", "dilshan"];
  const onSelectItem = (item: string) => console.log(item);

  return <div><ListGroup items={items} heading="List of names(Cities)" onSelectItem={onSelectItem} />
    <hr></hr>
    <hr></hr>
    <Alert>
      Hello <span>World</span>
    </Alert>
    <hr></hr>
    <hr></hr>
    <Button onClick={() => console.log("Clicked")} color="primary" >
      Click Me
    </Button>
  </div>
}

export default App;