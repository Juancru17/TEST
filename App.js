import React from 'react';
import './App.css';

function RenderingArrayOfObjects() {
  const data = [
    

      {"Id":"1",
      "Name":"Persona 1",
      "Age": "29" ,
      "Skills": [
        "Programador front-end ",
        "Diseñador ",
        "Gestor "
          ]
      },
          
      {"Id":"2",
      "Name":"Persona 2",
      "Age": "29" ,
      "Skills": [
      "Programador back-end ",
      "DBA ",
      "Gestor "
          ]
      }
    
  
  ]
  const tableRows=data.map(
    (element)=>{
        return( 
            
          <tr>
            <td>{element.Id}</td>
            <td>{element.Name}</td>
            <td>{element.Age}</td>
            <td>{element.Skills}</td>
          </tr>
            
        )
    }
)
return(
    <div>
        
          <thead>
            <tr>    
              <th> Id</th>
              <th> Nombre</th>
              <th>Edad</th>
              <th>Habilidades</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
          
    </div>
)
}
function App() {
return (
  <div className="App">
    <div>
      <h1 style={{ color: 'green' }}>No style for file weight/reproduction</h1>
      <h3>Rendering Array</h3>

      <br></br>
      <RenderingArrayOfObjects />
       
    </div>
  </div>
);
}

export default App;
