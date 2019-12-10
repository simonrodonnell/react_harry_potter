import React from 'react'
import CharacterSelector from '../components/CharacterSelector';
import HouseSelector from '../components/HouseSelector';
import CharacterDetail from '../components/CharacterDetail';

class CharacterContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null,
      currentHouseIndex: null
    };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this)
    this.handleHouseSelected = this.handleHouseSelected.bind(this)
  }

  componentDidMount(){
    const url = "https://hp-api.herokuapp.com/api/characters";

    fetch(url)
    .then(res => res.json())
    .then(characters => this.setState({characters: characters}))
    .catch(err => console.error);
  }

  handleCharacterSelected(index){
    const selectedCharacter = this.state.characters[index];
    this.setState({currentCharacter: selectedCharacter})
  }

  handleHouseSelected(index) {
    let selectedHouse = null;
    if(index == 1)
    {
      return;
    }
    else if (index == 2)
    {
      selectedHouse = "";
    }
    else if (index == 3)
    {
      selectedHouse = "Gryffindor";
    }
    else if (index == 4)
    {
      selectedHouse = "Slytherin";
    }
    else if (index == 5)
    {
      selectedHouse = "Hufflepuff";
    }
    else
    {
      selectedHouse = "Ravenclaw";
    }
    const filterCharacters = this.state.characters.map((character) => {
      if(character.house == selectedHouse){
        return character;
      }
    }
  )
  console.log(filterCharacters);
  // this.setState({characters: filterCharacters})
}

render(){
  return(
    <div>
    <h2>Character Container</h2>
    <HouseSelector
    onHouseSelected={this.handleHouseSelected}
    />
    <CharacterSelector
    characters={this.state.characters}
    onCharacterSelected={this.handleCharacterSelected}
    />
    <CharacterDetail
    character={this.state.currentCharacter}
    />
    </div>
  )
}

}

export default CharacterContainer
