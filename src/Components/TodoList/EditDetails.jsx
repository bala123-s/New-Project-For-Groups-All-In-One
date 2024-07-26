import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const EditDetails = () => {
    const location = useLocation();
    const { firstName: initialFirstName, email: initialEmail, number: initialnumber } = location?.state;
    const [editValues, setEditValues] = useState({
        firstName: initialFirstName,
        email: initialEmail,
        number: initialnumber
    });

    let inputChange = (e) => {
        const { name, value } = e.target;
        setEditValues({
            ...editValues,
            [name]: value
        })
    }

    let navigate = useNavigate();
    const handleSubmitToTodolist = (e) => {
        e.preventDefault();
        setEditValues(prevState => ({
            ...prevState,
            firstName : editValues.firstName
          }));
        navigate("/", { state: editValues })
    }

    return (
        <div>
            <div className='main-heading'>
                Updating-Input-Values
            </div>
            <div className='form'>
                <form onSubmit={handleSubmitToTodolist}>
                    <input type="text" onChange={inputChange} name="firstName" value={editValues.firstName} placeholder='firstname' /> &nbsp;
                    <input type="email" name="email" onChange={inputChange} value={editValues.email} placeholder='email' /> &nbsp;
                    <input type="email" name="number" onChange={inputChange} value={editValues.number} placeholder='number' /> &nbsp;
                    <div> <input type="submit" value="submit" /></div>
                </form>
            </div>
        </div>
    )
}

export default EditDetails;















// import React from "react";

// const EditDetails = () => {

//     return(
//         <div>
//             <div className='form'>
//                 <form>
//                     <input type="text"  name="firstName" placeholder='firstname' /> &nbsp;
//                     <input type="email" name="email"  placeholder='email' /> &nbsp;
//                     <input type="datetime-local" name="datetime"  placeholder='datetime' /> &nbsp;
//                      <div> <input type="submit" value="submit" /></div>
//                 </form>
//             </div>
//         </div>
//     )

// }

// export default EditDetails;