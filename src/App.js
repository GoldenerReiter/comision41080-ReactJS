import NavBar from './jsmodules/NavBar/NavBar';
import ItemList from './jsmodules/ItemList/itemList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemList text="Hola mundo" />
      </header>
    </div>
  );
}

export default App;
