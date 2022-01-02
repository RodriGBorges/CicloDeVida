import React from 'react';
import Genre  from './Genre';
import { Component } from 'react'
import axios from 'axios'

/* let genres = [
    {genre: 'Acción'},
    {genre: 'Animación'},
    {genre: 'Aventura'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Comedia'},
    {genre: 'Documental'},
    {genre: 'Drama'},
    {genre: 'Fantasia'},
    {genre: 'Infantiles'},
    {genre: 'Musical'}
] */

class GenresInDb extends Component {

    constructor() {
        super()
        this.state = {
            genres: '',
            bg: false
        }
    }

    componentDidMount() {
        axios('http://localhost:3001/api/genres')
        .then(response => {
            console.log(response)
            this.setState({genres: response.data.genres})
        })
        .catch(error => console.log(error))
    }

    hanlderMouseOver () {
        console.log('mouseover')
        this.setState({bg: !this.state.bg})
    }


    render () {


    return (
        <>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 onMouseOver={() => this.hanlderMouseOver()} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                        </div>
                        <div className={this.state.bg ? "card-body bg-secondary" : "card-body"}>
                            <div className="row">
                                {
                                this.state.genres !== "" ? this.state.genres.map((genre,index)=>{
                                        return  <Genre  genre={genre.name}  key={index} />
                                    })
                                : <h1>Cargando...</h1>}
                            </div>
                        </div>
                    </div>
                </div>
        
        </>
    )
    }
}
export default GenresInDb;