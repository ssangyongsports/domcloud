# Databases 

Database is an integral part of any application. DOM Cloud provides a free, opt-in `MariaDB` and `PostgreSQL` database for every website in every tier. 

Use the *runner* to add and use a database. See the section for enabling [MariaDB](./runner.md#mysql) or [PostgreSQL](./runner.md#postgresql).

To view and edit the database using online tools, use PhpMyAdmin or PhpPgAdmin. Both available from manage tab.

:::caution

You can't create or drop database from PhpMyAdmin or PhpPgAdmin. You have to do that from webmin or runner.

:::

### Using the Database

After enabling MySQL/Postgres from the runner. You can provide the database credentials like below:

+ Hostname: `localhost` (because the database always live in the same server)
+ Username: Same username with server (see from manage tab)
+ Password: Same password with server (see from manage tab)
+ Database name: Usually username + `_db` unless you've create another DB

### Remote Access

Remote Access is used to manage databases using your local software -- such as DBeaver, HeidiSQL or TablePlus.

PostgreSQL permits remote access by default.

MySQL is more grained and by default doesn't allow remote access by default, you need to change it by go to the Webmin > Databases > Remote access and add `%.%.%.%` (next line above `localhost`) to allowed hosts list.

### Timestamp

The whole server always sets the clock in `UTC`.

A good idea to handle timezone is done by client processing (Javascript), both after getting the data from database/AJAX and before sending data/Posts to server.

If you don't care about timezone and you think it's safe to assume that your website is only accessed in one timezone, you can set the timezone in the backend using [date_default_timezone_set](https://www.php.net/manual/en/function.date-default-timezone-set.php) for PHP or [`TZ` env](https://medium.com/developer-rants/time-zones-in-node-js-fc5a5b51906a) for non-PHP (set it to passenger's `env_var_list`). 