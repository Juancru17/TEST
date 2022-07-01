import React from 'react'
import './App.css';

const Card = (props) => {
    const employees = [

        {Id:1,Name:'Persona 1',Age:29 ,Skills: [
        "Programador front-end",
        "Diseñador",
        "Gestor"
            ]},
        {Id:2,Name:'Persona 2',Age:29 ,Skills: [
        "Programador back-end",
        "DBA",
        "Gestor"
            ]},
      
    ];
  return (
    <div><div className="card">
    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:'100%'}}/>
      <div className="container">
        <h4><b>{employees.Name}</b></h4>
        <h4><b>{props.Age}</b></h4>
        <h4><b>{props.Skills}</b></h4>
        <p>Architect & Engineer</p>
      </div>
  </div></div>
  
  )
  
}

export default Card