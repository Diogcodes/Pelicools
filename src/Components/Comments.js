import React, {Component} from 'react';
import Navbar from '../Components/Navbar'


class Comments extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div class="row">
        <div class="col-6">
        <div class="card-body">
        <h1 class="card-title">{this.state.comentarios.NombreCalificador}</h1>
        <h5 class="btn btn-primary">{this.state.comentarios.estrellas}</h5>
        {/* <h5 class=" btn-primary"> {this.state.pelicool.duracion + ' min'}</h5>
        <p class="card-text">{this.state.pelicool.sinopsis}</p> */}
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        </div>
        </div>
        );
    }
}

export default Comments