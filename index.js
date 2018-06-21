const app = require('./server');
const PORT = process.env.PORT || 1337;
const { db } = require('./server/db/models');


db.sync()  //{force: true} if models change--or just 'npm run seed'
  .then(() => {
    console.log('Postgres server up and running');
		app.listen(PORT, (err) => {
		  if (err) throw err;
		  console.log(`Your server awaits your attention on port ${PORT}`);
	  });
	})
	.catch(console.error);
