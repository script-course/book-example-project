<p align="center"><a href="https://script.nl" target="_blank"><img src="https://www.script.nl/script-logo.png" width="400"></a></p>

## About Book example-project

Het is een voorbeeld project met Laravel & Vue. Het is bedoeld om inspiratie op te doen voor jouw eigen applicatie.

-   Er kunnen geen rechten aan dit project worden ontleend.

### Project setup

```sh
npm install

composer install

mysql -u root
# run: create database database_name;

cp .env.example .env
code .env
# edit if needed: DB_PORT=, DB_DATABASE=, DB_USERNAME=, DB_PASSWORD=

php artisan key:generate
php artisan migrate:fresh --seed
```

### Run project

Run in 1 terminal the javascript development server:

```sh
npm run watch
```

Run in another terminal the laravel development server:

```sh
php artisan serve
```
