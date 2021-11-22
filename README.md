# mercado-livre
Desafio de front-end.

### Iniciando o app localmente

#### Com docker:

```js
 // Iniciando o /app na porta 3000 - http://localhost:3000/
 cd /app && docker-compose up
 
 // Iniciando o /server na porta 5000 - http://localhost:5000/api/
 cd /server && docker-compose up
```

#### Sem docker:

```js
 // Iniciando o /app na porta 3000 - http://localhost:3000/
 cd /app && yarn dev
 
 // Iniciando o /server na porta 5000 - http://localhost:5000/api/
 cd /server && yarn start:dev
```


### Tecnologias utilizadas:

- Typescript
- NextJS
- Styled-components
- NodeJS
- Express
- Axios


### Débito tecnico:
Acabei não implementando a páginação dos dados, portanto, a buscar de dados está com um gargalo grande no tempo de respota da minha api.

Optei por limita a quantidade de dados retornados e utilizar hashmap na montagem da estrutura dos dados, mas isso resolve o problema de forma parcial. 

O gargalo de performanse se dá por conta do map no array de resultados e por outras requests
necessárias para retornar os dados no formato deseja pelo desafio. 







