import { useContext } from 'react'
import { ContatosContext } from '../context/ContatosContext'


export default function Home(){
    const {meusContatos} = useContext(ContatosContext) 
    return(
        <>
        <h2>Meus Contatos</h2>
        <p>Página de contatos</p>
        <ul>
            {meusContatos.map((contato, index) => 
            <li id={index}>{contato.nome} - {contato.telefone}</li>)}
        </ul>
        

        </>
    )
}