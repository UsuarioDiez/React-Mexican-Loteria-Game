import GameInitializer from "./Game/GameInitializer";

function App() {
  const newGame=true;
  
  if (newGame===true){
    return (
      <GameInitializer/>
    );
  }else{
    return(
      <h1>Bienvenido prro!</h1>
    )
  }

}

export default App;
