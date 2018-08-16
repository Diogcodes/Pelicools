import React, {Component} from 'react'
import Navbar from '../Components/Navbar'
import '../Components/paraForm.css'

class AddCalif extends Component{

render(){
    return(
        <div>
    <Navbar/>
    <center><form className="formpeque">
  <div className="form-group">
    <label for="exampleInputName1">Nombre</label>
    <input type="name" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Nombre"/>
  </div>
  <div className="form-group">
    <label for="exampleInputName1">Calificacion</label>
    <input type="number" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Nombre"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form></center>
    </div>
    );
}}

export default AddCalif