# Informatik Hjemmeside

### Requirements
* PHP >= 8.0
* Nodejs >= 18

## Installation


Configure laravel
```bash
cd informatik-hjemmeside
mv .env.example .env
php artisan key:generate
```

Remember to set your database information in .env file.

Install the dependencies and devDependencies and start the server.

```bash
1 .cd informatik-hjemmeside
composer install
yarn install
mv .env.example .env
```

Install database

```sh
php artisan migrate --seed
```
