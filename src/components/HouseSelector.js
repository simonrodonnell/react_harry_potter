import React from 'react'

const HouseSelector = (props) => {

  function handleChange(event) {
    props.onHouseSelected(event.target.value)
  }

  return (
    <select id="house-selector" defaultValue="default" onChange={handleChange}>
    <option disabled value="default">Filter by house</option>
    <option value={1} key={1}>All</option>
    <option value={2} key={2}>None</option>
    <option value={3} key={3}>Gryffindor</option>
    <option value={4} key={4}>Slytherin</option>
    <option value={5} key={5}>Hufflepuff</option>
    <option value={6} key={6}>Ravenclaw</option>
    </select>
  )
}

export default HouseSelector
