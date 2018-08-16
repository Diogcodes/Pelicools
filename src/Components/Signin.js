import React, {Component} from 'react'
import Navbar from '../Components/Navbar'
import AddCalif from '../Components/AddCalif'
import '../Components/paraForm.css'

class Signin extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin:false,
      isUser : false,
    }
  }




render(){
    return(
        <div>
    <Navbar/>
    <center><form onSubmit={this.onSubmit} className="formpeque">
  <div className="form-group">
    <label for="exampleInputName1">Nombre</label>
    <input type="name" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Nombre" onChange={this.onInputChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputLastName1">Apellido</label>
    <input type="lastname" className="form-control" id="exampleInputLastName1" aria-describedby="emailHelp" placeholder="Apellido" onChange={this.onInputChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Correo Electronico</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo Electronico" onChange={this.onInputChange}/>
    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu correo con alguien mas.</small>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> </center>
    </div>
    );
}}

export default Signin