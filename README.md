# hr-talk-baseball-cards

Repo for seeding a test database of baseball card data.

## Setup

This project requires Node and MySQL. If you do not have these on your computer, they can be installed through Homebrew (https://brew.sh/) with the commands `brew install node` and `brew install mysql`.

## Setup

1. Install the project dependencies: `npm install`
2. Run your MySQL server: `mysql.server start`
3. Create your database schema: `mysql -u root < schema.sql`
4. Seed your database: `npm run seed`

If you complete these steps successfully, you should be able to connect to the database with the credentials in `db.js`.
