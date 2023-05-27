import { useForm } from 'react-hook-form';


export default function Novo(){
    const {register, handleSubmit, formState:{errors}} = useForm()

	function onSubmit(data){}
    
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