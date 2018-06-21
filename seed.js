const db = require('./server/db');

const crumpets = [
  {
    name: 'Classic Crumpet',
    price: 4.99,
    description: 'Enter pure deliciousness.'
  },
  {
    name: 'Caramel Crumpet',
    price: 5.99,
    description: 'Gooey and good.'
  },
  {
    name: 'Coconut Crumpet',
    price: 5.99,
    description: 'Festive?'
  }
];

const stores = [
  {
    name: 'OG Crumpets',
    location: 'NYC',
    status: 'Open'
  },
  {
    name: 'Crumpets Jr.',
    location: 'San Diego',
    status: 'Open'
  },
  {
    name: 'Crump!t',
    location: 'Canada',
    status: 'Closed'
  },
];

const seed = async () => {
  const [ crumpetInstances, storeInstances ] = await Promise.all([
    Crumpet.bulkCreate(crumpets),
    Store.bulkCreate(stores)
  ]);
  await Promise.all(storeInstances.map(s => {
    return s.addCrumpets(crumpetInstances);
  }));
};

const main = () => {
  try {
    console.log('Syncing db...');
    await db.sync({ force: true });
    console.log('Seeding databse...');
    await seed();
    console.log('Databse seeded successfully!');
    db.close();
  } catch (err) {
    console.log('Error while seeding');
    console.log(err.stack);
  }
};

main();
