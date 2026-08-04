import './App.css';
import Todo from './components/Todo';
import AddToDO from './components/Todo_Components/AddToDo';

import { Provider } from 'react-redux';
import {store} from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <AddToDO />
      <Todo />
    </Provider>
  );
}

export default App;
