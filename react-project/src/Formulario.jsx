import {useForm} from "react-hook-form";

export const Formulario = () => {
    //hook
    const {register,handleSubmit} = useForm();


    const enviarForm = (data) => {
        console.log(data)
        fetch('http://127.0.0.1:5000/insert',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:',data);
        })
        .catch((error) => {
            console.log('Error:',error);
        })


    }
    return (
        <>
        <form onSubmit={handleSubmit(enviarForm)}>
            <div className="mb-3">
                <label className="form-label">Id:</label>
                <input 
                    type="text" 
                    className="form-control"
                    {...register('id')}
                />
                <label className="form-label">Nombre:</label>
                <input 
                    type="text" 
                    className="form-control"
                    {...register('nombre')}
                />
                <label className="form-label">Edad:</label>
                <input 
                    type="text" 
                    className="form-control"
                    {...register('edad')}
                />
                <label className="form-label">Genero:</label>
                <input 
                    type="text" 
                    className="form-control"
                    {...register('genero')}
                />
                <label className="form-label">Telefono:</label>
                <input 
                    type="text" 
                    className="form-control"
                    {...register('tel')}
                />
                <button type="submit" className="btn btn-primary mt-2">Guardar</button>
            </div>
        </form>
        </>
    )
}