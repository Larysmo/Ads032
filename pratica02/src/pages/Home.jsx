import { useContext } from 'react'
import ContatosContext from '../context/ContatosContext'

const meusContatos =  useContext(ContatosContext) 

export default function Home(){
    return(
        <>
        <h2>Meus Contatos</h2>
        <p>Página de contatos</p>
        </>
    )
}