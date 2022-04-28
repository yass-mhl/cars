import React from "react";

const Car = (props) => {

  const colorInfos = props.color ? (<p>couleur : {props.color} </p>) : (<p>couleur : Inconnu </p>)

  if (props.children) {
    return(
      <div style={ {backgroundColor : 'pink', width: '400px', padding: '10px', margin: '5px auto'}}>
        <p>marque : {props.children} </p>
        {colorInfos}
      </div>
    )
  }else{
    return(
      <div style={ {backgroundColor : 'pink', width: '400px', padding: '10px', margin: '5px auto'}}>
        <p> Pas de data </p>
      </div>
    )
  }


}

export default Car;
