import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

const renderShit = {
  "profile": Profile(),
  "photo": Photos(),
  "cocktail": Cocktails(),
  "pokemon": <Pokemon />
}

class MainBox extends React.Component {
  state = {
    activeIcon: ''
  }

  setActiveIcon = iconId => {
    this.setState({activeIcon: iconId})
  }

  displayThis = () => {
    return renderShit[this.state.activeIcon]
  }

  render() {

    return (
      <div>
        <MenuBar setActiveIcon={this.setActiveIcon} activeIcon={this.state.activeIcon}/>
        {this.displayThis()}
      </div>
    )
  }

}

export default MainBox
