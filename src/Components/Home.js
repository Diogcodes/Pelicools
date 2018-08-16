import React, { Component } from 'react';
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'
import axios from 'axios'
import Pelicool from './Pelicool';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            nombre:[],
            duracion:[],
            clasificacion:[],
            genero:[],
            sinopsis:[],
            premios:["",""],
            anio:[],
            portada:[],
            actores:["",""],
            video:[],
            calificacion:[],

            pelicools:[]
        }
    }

componentDidMount(){
        axios.get('https://pelicools.herokuapp.com/api/v1/peliculas/')
    .then(response=>{
        this.setState({
            pelicools: response.data,

        })
    })
    .catch(err => console.log(err))
}





componentWillMount(){
    console.log('will mount')
}


updateCardUsuarios(){
    if(this.state.pelicools.length === 0){
        return <div>Cargando...</div>
    }else{
        let nombre = this.state.pelicools.map(element =>{
            return <Cards nombre={element.nombre} genero={element.genero} portada={element.portada} id = {element._id} />
        })
        console.log(nombre)
        return nombre
    }
}


    render(){
        return(
            <div>
            <div>
                <Navbar/>
                </div>
            <div className="d-flex flex-wrap justify-content-center">
            {this.updateCardUsuarios()}
            </div>
             </div>
        );
    }
}

export default Home