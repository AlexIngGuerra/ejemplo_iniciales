import {useForm} from "react-hook-form";

export const Editar = ({user}) => {
    //hook
    const {register,handleSubmit} = useForm();


    const enviarForm = (data) => {

        fetch('http://127.0.0.1:5000/update',{
        method: 'PUT',
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
                    readOnly
                    value={user.id}
                    {...register('id')}
                />
                <label className="form-label">Nombre:</label>
                <input 
                    type="text" 
                    className="form-control"
                    defaultValue={user.nombre}
                    {...register('nombre')}
                />
                <label className="form-label">Edad:</label>
                <input 
                    type="text" 
                    className="form-control"
                    defaultValue={user.edad}
                    {...register('edad')}
                />
                <label className="form-label">Genero:</label>
                <input 
                    type="text" 
                    className="form-control"
                    defaultValue={user.genero}
                    {...register('genero')}
                />
                <label className="form-label">Telefono:</label>
                <input 
                    type="text" 
                    className="form-control"
                    defaultValue={user.tel}
                    {...register('tel')}
                />
                <button type="submit" className="btn btn-success mt-2">Editar</button>
            </div>
        </form>
        </>
    )
}