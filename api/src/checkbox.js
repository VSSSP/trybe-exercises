import React, { Component } from "react";

class Checkbox extends Component {
    render () {
        const { value, handleChange } = this.props
        return (
            <input
            type="checkbox"
            name="vaiComparecer"
            value={value}
            onChange={handleChange}
          />
        )
    }
}

export default Checkbox