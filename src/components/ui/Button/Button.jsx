import React from 'react'
const Button=(props) => {
    console.log(props);
    return <div className="Button">{props.title}</div>
}

export default Button;