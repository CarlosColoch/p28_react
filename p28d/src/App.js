import './App.css'
import ListaFiltrada from './components/FilteredList';

const App = () => {
  const elementos = [
    {nombre: "Juan", edad: 35},
    {nombre: "Carlos", edad: 61},
    {nombre: "Pedro", edad: 30},
    {nombre: "Manuel", edad: 28},
    {nombre: "Ramón", edad: 35},
    {nombre: "David", edad: 31},
    {nombre: "Miguel", edad: 35},
    {nombre: "Eduardo", edad: 61},
    {nombre: "Gerardo", edad: 30},
    {nombre: "Rene", edad: 30},
    {nombre: "Tomas", edad: 30},
    {nombre: "Eva", edad: 35},
    {nombre: "Laura", edad: 30},
  ];
  return (
    <div className='midiv'>
      <ListaFiltrada elementos ={elementos} />
    </div>
  );
};

export default App;
