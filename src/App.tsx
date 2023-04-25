import './App.css'
import {User} from "./user.ts";

function App() {
  const user = new User("John", 27);
  const name = user.name;

  return (
    <>
      <p>Name: {name}</p>
    </>
  )
}

export default App
