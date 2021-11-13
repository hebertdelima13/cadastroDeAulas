# template-node-ts-mysql
Template usando Nodejs + express + typescript + mysql


# db

Para usar o banco de dados do exemplo crie uma tabela seguindo o script abaixo:

```

CREATE TABLE notes (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

```