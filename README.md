<h1 align="center">Cadastro de Aulas</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

## Screenshots

<img src="https://i.ibb.co/Xp9Czy5/screenshot1.jpg" />
<img src="https://i.ibb.co/x8BC8dr/screenshot2.jpg" />
<img src="https://i.ibb.co/ScrxxDJ/screenshot3.jpg" />
<img src="https://i.ibb.co/PZbFftL/screenshot4.jpg" />

## Frameworks

```sh
Node.js + Angular 12
```

## Database

```sh
Mysql
```

## Install

```sh
npm install
```

```sh
CREATE TABLE `sql5450435`.`lessons` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(45) NULL,
	`description` TEXT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`));
```

```sh
CREATE TABLE `sql5450435`.`users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` TEXT NULL,
	`email` TEXT NULL,
	`password` TEXT NULL,
	PRIMARY KEY (`id`));
```

## Usage

```sh
npm run start "NodeJs - Service"
ng serve "Angular 12 - Client"
```

## Authors

👤 <a href="https://www.linkedin.com/in/hebert-fernandes-de-lima-8b8913210/">**Hebert Fernandes**</a>
