import {createContext, useState} from 'react'

export const miContexto = createContext()

function CustomContextProvider({children}) {
    const [itemsAgregados, setItemsAgregados] = useState(0)
    const [contador, setContador] = useState(0)
    const [state, setState] = useState(0)
    const onAdd = () => {
        setItemsAgregados(itemsAgregados + contador)
        setContador(0)
        setState(0)
       

    };

    const onRemove = () => {
        setItemsAgregados(contador)
    };

    const value = {
        setItemsAgregados,
        itemsAgregados,
        onAdd,
        onRemove,
        contador,
        setContador,
        state,
        setState,
    }
    return <miContexto.Provider value={value}>{ children }</miContexto.Provider>
}

export default CustomContextProvider;