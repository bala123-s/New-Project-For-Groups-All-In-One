import React, { useState, useEffect } from 'react';
import "../TodoList/TodoList.css";
import EditDetails from './EditDetails';
import { useNavigate } from 'react-router-dom';


const TodoList = () => {
    const [clickedNumber, setClickedNumber] = useState('');

    let [storevalues, setStorevalues] = useState([]);
    // const [isClicked, setIsClicked] = useState(false);
    let [inputValues, setInputValues] = useState({
        id: '',
        firstName: '',
        email: '',
        numbers: '',
        datetime: '',
    })


    // let masknumbers = () => {}
    // let hideNumber = storevalues.numbers;
    // let hideNumberLength = hideNumber.slice(-4);
    // let maskedNumbers = "*".repeat(hideNumber.length - 4) + hideNumberLength;



    useEffect(() => {
        const storedValues = localStorage.getItem("values");
        if (storedValues) {
            setStorevalues(JSON.parse(storedValues));
        }
    }, []);

    let inputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        })
    }


    // A  to Z starting = 65 to 90
    // a  to z starting = 97 to 122
    // 0 to 9 starting  = 48 to  57
    let numberFunction = () => {
        let numbersRegex = /^[0-9]*$/;
        if (!numbersRegex.test(inputValues.numbers)) {
            alert("Please enter numbers only in the 'Numbers' field.");
        }
    }

    let randomNumber = () => {
        let max = 1000;
        let min = 9999;
        return Math.floor(Math.random() * max) + min;
    }

    let hideSubmitBUtton = inputValues.firstName.length > 0 && inputValues.email.length > 0;

    // const maskNumber = (num) => {
    //     const maskedNumbers = "*".repeat(num.length - 4) + num.slice(-4);
    //     return maskedNumbers;
    // };

    let maskedNumberFunction = () => {
    let hideNumber = inputValues.numbers;
    let hideNumberLength = hideNumber.slice(-4);
    let maskedNumbers = "*".repeat(hideNumber.length - 4) + hideNumberLength;
    return maskedNumbers;
    }
    //one secnario
    // let submitHandler = (e) => {
    //     e.preventDefault();
    //     if(inputValues.firstName.length === 0 || inputValues.email.length === 0 || inputValues.dateofBrith.length === 0){
    //         alert("eeeee");
    //     }else{
    //         setStorevalues((prev)=>[...prev,inputValues]);
    //     }
    // }

    //second scenario
    let submitHandler = (e) => {
        e.preventDefault();
        let randomId = randomNumber();

        // let sameNumber = storevalues.filter((item) => item.numbers === inputValues.numbers);
        // if(sameNumber){
        //     alert("vdfgddsdfafsd")
        // }
       let hidingNumebrs =  maskedNumberFunction();
    //    let hidingNumberCase = storevalues.some((item) => item.numbers === hidingNumebrs);
        switch (true) {
            case inputValues.firstName.length <= 6:
                alert("firstname should be greater than 6");
                break;
            case storevalues.some((item) => item.firstName === inputValues.firstName):
                alert("name already exists change the name");
                break;
            case storevalues.some((item) => item.email === inputValues.email):
                alert("email already exists change the email");
                break;
            case inputValues.numbers.length !== 10:
                alert("please enter only 10 numbers");
                break;
            case hidingNumebrs:
                alert("number already exists change the number");
                break;
            default:
                let updatedStorevalues = [...storevalues, { ...inputValues, id: randomId, numbers : hidingNumebrs}];
                setStorevalues(updatedStorevalues);
                localStorage.setItem("values", JSON.stringify(updatedStorevalues));
                // let storingIntoLocalStorage = localStorage.setItem("values", JSON.stringify(setStorevalues((prev) => [...prev, { ...inputValues, id: randomId }])));
                setInputValues({
                    id: '',
                    firstName: '',
                    email: '',
                    numbers: '',
                    datetime: ''
                });
        }
        // let dupalicateEmailAndName = storevalues.filter((emailcheck) => emailcheck.firstName === inputValues.firstName || emailcheck.email === inputValues.email || emailcheck.numbers === inputValues.numbers);
        // if (dupalicateEmailAndName.length > 0) {
        //     alert("change name , email and number");
        //     return;
        // }

    };

    let deleteButton = (id) => {
        let deletingId = storevalues.filter((ids) => ids.id !== id);
        setStorevalues(deletingId);
        localStorage.setItem("values", JSON.stringify(deletingId));
    }

    // this is for showing alert msgs
    // let showDetails = (details) => {
    //     if(details){
    //         let {id,email,firstName} = details;
    //         const messege = `
    //         details : 
    //         id : ${id},
    //         email : ${email},
    //         firstname : ${firstName}
    //         `;
    //         window.alert(messege);
    //     }

    // }

    // const navigate = useNavigate();

    // const handleEditClick = (values) => {
    //     setIsClicked(true);
    //     console.log("dsadsa", values);
    //     navigate('/edit', { state: values });
    // };

    const showTheNumber = (num) => {
        setClickedNumber(num);
        // let numberstrue = inputValues.numbers;
        // console.log('nummmm', numberstrue);
    //    let showing = setInputValues(inputValues.map((mask) => mask.num === num));
    //    console.log("asdferfre",showing);
    }

    let numberstrue = storevalues.numbers;
    console.log('nummmm', numberstrue);

    return (
        <div>
            <div className='main-heading'>
                Todo-List
            </div>
            <div className='form'>
                <form onSubmit={submitHandler}>
                    <input type="text" onChange={inputChange} name="firstName" value={inputValues.firstName} placeholder='firstname' /> &nbsp;
                    <input type="email" onChange={inputChange} name="email" value={inputValues.email} placeholder='email' /> &nbsp;
                    <input type="text" onChange={inputChange} onBlur={numberFunction} name="numbers" value={inputValues.numbers} placeholder='numbers' /> &nbsp;
                    <input type="datetime-local" onChange={inputChange} name="datetime" value={inputValues.datetime} placeholder='datetime' /> &nbsp;
                    <div> {hideSubmitBUtton ? <div> <input type="submit" value="submit" /></div> : <div> <input type="button" value="don't click" /></div>} </div>
                </form>
            </div>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Numbers</th>
                            <th>Date&Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            storevalues.map((vall) => (
                                <>
                                    <tr>
                                        <td>{vall.id}</td>
                                        <td>{vall.firstName}</td>
                                        <td>{vall.email}</td>
                                        {/* <td onClick={() => showTheNumber(vall.numbers)} className='showTheNumber'></td> */}
                                        <td onClick={() =>showTheNumber(vall.numbers)} className='showTheNumber'>{vall.numbers}</td>
                                        <td>{vall.datetime}</td>  <h6 className='edited'>edited</h6>
                                        <td><button>Edit</button> &nbsp;
                                            {/* {isClicked && <EditDetails storeValues={storevalues} />} */}
                                            <button onClick={() => { deleteButton(vall.id) }}>delete</button></td>
                                    </tr>
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default TodoList;



// import React, { useState, useEffect } from 'react';
// import "../TodoList/TodoList.css";
// import EditDetails from './EditDetails';
// import { useNavigate } from 'react-router-dom';

// const TodoList = () => {
//     const [clickedNumber, setClickedNumber] = useState('');
//     const [storevalues, setStorevalues] = useState([]);
//     const [inputValues, setInputValues] = useState({
//         id: '',
//         firstName: '',
//         email: '',
//         numbers: '',
//         datetime: '',
//     });

//     useEffect(() => {
//         const storedValues = localStorage.getItem("values");
//         if (storedValues) {
//             setStorevalues(JSON.parse(storedValues));
//         }
//     }, []);

//     const inputChange = (e) => {
//         const { name, value } = e.target;
//         setInputValues({
//             ...inputValues,
//             [name]: value,
//         });
//     };

//     const numberFunction = () => {
//         let numbersRegex = /^[0-9]*$/;
//         if (!numbersRegex.test(inputValues.numbers)) {
//             alert("Please enter numbers only in the 'Numbers' field.");
//         }
//     };

//     const randomNumber = () => {
//         let max = 1000;
//         let min = 9999;
//         return Math.floor(Math.random() * max) + min;
//     };

//     const maskNumber = (num) => {
//         const maskedNumbers = "*".repeat(num.length - 4) + num.slice(-4);
//         return maskedNumbers;
//     };

//     const submitHandler = (e) => {
//         e.preventDefault();
//         let randomId = randomNumber();
//         let maskedNum = maskNumber(inputValues.numbers);
//         let updatedStorevalues = [...storevalues, { ...inputValues, id: randomId, numbers: maskedNum }];
//         setStorevalues(updatedStorevalues);
//         localStorage.setItem("values", JSON.stringify(updatedStorevalues));
//         setInputValues({
//             id: '',
//             firstName: '',
//             email: '',
//             numbers: '',
//             datetime: ''
//         });
//     };

//     const deleteButton = (id) => {
//         let deletingId = storevalues.filter((ids) => ids.id !== id);
//         setStorevalues(deletingId);
//         localStorage.setItem("values", JSON.stringify(deletingId));
//     };


//     let hideSubmitBUtton = inputValues.firstName.length > 0 && inputValues.email.length > 0;
//     const showTheNumber = (num) => {
//         setClickedNumber(num);
//         console.log("asdfesefe",clickedNumber);
//     };

//     return (
//         <div>
//             <div className='main-heading'>
//                 Todo-List
//             </div>
//             <div className='form'>
//                 <form onSubmit={submitHandler}>
//                     <input type="text" onChange={inputChange} name="firstName" value={inputValues.firstName} placeholder='firstname' /> &nbsp;
//                     <input type="email" onChange={inputChange} name="email" value={inputValues.email} placeholder='email' /> &nbsp;
//                     <input type="text" onChange={inputChange} onBlur={numberFunction} name="numbers" value={inputValues.numbers} placeholder='numbers' /> &nbsp;
//                     <input type="datetime-local" onChange={inputChange} name="datetime" value={inputValues.datetime} placeholder='datetime' /> &nbsp;
//                     <div> {hideSubmitBUtton ? <div> <input type="submit" value="submit" /></div> : <div> <input type="button" value="don't click" /></div>} </div>
//                 </form>
//             </div>
//             <div className='table'>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Numbers</th>
//                             <th>Date&Time</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             storevalues.map((vall) => (
//                                 <>
//                                     <tr key={vall.id}>
//                                         <td>{vall.id}</td>
//                                         <td>{vall.firstName}</td>
//                                         <td>{vall.email}</td>
//                                         <td onClick={() => showTheNumber(vall.numbers)} className='showTheNumber'>{clickedNumber === vall.numbers ? vall.numbers : maskNumber(vall.numbers)}</td>
//                                         <td>{vall.datetime}</td>
//                                         <td><button>Edit</button> &nbsp;
//                                             <button onClick={() => { deleteButton(vall.id) }}>delete</button></td>
//                                     </tr>
//                                 </>
//                             ))
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default TodoList;
