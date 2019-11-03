# hr-talk-baseball-cards

Repo for seeding a test database of baseball card data. Requires Node and MySQL.

To run:
1. Install the project dependencies: `npm install`
2. Run your MySQL server: `mysql.server start`
3. Create your database schema: `mysql -u root < schema.sql`
4. Seed your database: `npm run seed`

If you complete these steps successfully, you should be able to connect to the database with the credentials in `db.js`.
