import React, { Component } from "react";
import EstadoFav from "./estadoFv";
import Idade from "./idade";

class Xablau extends Component {
    constructor () {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            estadoFav: '',
            idade: 0,
            vaiComparecer: false,
        }
    }

    handleChange({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
      
        this.setState({
          [name]: value,
        });
      }

    render () {
        console.log(this)
        return (
            <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
            <EstadoFav value={this.state.estadoFav} handleChange={this.handleChange}/>
            <Idade value={this.state.idade} handleChange={this.handleChange}/>
          <input
            type="checkbox"
            name="vaiComparecer"
            onChange={this.handleChange}
          />
        </form>
      </div>
        )
    }
}

export default Xablau;