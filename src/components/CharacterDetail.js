import React from 'react'

const CharacterDetail = (props) => {
  if(!props.character) return null;
  return (
    <div>
      <h2>
      {props.character.name}
      </h2>
      <img src={props.character.image} alt="image" width="25%"/>
    </div>
  )
}

export default CharacterDetail;
