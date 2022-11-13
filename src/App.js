import Img from "./Images/dune.jpg";
import Img4 from "./Images/thor.jpg";
import Img2 from "./Images/endgame.jpg";
import Cards from "./Components/Cards";
function App() {
  return (
    <div className="App">
      <Cards movie="Dune" yearAndAuthor="2022, Amazon prime" images={Img} />
      <Cards
        movie="Avengers Endgame"
        yearAndAuthor="2002, Marvel studios"
        images={Img2}
      />
      <Cards movie="Thor Ragnarok" yearAndAuthor="2016, Marvel Studios" images={Img4} />
    </div>
  );
}

export default App;
