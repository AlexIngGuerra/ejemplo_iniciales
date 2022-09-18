const API = 'http://127.0.0.1:5000/select';


export const getListUsuarios = async() => {
    
    const res = await fetch(API);
  
    const data = await res.json();
  
    return data;
  
}
