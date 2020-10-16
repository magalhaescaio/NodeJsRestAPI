# NodeJsRestAPI + MongoDB
Example REST API in NodeJS

# Sign Up #

```
  method: POST
  url: https://techmahindracaiomagalhaes.herokuapp.com/auth/signup
```

Corpo da requisição deve ser enviado em JSON

Os campos nome, email e senha são obrigatórios, caso não sejam informados o servidor retornará a seguinte mensagem: "__Não foi possível efetuar cadastro__"

### Exemplo do corpo da requisição ###

```
{
	"name": "Joao Magalhães",
	"email": "aasaa@dsx.com",
	"senha": "Brasil@@2020",
	"telefones" : [{
		"numero": "123456789",
 		"ddd": "11"
	},{
		"numero": "123456789",
 		"ddd": "11"
	}]
}
```
### Exemplo de retorno ###

```
[
  {
    "user": {
      "_id": "5f89ce35a87a7f29108d9f11",
      "name": "Joao Magalhães",
      "email": "aasaa@dsx.com",
      "telefones": [
        {
          "_id": "5f89ce35a87a7f29108d9f12",
          "numero": 123456789,
          "ddd": 11
        },
        {
          "_id": "5f89ce35a87a7f29108d9f13",
          "numero": 123456789,
          "ddd": 11
        }
      ],
      "data_criacao": "2020-10-16T16:45:41.391Z",
      "ultimo_login": "2020-10-16T16:45:41.391Z",
      "__v": 0
    }
  },
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmODljZTM1YTg3YTdmMjkxMDhkOWYxMSIsImlhdCI6MTYwMjg2Njc0MSwiZXhwIjoxNjAyOTUzMTQxfQ.WDKTakXMrW4guR5tsWqiTmSpjd7vDHH6uoWQlQiEJUA"
  }
]
```

O __token__ informado devera ser utilizado para efetuar as próximas requisições


# Sign Up #

```
  method: POST
  url: https://techmahindracaiomagalhaes.herokuapp.com/auth/signin
```
Corpo da requisição deve ser enviado em JSON

Se o email ou senha forem informados incorretamente o servidor retornará a seguinte mensagem: "__Usuário e/ou senha inválidos__"

### Exemplo do corpo da requisição ###

```
{
	"email": "aasaa@dsx.com",
	"senha": "Brasil@@2020"
} 
```

### Exemplo de retorno ###

```
[
  {
    "user": {
      "_id": "5f89ce35a87a7f29108d9f11",
      "name": "Joao Magalhães",
      "email": "aasaa@dsx.com",
      "telefones": [
        {
          "_id": "5f89ce35a87a7f29108d9f12",
          "numero": 123456789,
          "ddd": 11
        },
        {
          "_id": "5f89ce35a87a7f29108d9f13",
          "numero": 123456789,
          "ddd": 11
        }
      ],
      "data_criacao": "2020-10-16T16:45:41.391Z",
      "ultimo_login": "2020-10-16T16:46:03.548Z",
      "__v": 0
    }
  },
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmODljZTM1YTg3YTdmMjkxMDhkOWYxMSIsImlhdCI6MTYwMjg2Njc2MywiZXhwIjoxNjAyOTUzMTYzfQ.1kqlKWUbxq_2RgBVgx4HJ2cYkjk89XPj5jKsu--EKhY"
  }
]
```

# Search User #


```
  method: GET
  url: https://techmahindracaiomagalhaes.herokuapp.com/users/:id
```

Informar Bearer + {token} no header da requisição


### Exemplo de retorno ###

```
[
  {
    "user": {
      "_id": "5f89ce35a87a7f29108d9f11",
      "name": "Joao Magalhães",
      "email": "aasaa@dsx.com",
      "telefones": [
        {
          "_id": "5f89ce35a87a7f29108d9f12",
          "numero": 123456789,
          "ddd": 11
        },
        {
          "_id": "5f89ce35a87a7f29108d9f13",
          "numero": 123456789,
          "ddd": 11
        }
      ],
      "data_criacao": "2020-10-16T16:45:41.391Z",
      "ultimo_login": "2020-10-16T16:46:03.548Z",
      "__v": 0
    }
  },
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmODljZTM1YTg3YTdmMjkxMDhkOWYxMSIsImlhdCI6MTYwMjg2Njc2MywiZXhwIjoxNjAyOTUzMTYzfQ.1kqlKWUbxq_2RgBVgx4HJ2cYkjk89XPj5jKsu--EKhY"
  }
]
```
