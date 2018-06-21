const Sequelize = require('sequelize');

const db = require('../_db');

/*
example crumpet from seed file:
{
  name: 'New Crumpet',
  price: 5.99,
  description: 'Gooey and good.'
}
*/

const Crumpet = db.define('crumpet', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      unique: true
    },
  },
  price: {
    type: Sequelize.INTEGER,
    get() {
      return '$' + this.getDataValue('price') / 100;
    },
    set(price) {
      return price * 100;
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  category: {
    type: Sequelize.ENUM(...categories),
    allowNull: false
  },
  priceAndDescription: { // "5.99: Gooey and good."
    type: Sequelize.VIRTUAL
    get() {
      return this.getDataValue(price) + ": " + this.getDataValue(description) + '.';
    }
  }
});


const crumpetsAndTeas = {
  buttery: 'black',
  flakey: 'green',
  warm: 'blue'
}
const categories = Object.keys(crumpetsAndTeas);

Crumpet.prototype.getTeaPairing = function() {
  // return a tea pairing
  return crumpetsAndTeas[this.category];
}

Crumpet.getPrice = async function(name) {
  // db call to get the crumpet with this id
  // return price for that crumpet
  const crumpet = await db.findOne({ where: {
    name
  }})
  return crumpet.price
}

module.exports = Crumpet;
