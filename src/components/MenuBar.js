import React from 'react'

const MenuBar = (props) => {

  const handleClick = (event) => {
    reassignClassName(event)
    console.log(event.target)
    props.setActiveIcon(event.target.id)
  }

  const reassignClassName = (event) => {
    event.target.className = "item active"
  }


  return (
    <div className="ui four item menu" >
      <a className={"item " + (props.activeIcon === 'profile' ? 'active' : null)} id="profile"  onClick={handleClick}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={"item " + (props.activeIcon === 'photo' ? 'active' : null)} id="photo" onClick={handleClick}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={"item " + (props.activeIcon === 'cocktail' ? 'active' : null)} id="cocktail" onClick={handleClick}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={"item " + (props.activeIcon === 'pokemon' ? 'active' : null)} id="pokemon" onClick={handleClick}>
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
