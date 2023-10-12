import './App.css';


const Person = (props) => {
  return (
    <>
    <p> FirstName :{props.firstName}  LastName: {props.lastName} </p>
    </>
  );
}

const App = () => {
  return (
    <div className="App">
      <Person firstName="Ahsan" lastName="Khan" />
      <Person firstName="Ali" lastName="la" />
      <Person firstName="Ahmad" lastName="elahi" />
    </div>
  );
}

export default App;
