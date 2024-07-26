
//     // const api  = "http://localhost:3333/users";
//     // const [fetchApi,setFetchApi] = useState([])
//     // let fetchingLocalApi = async () => {
//     //    let getApi = await axios.get(api);
//     //    console.log("bala",getApi.data);
//     // }
//     // fetchingLocalApi();

// // const Home = () => {
// //     const [selectedDate, setSelectedDate] = useState(''); // Selected date
// //     const [tempDate, setTempDate] = useState(''); // Temporary date while picker is open
// //     const dateInputRef = useRef(null); // Ref to control date picker focus
  
// //     const handleDateChange = (event) => {
// //       setTempDate(event.target.value);
// //     };
  
// //     const handleFocus = () => {
// //       if (!tempDate && selectedDate) {
// //         setTempDate(selectedDate);
// //       }
// //     };
  
// //     const handleBlur = () => {
// //       if (tempDate) {
// //         setSelectedDate(tempDate);
// //       }
// //     };
  
// //   return (
// //     <div>
// //       <input
// //         type="date"
// //         value={tempDate}
// //         onChange={handleDateChange}
// //         onFocus={handleFocus}
// //         onBlur={handleBlur}
// //         ref={dateInputRef}
// //       />
// //       {selectedDate && <p>Selected Date: {selectedDate}</p>}
// //       <button onClick={() => dateInputRef.current.blur()}>Done</button>
// //       <button onClick={() => dateInputRef.current.blur()}>Cancel</button>
// //     </div>
// //   )
// // }

// // export default Home;




// import React, { useState, useRef } from "react";
// import { IonContent, IonDatetime } from "@ionic/react";

// const Home = () => {
//   const [selectedDate, setSelectedDate] = useState(''); // Selected date
//   const [tempDate, setTempDate] = useState(''); // Temporary date while picker is open
//   const dateInputRef = useRef(null); // Ref to control date picker focus

//   const handleDateChange = (event) => {
//     setTempDate(event.target.value);
//   };

//   const handleFocus = () => {
//     if (!tempDate && selectedDate) {
//       setTempDate(selectedDate);
//     }
//   };

//   const handleBlur = () => {
//     if (tempDate) {
//       setSelectedDate(tempDate);
//     }
//   };
//   return (
//     <div>
//     <input
//       type="date"
//       value={tempDate}
//       onChange={handleDateChange}
//       onFocus={handleFocus}
//       onBlur={handleBlur}
//       ref={dateInputRef}
//     />
//     {selectedDate && <p>Selected Date: {selectedDate}</p>}
//     <button onClick={() => dateInputRef.current.blur()}>Done</button>
//     <button onClick={() => dateInputRef.current.blur()}>Cancel</button>
//   </div>
//   );
// };

// export default Home;








// // import React, { useState } from 'react';

// // const MyComponent = () => {
// //   const [selectedDate, setSelectedDate] = useState('2023-05-18'); // Default selected date
// //   const [tempDate, setTempDate] = useState(selectedDate); // Temporary date while picker is open
// //   const [isOpen, setIsOpen] = useState(false);

// //   const handleDateChange = (event) => {
// //     setTempDate(event.target.value);
// //   };

// //   const handleBlur = () => {
// //     setSelectedDate(tempDate);
// //     setIsOpen(false);
// //   };

// //   const handleCancel = () => {
// //     setTempDate(selectedDate);
// //     setIsOpen(false);
// //   };

// //   const handleFocus = () => {
// //     setTempDate(selectedDate); // Ensure the temp date is reset to the selected date
// //     setIsOpen(true);
// //   };

// //   return (
// //     <div>
// //       <input
// //         type="date"
// //         value={tempDate}
// //         onChange={handleDateChange}
// //         onBlur={handleBlur}
// //         onFocus={handleFocus}
// //         style={{ display: isOpen ? 'block' : 'none' }}
// //       />
// //       {!isOpen && (
// //         <button onClick={() => setIsOpen(true)}>
// //           Select Date
// //         </button>
// //       )}
// //       {isOpen && (
// //         <button onClick={handleCancel}>
// //           Cancel
// //         </button>
// //       )}
// //     </div>
// //   );
// // };

// // export default MyComponent;





// <IonModal keepContentsMounted={true}>
// <IonDatetime
// // value={startTimestamp}
//   ref={dateTimeref}
//   id="from_date_modal"
//   presentation="date"
//   //onIonBlur={handleBlur}
//   // onIonFocus={handleFocus}
//   // onIonCancel={handleCanel}
//   showDefaultButtons={true}
//   min={`${ninetyDaysAgo.toISOString()}`}
//   max={`${maxBlockDate()}`}
//   isDateEnabled={isStartDateBlock}
//   onIonChange={(e) => fromTimestampOnChange(e)}
// ></IonDatetime>
// </IonModal>



// const fromTimestampOnChange = (e: any) => {
//   setTempDate(e.detail.value)
//  if (e.detail.value && tempDate) setStopTimestamp(startOfDay(new Date(e.detail.value)).getTime().toString())
//  else setStopTimestamp(startOfDay(new Date()).getTime().toString());
// };


// const [startTimestamp, setStartTimestamp] = useState<any>(
//   endOfDay(new Date()).getTime().toString()
// );



