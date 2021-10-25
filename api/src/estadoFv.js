import React, { Component } from "react";

class EstadoFav extends Component {
    render () {
        const { value, handleChange } = this.props;
        return (
            <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea name="estadoFav" value={value} onChange={handleChange} />
          </label>
        )
    }
}

export default EstadoFav;