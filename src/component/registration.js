import React, { useState } from 'react';
import Routing from '../component/menu-routes/routing';

function RegistrationComponent () {
    const [formData,setFormData] = useState({username:"",password:""});

    const handleformDetails=(event) => {
       const {name,value} = event.target;
       setFormData((prevFormData)=> ({...prevFormData,[name]:value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
       // if(formData.username || formData.password) {
         
        //}
        alert(`Username:${formData.username},Password:${formData.password}`);
        return <Routing></Routing>;
    };

return (
    <form onSubmit={handleSubmit}>
        <label>
            Username: 
            <input type="text" name="username" value={formData.username} onChange={handleformDetails}></input>
        </label><br/>        
        <label>
            Password: 
            <input type="text" name="password" value={formData.password} onChange={handleformDetails}/>
        </label><br/>
        <button type="submit" value="submit">Submit</button>
    </form>
    
);
}

export default RegistrationComponent;