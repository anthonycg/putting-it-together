import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="App">
      <PersonCard
        lastName={"Gibson"}
        firstName={"Anthony"}
        age={27}
        hair={"black"}
      />
      <PersonCard
        lastName={"Gibson"}
        firstName={"Arkeem"}
        age={29}
        hair={"black"}
      />
      <PersonCard 
      lastName={"Woodson"} 
      firstName={"Arkeem"} 
      age={27} 
      hair={"black"} />
      <PersonCard
        lastName={"Carmichael"}
        firstName={"Frank"}
        age={71}
        hair={"gray"}
      />
    </div>
      </header>
    </div>
  );
}

export default App;
