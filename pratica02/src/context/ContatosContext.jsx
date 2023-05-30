import { createContext } from 'react'
import { useState} from 'react'

export const ContatosContext = createContext({ 
    meusContatos: [ ],
    incluirContato: () => { },
    })

  
const ContatosContextProvider = (props) => {
    
    const [contatos, setContatos] = useState([])
    function incluir(contato){
        setContatos([...contatos, contato])
    }
    
    const contexto = { 
        meusContatos: contatos,
        incluirContato: incluir,
        }
        

    return (
        <ContatosContext.Provider value={contexto}>
            {props.children}
        </ContatosContext.Provider>        

    )}

    export {ContatosContextProvider}



    
