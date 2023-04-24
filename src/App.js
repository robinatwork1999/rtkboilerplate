import './App.css';
import { useAppDispatch, useAppSelector } from './redux/reduxHelper.ts';
import { initUsers } from './redux/user/userSlice'; 

function App() {
  const cakeState = useAppSelector(state=> state)
  const dispatcher = useAppDispatch();
  console.log(cakeState)
  return (
    <div className="App">
      <button onClick={()=> dispatcher(initUsers())}>Fetch Users</button>
    </div>
  );
}

export default App;
