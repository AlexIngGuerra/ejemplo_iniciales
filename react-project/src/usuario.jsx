

export const Usuario = ({user, info}) => {

    const eliminarUser = () => {

        const data = {'id':user.id}

        fetch('http://127.0.0.1:5000/delete',{
        method: 'DELETE',
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
        <tr>
            <td scope="row">{user.id}</td>
            <td>{user.nombre}</td>
            <td>{user.edad}</td>
            <td>{user.genero}</td>
            <td>{user.tel}</td>
            <td>
                <button
                    className="btn btn-primary"
                    onClick={() => info({'id':user.id,'nombre':user.nombre,'edad':user.edad,'genero':user.genero,'tel':user.tel})}
                >
                Editar
                </button>
                <button
                    className="btn btn-danger m-2"
                    onClick={() => eliminarUser()}
                >
                Eliminar 
                </button>
            </td>
        </tr>
        </>
    )
}