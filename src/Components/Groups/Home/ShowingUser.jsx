import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import "../../Groups/Home/ShowingUser.css"

const ShowingUser = () => {
    const location = useLocation();
    const { findingNamesFromTheApi } = location.state || {};

  return (
    <>
    <div> USER DEATAILS</div>
    <div>
      <table className='table' style={{border: "1px solid"}} >
        <thead style={{border: "1px solid"}}>
        <tr style={{border: "1px solid"}}>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>password</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>{findingNamesFromTheApi.id}</td>
            <td>{findingNamesFromTheApi.username}</td>
            <td>{findingNamesFromTheApi.email}</td>
            <td>{findingNamesFromTheApi.password}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default ShowingUser