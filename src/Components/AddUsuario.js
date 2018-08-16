import React, {Component} from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import '../Components/paraForm.css'


class AddUsuario extends Component{

  constructor(props){
    super(props);
    this.state = {
      nombre:"",
      apellidos:"",
      email:"",
      fechadenacimiento:""
    }

}

onSubmit = (e) => {
  e.preventDefault()
  let json = {
      nombre:this.state.nombre,
      apellidos:this.state.apellido,
      email:this.state.email,
      fechadenacimiento:this.state.fechadenacimiento
  }
  //cambiar link 
  axios.post('https://pelicools.herokuapp.com/api/v1/usuarios/create',json).then(alumno=>{
      console.log(alumno)
      alert('usuario guardado')}
  ).catch(err =>{
      console.log(err)
      alert('Lo siento existe un problema')})
  }




onInputChange = (e) =>{

  if(e.target.name === 'nombre'){
      this.setState({
          nombre: e.target.value
      })
  }else if(e.target.name === 'apellido'){
      this.setState({
          apellidos: e.target.value
      })
  }else if(e.target.name === 'email'){
          email:e.target.value
  }else{
      this.setState({
           fechadenacimiento: e.target.value
      })
  }

}


render(){
    return(
        <div>
    <Navbar/>
   <center> <form onSubmit={this.onSubmit} className="formpeque">
  <div className="form-group">
    <label for="exampleInputName1">Nombre</label>
    <input type="name" name="nombre" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Nombre"onChange={this.onInputChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputLastName1">Apellido</label>
    <input type="lastname" name="apellido" className="form-control" id="exampleInputLastName1" aria-describedby="emailHelp" placeholder="Apellido"onChange={this.onInputChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Correo Electronico</label>
    <input type="email" name="email"className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo Electronico"onChange={this.onInputChange}/>
    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu correo con alguien mas.</small>
  </div>
  
  <div className="well"> 
      <div className="form-group">
      <label>Fecha de Nacimiento</label>
      <input type="date" name="fechanacimiento"className="form-control" id="exampleInputDOB1" placeholder="Date of Birth"onChange={this.onInputChange}/>
    </div>

</div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form></center>
    </div>
    );
}}

export default AddUsuario