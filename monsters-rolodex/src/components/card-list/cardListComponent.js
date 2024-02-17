import React, { Component } from 'react';
import './cardListStyles.css'
import Card from '../card/cardComponent';
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className='card-list'>
        {monsters.map((monster) => {
            const {name, id , email} = monster
            return (
          <Card monster={monster}/>
        )})}
      </div>
    );
  }
}

export default CardList;
