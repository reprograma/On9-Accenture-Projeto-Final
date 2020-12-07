# Aqui tem vacina

## Apresentação

Sejam bem-vindos, esse projeto foi desenvolvido e entregue como etapa de conclusão da Turma 9 do Bootcamp de Desenvolvimento Back-End do Reprograma em parceria com a Accenture.

Apesar dos desafios na área, o Brasil é reconhecido mundialmente pelo seu Sistema Único de Saúde. Universal, integral e gratuito, o SUS tem um Programa Nacional de Imunização que disponibiliza mais de 15 vacinas para toda população brasileira em diversas faixas etárias. No dia a dia, para ter acesso a esse serviço gratuito, o cidadão se desloca até a Unidade Básica de Saúde mais próxima, levando sua carteirinha de vacinação e recebe as doses necessárias.

Pode acontecer, contudo, de na Unidade mais próxima não ser encontrada a vacina ou a dosagem necessária, fazendo com que o usuário do SUS precise procurar de "posto em posto" até obter sucesso.

"Aqui tem Vacina" é uma API, cujo objetivo é mostrar a distribuição e disponibilidade das vacinas por Unidades de Saúde em tempo real, permitindo ao SUS conferir se e quais vacinas estão disponíveis perto da sua casa, antes de fazer o deslocamente até o Postinho.

## Contatos

**LinkedIn**: [https://www.linkedin.com/in/allanacaldas/](https://www.linkedin.com/in/allanacaldas/)

**Email**: [allanacaldas@gmail.com](mailto:allanacaldas@gmail.com)

## Linguagem e Banco de Dados utilizados

- Javascript / Node.js
- MongoDB

## Dependências utilizadas

- Express;
- Nodemon
- Mongoose
- Yup
___
# ROTAS

## POST (Cadastro de administrador)

Cadastro de **usuário-administrador** que vai modificar, atualizar cadastro de vacinas e Unidades de Saúde e correlacionar as informações entre elas.

**http://localhost:8080/admin/registro**

**O que o body deve conter:**

```json
{
    "name":"",
    "email":"",
    "password":"",
    "occupation":""
}
```

**Resposta [201]**

```json
{
    "message":"Cadastro registrado com sucesso"
}
```

## POST (Cadastro de Vacinas)

Cadastro de vacinas, registrando o nome, lote e as doses

**http://localhost:8080/vacinas/cadastrar**

**O que o body deve conter:**

```json
{
    "vaccine":"",
    "batch":"",
    "doses":""
}
```

**Resposta [201]**

```json
{
    "message":"Vacina cadastrada com sucesso"
}
```

## POST (Cadastro de Unidades de Saúde)

Cadastro de Unidade de Saúde, registrando o respectivo o tipo de unidade, endereço,  horário de funcionamento, se é um local acessível a PCD's e qual a lista de vacinas disponíveis no momento.

**http://localhost:8080/unidades-de-saude/cadastrar**

**O que o body deve conter:**

```json
{
		"type": "",
    "address": {
        "street": "",
        "zipcode": ""
    },
    "borough": "",
    "openingHours": "",
    "accessibility": "",
    "vaccines": [
        {
            "name": "",
            "dosage": "",
            "vaccineId": ""
        }
    ]
}
```

**Resposta [201]**

```json
{
    "message":"Unidade de saúde cadastrada com sucesso"
},
{
		"_id":"",
    "type": "",
    "address": {
        "street": "",
        "zipcode": ""
    },
    "borough": "",
    "openingHours": "",
    "accessibility": "",
    "vaccines": [
        {
            "name": "",
            "dosage": "",
            "vaccineId": ""
        }
    ],
		"createdAt": "",
		"updatedAt": ""
}

}
```

## PUT (Atualização de Unidades de Saúde)

**http://localhost:8080/unidades-de-saude/atualizar:/id**

**O que a URL deve conter:**

```json
"http://localhost:8080/unidades-de-saude/atualizar/5fcb16455ee6964df83b020f"

//Como paramêtro, enviamos o id da Unidade de Saúde cujos dados que queremos modificar
```

**O que o body deve conter:**

```json
{
		"address": {
        "street": "",
        "zipcode": ""
    },
    "borough": "",
    "openingHours": "",
    "accessibility": "",
    "vaccines": [
        {
            "name": "",
            "dosage": "",
            "vaccineId": ""
        }
    ]
}
```

**Resposta [200]**

```json
{
    "message":"Dados da Unidade de Saúde atualizados com sucesso"
}
```

## PATCH (Atualização do lote de uma vacina )

**http://localhost:8080/vacinas/atualizar-lote/:id**

**O que a URL deve conter:**

```json
"http://localhost:8080/vacinas/atualizar-lote/5fcb16455ee6964df83b020f"

//Como paramêtro, enviamos o id da vacina cujo campo 'lote' queremos modificar
```

**O que o body deve conter:**

```json
{
    "batch":""    
}
```

**Resposta [200]**

```json
{
    "message":"O lote da vacina selecionada foi atualizado com sucesso"
}
```


## PATCH (Atualização das doses de uma vacina )

**http://localhost:8080/vacinas/atualizar-doses/:id**

**O que a URL deve conter:**

```json
"http://localhost:8080/vacinas/atualizar-doses/5fcb16455ee6964df83b020f"

//Como paramêtro, enviamos o id da vacina cujo campo 'doses' queremos modificar
```

**O que o body deve conter:**

```json
{
    "doses":""    
}
```

**Resposta [200]**

```json
{
    "message":"As doses da vacina selecionada foram atualizadas com sucesso"
}
```

## PATCH (Atualização das vacinas disponíveis numa Unidade de Saúde)

**http://localhost:8080/unidades-de-saude/atualizar-vacinas/:id**

**O que a URL deve conter:**

```json
"http://localhost:8080/unidades-de-saude/atualizar-vacinas/5fcb15c9d4837f2e3ce4a08f"

//Como paramêtro, enviamos o id da Unidade de Saúde cujo campo 'vaccines' queremos modificar
```

**O que o body deve conter:**

```json
{
    "vaccines": [
        {
            "name": "",
            "dosage": "",
            "vaccineId": ""
        }
    ]
}
```

**Resposta [200]**

```json
{
    "message":"A lista de vacinas desta Unidade de Saúde foi atualizada com sucesso"
}
```

## PATCH (Atualização do endereço de uma Unidade de Saúde)

**http://localhost:8080/unidades-de-saude/atualizar-endereco:/id**

**O que a URL deve conter:**

```json
"http://localhost:8080/unidades-de-saude/atualizar-endereco/5fcb15c9d4837f2e3ce4a08f"

//Como paramêtro, enviamos o id da Unidade de Saúde cujo campo 'vaccines' queremos modificar
```

**O que o body deve conter:**

```json
{
		"address": {
        "street": "",
        "zipcode": ""
   }
}
```

**Resposta [200]**

```json
{
    "message":"O endereço desta Unidade de Saúde foi atualizado com sucesso"
}
```

## DELETE (Apagando um usuário administrador do sistema)

**http://localhost:8080/admin/deletar/:id**

**O que a URL deve conter**

```json
"http://localhost:8080/admin/deletar/5fcacc955344a12c8c1f8aea"

//No endpoint, como parâmetro, devemos passar o ID do usuário para que seu cadastro seja apagado
```

**Resposta [200]**

```json
{
    "message":"O cadastro do usuário de id ${id} foi apagado com sucesso"
}
```

## DELETE (Apagando uma unidade de saúde do sistema)

**http://localhost:8080/unidades-de-saude/deletar/:id**

**O que a URL deve conter**

```json
"http://localhost:8080/unidades-de-saude/deletar/5fcacc955344a12c8c1f8aea"

//No endpoint, como parâmetro, devemos passar o ID da unidade de saúde para que seu cadastro seja apagado
```

**Resposta [200]**

```json
{
    "message":"O cadastro da unidade de saúde de id ${id} foi apagado com sucesso"
}
```

## GET (Listando todas as vacinas cadastradas)

**http://localhost:8080/vacinas/**

## GET (Listando as vacinas filtradas pelo lote)

**http://localhost:8080/vacinas/lote?batch=1000520AC**

## GET (Listando pelo nome de uma vacina especificamente)

**http://localhost:8080/vacinas/vacina?name=Covid**

## GET (Listando todos os Postos de Saúde Cadastrados)

**http://localhost:8080/unidades-de-saude/**

## GET (Listando os Postos de Saúde  por Bairro)

**http://localhost:8080/unidades-de-saude/bairro?borough=Ouro+Preto**

## GET (Listando os Postos de Saúde por Vacina desejada)

**http://localhost:8080/unidades-de-saude/vacina?vaccine=BCG**

## GET (Pesquisando os Postos de Saúde por Bairro e Vacina desejada)

**http://localhost:8080/unidades-de-saude/vacina-e-bairro?vaccine=Covid&borough=Sapucaia**