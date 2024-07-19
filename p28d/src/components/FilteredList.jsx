import { useState } from 'react';

const SearchBox = ({elementos}) => {
    const [filtroEDAD, SetFiltroEDAD] = useState("");

    const handleInput = (e) => {
        SetFiltroEDAD(e.target.value);
    };
    const elementosFiltrados = elementos.filter(
        (elemento) => elemento.edad.toString().includes(filtroEDAD)
)    
    return (
        <div>
            <h2>Lista Fitrada por edad </h2>
            <label htmlFor="">Filtrar por edad: </label>
            <input type="text" value={filtroEDAD} onChange={handleInput} />
        <ul>
            {
                elementosFiltrados.map(({ id, nombre, edad }) => (
                    <li key={id}>
                        <p>Nombre: {nombre}</p>
                        <p>Edad: {edad}</p>
                    </li>
                ))
            }
        </ul>
        </div>
    );
};

export default SearchBox;