import Pokedex from "./components/Pokedex";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <Pokedex />
    </DataProvider>
  );
}

export default App;
