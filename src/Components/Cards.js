import React, {Component} from 'react';
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'


class Cards extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
            <div className="card m-3 d-flex flex-wrap" style={{width:"18rem"}}>
            <img className="card-img-top" style={{width:'18rem',height:400 +'px'}} src={this.props.portada} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{this.props.nombre}</h5>
                <p className="card-text">{this.props.genero}</p>
    
               <Link to={'/peliculas/'+this.props.id}>
    <a href="/" className="btn btn-outline-info">Ver PeliCool</a>
               </Link> 
            </div>
            </div>
            </div>
        );
    }
}

export default Cards