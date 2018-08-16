import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './Navbar';
import Comments from './Comments'
import './paraForm.css'



class Pelicool extends Component{

    constructor(props){
        super(props)
        this.state={
            idPeli:this.props.match.params.id,
            pelicool:{}
        
        } 
    }


    componentDidMount(){
        axios.get('https://pelicools.herokuapp.com/api/v1/peliculas/'+this.state.idPeli)
    .then(response=>{
        this.setState({
            pelicool:response.data,
        })
    })
    .catch(err => console.log(err))
}


updateCardPeli(){
    if(this.state.pelicool.length === 0){
        return <div>Cargando...</div>
    }else{
        let cardpeli = 
        <div class="row">
        <div class=" col-6">
        <img class="card-img-top" style={{width:500+'px'}} src={this.state.pelicool.portada} alt="Card image cap"/>
        </div>
        <div class="col-6">
        <div class="card-body">
        <h1 class="card-title">{this.state.pelicool.nombre}</h1>
        <h6 class="formtext"> {"Año: " +this.state.pelicool.anio}</h6>
        <h6 class="formtext">{"Clasificación: "+this.state.pelicool.clasificacion}</h6>
        <h6 class="formtext"> {"Duración: "+this.state.pelicool.duracion + ' min'}</h6>
        <h6 class="formtext"> {"Genero: " +this.state.pelicool.genero}</h6>
        <h6 class="formtext"> {"Actores: "+this.state.pelicool.actores}</h6>
        <h6 class="formtext"> {"Premios: "+this.state.pelicool.premios}</h6>
        <br/>
        <p class="card-text">{this.state.pelicool.sinopsis}</p>
        {/* <p class="card-text"><small class="text-muted">{this.state.pelicool.calificacion}</small></p> */}
        <iframe width="500" height="300" src={this.state.pelicool.video} frameborder="0" allow="autoplay ;encrypted-media" allowFullScreen></iframe>
        </div>
        </div>
        </div>
           return cardpeli
    }

}

updateCardComments(){
    if (this.state.pelicool.length==0){
      return <div>Cargando...</div>
    }else{
        let comments = this.state.pelicool.map(element =>{
        return <Comments comentarios={element.calificacion} />
      })
      return comments
    }
  }


    render(){
        return(
            <div>
            <Navbar/>
            <br/>
            {this.updateCardPeli()}
            {/* {this.updateCardComments()} */}
            </div>
        );
    }
}

export default Pelicool
