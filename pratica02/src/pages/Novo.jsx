import { useForm } from 'react-hook-form';
import { useContext } from 'react'
import { ContatosContext } from '../context/ContatosContext';
import { useNavigate } from 'react-router-dom'


export default function Novo(){

    const {incluirContato} = useContext(ContatosContext)
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}} = useForm()

	function onSubmit(data){
        incluirContato(data)
        navigate('/')

    }
    
    return(
        <>
        <h2>Contatos</h2>
        <p>Inserir novo contato</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome</label>
            <input {...register('nome', {required: 'Campo obrigatório'})} />
            {errors.nome && <p>{errors.nome.message}</p>}
            <label>Telefone</label>
            <input {...register('telefone', {required: 'Campo obrigatório'})}/>
            {errors.telefone && <p>{errors.telefone.message}</p>}
            <button>Enviar</button>
        </form>
        </>
            
    )
}