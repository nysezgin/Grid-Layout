import "./reset.css"
import './App.css';
import userListData from "./userListData"
import SingleUser from "./SingleUser"

function App() {
  return (
    <article className="App">
      {userListData.map((user)=> <SingleUser key={user.id} {...user} /> )}
    </article>
  );
}

export default App;
