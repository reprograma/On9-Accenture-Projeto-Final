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

- express;
- nodemon
- mongoose
- bcrypt
- jsonwebtoken
- yup
___
# ROTAS

## POST (Cadastro de administrador)

Cadastro de **usuário-administrador** que vai modificar, atualizar cadastro de vacinas e Unidades de Saúde e correlacionar as informações entre elas.

**http://localhost:8080/admin/register**

**O que o body deve conter:**

```json
{
    "name":"José da Silva",
    "email":"josesilva@gmail.com",
    "password":"2001005025"
}
```

**Resposta [201]**

```json
{
    "message":"Cadastro registrado com sucesso",
    "res": {
        "_id": "5fd2ff031df15d366cfc18d7",
        "name": "José da Silva",
        "email": "josesilva@gmail.com",
        "hashPass": "$2b$10$o3MPfGlNdLZc5bKhz3C6nuRBCuwnhUYfBBhfLp6dTR.KROsDwEeoe",
        "createdAt": "2020-12-11T05:09:23.243Z",
        "updatedAt": "2020-12-11T05:09:23.243Z",
        "__v": 0
    }

}
```
## POST (Login do administrador)

Login do **usuário-administrador** que vai gerar um token, permitindo a autenticação do usuário e o acesso dele às rotas privadas.

**http://localhost:8080/admin/signin**

**O que o body deve conter:**

```json
{
    "email": "josesilva@gmail.com",
    "password": "2001005025"
}
```

**Resposta [200]**

```json
{
    "user": {
        "id": "5fd2ff031df15d366cfc18d7",
        "email": "josesilva@gmail.com"
    },
    "token": "eiJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZDJmZjAzMWRmMTVkMzY2Y2ZjMThkNyIsImlhdCI6MTYwNzY2MzQ5NCwiZXhwIjoxNjA4MjY4Mjk0fQ.uCktwnd135V5bkUMFYdArPP7nAOgpSSeUrElIi4OU3E"
}
```

## POST (Cadastro de Vacinas)

Cadastro de vacinas, registrando o nome, o lote, as doses e as doenças que cada uma previne.

**http://localhost:8080/vaccines/register**

**O que o body deve conter:**

```json
{
    "vaccine": "Poliomelite Inativada",
    "batch": "PLO2021BR",
    "dose": "2ª dose",
    "preventableDiseases": [
            "Poliomelite",
            "Paralisia Infantil"
        ]
}
```

**Resposta [201]**

```json
{
    "message": "Vacina cadastrada com sucesso",
    "newVaccine": {
        "preventableDiseases": [
            "Poliomelite",
            "Paralisia Infantil"
        ],
        "_id": "5fd309015c9fb72b70ffc82d",
        "vaccine": "Poliomelite Inativada",
        "batch": "PLO2021BR",
        "dose": "2ª dose",
        "createdAt": "2020-12-11T05:52:01.827Z",
        "updatedAt": "2020-12-11T05:52:01.827Z",
        "__v": 0
    }
}
```

## POST (Cadastro de Unidades de Saúde)

Cadastro de Unidade de Saúde, registrando o respectivo o tipo de unidade, endereço,  horário de funcionamento e qual a lista de vacinas disponíveis no momento.

**http://localhost:8080/health-clinics/register**

**O que o body deve conter:**

```json
{
    "type": "Unidade de Saude da Familia",
    "address": {
        "street": "Estrada do Passarinho, 956",
        "zipcode": "53170110"
    },
    "borough": "Passarinho",
    "vaccines": [
        {
            "_id": "5fd302841df15d366cfc18d8"
        },
        {
            "_id": "5fd30433859cd146809be495"
        }
    ]
}
```

**Resposta [201]**

```json
{
    "message": "Nova unidade de Saúde registrada com sucesso",
    "newRegister": {
        "openingHours": "Segunda a Sexta - 8h às 17h",
        "vaccines": [
            "5fd302841df15d366cfc18d8",
            "5fd30433859cd146809be495"
        ],
        "_id": "5fd304bc5c9fb72b70ffc826",
        "type": "Unidade de Saude da Familia",
        "address": {
            "street": "Estrada do Passarinho, 956",
            "zipcode": 53170110
        },
        "borough": "Passarinho",
        "createdAt": "2020-12-11T05:33:48.657Z",
        "updatedAt": "2020-12-11T05:33:48.657Z",
        "__v": 0
    }
}
```

## PUT (Atualização de Unidades de Saúde)

**http://localhost:8080/health-clinics/update/:id**

**O que a URL deve conter:**

```json
"http://localhost:8080/health-clinics/update/5fcb16455ee6964df83b020f"

//Como paramêtro, enviamos o id da Unidade de Saúde cujos dados que queremos modificar
```

**O que o body deve conter:**

```json
{
    "type": "USF",
    "address": {
        "street": "Estrada dos Passarinhos, 956",
        "zipcode": 53170111
    },
    "borough": "Passarinho",
    "vaccines": [
        {
            "_id": "5fd302841df15d366cfc18d8"
        },
        {
            "_id": "5fd30433859cd146809be495"
        }
    ]
}
```

**Resposta [200]**

```json
{
    "message": "A unidade de Saúde selecionada 5fd304bc5c9fb72b70ffc826 foi atualizada com sucesso"
}
```
## PUT (Atualização cadastral das Vacinas)

**http://localhost:8080/vaccines/update/:id**

**O que a URL deve conter:**

```json
"http://localhost:8080/vaccines/update/5fd309015c9fb72b70ffc82d"

//Como paramêtro, enviamos o id da Vacina cujo cadastro que queremos atualizar
```

**O que o body deve conter:**

```json
{
    "vaccine": "Poliomelite Inativada",
    "batch": "PLO2021BR",
    "dose": "2ª dose",
    "preventableDiseases": [
            "Poliomelite",
            "Paralisia Infantil"
        ]
}
```

**Resposta [200]**

```json
{
    "message": "A vacina de id 5fd309015c9fb72b70ffc82d foi atualizada com sucesso"
}
```


## PATCH (Atualização das doenças que cada vacina previne )

**http://localhost:8080/vaccines/update-preventable-diseases/:id**

**O que a URL deve conter:**

```json
"http://localhost:8080/vaccines/update-preventable-diseases/5fd302841df15d366cfc18d8"

//Como paramêtro, enviamos o id da vacina cujo campo 'prevantableDiseases' queremos modificar
```

**O que o body deve conter:**

```json
{
   "preventableDiseases": [
            "Tuberculose miliar",
            "Tuberculose meníngea"
        ]    
}
```

**Resposta [200]**

```json
{
    "message": "Lista de doenças evitáveis atualizada com sucesso"
}
```

## PATCH (Atualização das vacinas disponíveis numa Unidade de Saúde)

**http://localhost:8080/health-clinics/update-vaccines/:id**

**O que a URL deve conter:**

```json
"http://localhost:8080/health-clinics/update-vaccines/5fd304bc5c9fb72b70ffc826"

//Como paramêtro, enviamos o id da Unidade de Saúde cujo campo 'vaccines' queremos modificar
```

**O que o body deve conter:**

```json
{
    "vaccines": [
        {
            "_id": "5ad302841df15d344cfc18d8"
        },
        {
            "_id": "5yd30433859cd148209be495"
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

**http://localhost:8080/health-clinics/update-address/:id**

**O que a URL deve conter:**

```json
"http://localhost:8080/health-clinics/update-address/5fd304bc5c9fb72b70ffc826"

//Como paramêtro, enviamos o id da Unidade de Saúde cujo campo 'address' queremos modificar
```

**O que o body deve conter:**

```json
{
    "address": {
        "street": "Estradas dos Passarinhos Azuis, 956",
        "zipcode": "53270110"
    }
}
```

**Resposta [200]**

```json
{
    "message": "O endereço da unidade de Saúde selecionada foi atualizado com sucesso"
}
```


## DELETE (Apagando uma unidade de saúde do sistema)

**http://localhost:8080/health-clinics/delete/:id**

**O que a URL deve conter**

```json
"http://localhost:8080/unidades-de-saude/deletar/5fd304bc5c9fb72b70ffc826"

//No endpoint, como parâmetro, devemos passar o ID da unidade de saúde cujo cadastro deve ser apagado
```

**Resposta [200]**

```json
{
    "message":"O cadastro da unidade de saúde de id ${id} foi apagado com sucesso"
}
```
## DELETE (Apagando uma vacina do sistema)

**http://localhost:8080/vaccines/delete/:id**

**O que a URL deve conter**

```json
"http://localhost:8080/vaccines/delete/5fd306395c9fb72b70ffc828"

//No endpoint, como parâmetro, devemos passar o ID da vacina que queremos apagar do banco de dados
```

**Resposta [200]**

```json
{
    "message":" A vacina selecionada foi apagada com sucesso"
}
```

## GET (Listando todas as vacinas cadastradas)

**http://localhost:8080/vaccines/**

## GET (Listando as vacinas filtradas pelo lote)

**http://localhost:8080/vaccines/batch?batch=BCG2021BR**

## GET (Listando pelo nome de uma vacina especificamente)

**http://localhost:8080/vaccines/vaccine?vaccine=Covid**

## GET (Listando todas as Unidades de Saúde Cadastradas)

**http://localhost:8080/health-clinics/**

## GET (Listando todas as Unidades de Saúde por Bairro)

**http://localhost:8080/health-clinics/borough?borough=Ouro+Preto**

## GET (Listando as Unidades de Saúde por Vacina desejada)

**http://localhost:8080/health-clinics/vaccine?vaccine=BCG**

## GET (Pesquisando as Unidades de Saúde por Vacina e doses desejadas)

**http://localhost:8080/health-clinics/vaccine-dose?vaccine=Covid&dose=1ª+dose**