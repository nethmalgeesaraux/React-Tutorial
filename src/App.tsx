import { useState } from "react";
import Alert from "./component/Alert";
import Button from "./component/Button";
import ListGroup from "./component/ListGroup";

function App() {
  let items = ["nethmal", "malaka", "shan", "dilshan"];
  const onSelectItem = (item: string) => console.log(item);
  const [alertvisible, setAlertVisible]=useState(false);

  return <div><ListGroup items={items} heading="List of names(Cities)" onSelectItem={onSelectItem} />
    <hr></hr>
    <hr></hr>
    {alertvisible &&<Alert onClose={() => setAlertVisible(false)}>This is an alert message!</Alert>}
    <hr></hr>
    <hr></hr>
    <Button onClick={() => setAlertVisible(true)} color="primary" >
      Click Me
    </Button>
  </div>
}

export default App;