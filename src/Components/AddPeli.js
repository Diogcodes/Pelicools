import React, {Component} from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'

class AddPeli extends Component{

  constructor(props){
    super(props);
    this.state = {
      nombre:"",
      duracion:"",
      clasificacion:"",
      genero:"",
      sinopsis:"",
      premios:"",
      anio:"",
      portada:"",
      actores:"",
      video:"",
      calificacion:""
    }

}

  onSubmit = (e) => {
    e.preventDefault()
    let json = {
      nombre:this.state.nombre,
      duracion:this.state.duracion,
      clasificacion:this.state.clasificacion,
      genero:this.state.genero,
      sinopsis:this.state.sinopsis,
      premios:this.state.premios,
      anio:this.state.anio,
      portada:this.state.portada,
      actores:this.state.actores,
      video:this.state.video,
    }
    //cambiar link 
    axios.post('https://pelicools.herokuapp.com/api/v1/peliculas/create/',json).then(alumno=>{
        console.log(alumno)
        alert('Se agrego una PELICOOL')}
    ).catch(err =>{
        console.log(err)
        alert('Lo siento existe un problema')})
    }
  
  
  
  //TERMINAR 
  onInputChange = (e) =>{
  
    if(e.target.name === 'nombre'){
        this.setState({
            nombre: e.target.value
        })
    }else if(e.target.name === 'duracion'){
        this.setState({
            duracion: e.target.value
        })
    }else if(e.target.name === 'clasificacion'){
      this.setState({      
      email:e.target.value
      })
    }else if(e.target.name === 'genero'){
      this.setState({
      genero:e.target.value
      })
    }else if(e.target.name === 'sinopsis'){
      this.setState({
      sinopsis:e.target.value
      })
    }else if(e.target.name === 'premios'){
      this.setState({
      premios:e.target.value
      })
    }else if(e.target.name === 'anio'){
      this.setState({
      anio:e.target.value
      })
    }else if(e.target.name === 'portada'){
      this.setState({
      portada:e.target.value
      })
    }else if(e.target.name === 'actores'){
      this.setState({
      actores:e.target.value
      })
    }else{
      this.setState({
      video:e.target.value
      })
    }
  
  }




render(){
    return(
        <div>
          <Navbar/>
          <br/>

    <form onSubmit={this.onSubmit} className="formcuadro">
      <h1>Ingrese Pelicula</h1>

    <div className="ormpeli">
  <div className="form-group">
    <label for="exampleInputName1">Nombre</label>
    <input type="text" name = "nombre"className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Nombre"onChange={this.onInputChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputName1">Duracion</label>
    <input type="number" name="duracion" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Duracion"onChange={this.onInputChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputName1">Clasificacion</label>
    <input type="text"name="clasificacion" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Clasificacion"onChange={this.onInputChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputName1">Genero</label>
    <input type="text" name="genero"className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Genero"onChange={this.onInputChange}/>
  </div>

  <div className="form-group">
    <label for="exampleInputName1">Premios</label>
    <input type="text" name="premios"className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Premios"onChange={this.onInputChange}/>
  </div>


  <div className="panel panel-info">
    <label for="exampleInputName1">Sinopsis</label>
    <input type="text" name="sinopsis" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Sinopsis"onChange={this.onInputChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputName1">Año</label>
    <input type="number" name="anio" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Año"onChange={this.onInputChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputName1">Portada</label>
    <input type="url"name="portada" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Portada"onChange={this.onInputChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputName1">Actores</label>
    <input type="text"name="actores" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Actores"onChange={this.onInputChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputName1">Video</label>
    <input type="url"name="video" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Video"onChange={this.onInputChange}/>
  </div>
  
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    );
}}

export default AddPeli