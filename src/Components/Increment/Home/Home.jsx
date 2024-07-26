// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Home = () => {
//     let gettingApi = "http://localhost:3333/users";
//     let [data,setData] = useState([]);
//     let fetchingData = async () => {
//         let fetchingApi = await axios.get(gettingApi);
//         setData(fetchingApi.data)
//     }
//     useEffect(() => {
//         fetchingData();
//     },[])

//     useEffect(() => {
//         // console.log("1111", data);
//     }, [data]); 
// return(
//     <>
// <div className="navbar">
// home
// </div>
//     </>
// )
// }
// export default Home;




// // import React from 'react'

// // const Home = () => {
// //   return (
// //     <div>Home</div>
// //   )
// // }

// // export default Home


// import React, { useState } from 'react';
// // import ReactDOM from 'react-dom';

// const Home = () => {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const handleStartDateChange = (event) => {
//     const newStartDate = event.target.value;
//     setStartDate(newStartDate);
//     if (endDate && new Date(newStartDate) >= new Date(endDate)) {
//       setEndDate(null);
//     }
//   };

//   const handleEndDateChange = (event) => {
//     setEndDate(event.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="start-date">Start Date</label>
//         <input
//           type="date"
//           id="start-date"
//           value={startDate || ''}
//           onChange={handleStartDateChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="end-date">End Date</label>
//         <input
//           type="date"
//           id="end-date"
//           value={endDate || ''}
//           onChange={handleEndDateChange}
//           min={startDate || ''}
//         />
//       </div>
//     </div>
//   );
// };

// export default Home
// // ReactDOM.render(<DatePickerExample />, document.getElementById('root'));
