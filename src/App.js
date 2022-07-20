import NavBar from './jsmodules/NavBar/NavBar';
import ItemList from './jsmodules/ItemList/itemList';
import Counter from './jsmodules/Counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemList text="Hola mundo" />
        <Counter stock={5} initial={0} />
      </header>
    </div>
  );
}

export default App;
