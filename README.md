# Projeto Alert Ambulance in Traffic - Projeto Final Reprograma Luana Cristina

O objetivo dessa API é receber mensagens da localidade em que a ambulância está e para onde está indo e quando estiver em engarrafamento ou trânsito lento enviar mensagens informando a rua e sentido que está indo para os agentes de trânsito gerenciar o tráfego para a ambulância passar com facilidade e sem esperar muito tempo.
As mensagens serão trocadas entre o responsável pela ambulância (o motorista) e os agentes de trânsito.
O que motivou a realizar essa API foi depois de ter observado diversas vezes ao passar pelo trânsito lento pilotando a moto pelo corredor e verificar que a sirene da ambulância não dar para ouvir em certa distância e o agente de trânsito não escuta há tempo de agilizar a passagem dos carros da rua em que a ambulância está para que ela chegue ao seu destino com mais rapidez.
Negócio:
1. O acesso a API será realizada apenas por meio dos agentes cadastrados e autorizados pelo órgão responsável (CTTU) e os motoristas das ambulâncias cadastrados e autorizados pelas prefeituras;
2. Apenas os agentes de trânsito e motorista da ambulância cadastrados e autorizados poderão fazer o login na API;
3. Inicialmente todos os agentes que tem o smartphone adquiridos pela CTTU. E depois para os agentes de trânsitos que estiverem trabalhando no dia em que a ambulância estiver na rua com pacientes.
4. Inicialmente funcionará apenas para a cidade do Recife e sua região metropolitana.
5. As mensagens terão o nome do responsável, placa da ambulância, local de partida e destino. A mensagem deve ser enviada no momento que ambulância estiver saindo do local que estiver socorrendo ou tranferindo o paciente. E deve ser enviada outra mensagem se estiver em um trânsito lento ou parado. 

## Referências

* http://www2.recife.pe.gov.br/node/289274
* https://ieeexplore.ieee.org/abstract/document/7972255
* https://d1wqtxts1xzle7.cloudfront.net/34427407/IIJEC-2014-07-03-3.pdf?1407884826=&response-content-disposition=inline%3B+filename%3DIPASJ_International_Journal_of_Electroni.pdf&Expires=1607005524&Signature=IVPbB-nVg9sy1r-FljO9ao68e96bP2NgDPzT2~KMA1C0h0hU7YwIWCpVSP0n-V4MktpFSUTQazUGcJ2pvhIoGJhzv0HdGTG58u~IT4AhJuW~sMelqeZECORL~DR0rMIqnnF80697KDK6~Uxe6gwWN2LB2RvBkw4adfSgzQhiPumBxPgkSNOxnFhtbGlqxvdNrY2PVr1KTWCwHXV1PiYUGp371EjEkmWmxMwxbGCZzu2fiiK71EKDswp548hz~S8B4HgQ4QFG2QGDp8f5Qcm8XMDz-49QZtYdCPaAT6nEJhQZ0VlzX5GLdl-ftj45WUHkn4j7xPU0FHmDIfQThVc9sQ__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA
* https://patents.google.com/patent/US8612131B2/en
* https://d1wqtxts1xzle7.cloudfront.net/39023780/42_Automatic.pdf?1444126631=&response-content-disposition=inline%3B+filename%3D42_Automatic.pdf&Expires=1607005536&Signature=Ug1-B2ozibKfsvwrGuAZ~0L6Tz~Et282sFUbdmsl7dnI4rEdKTMt9cMqjvEWZNZkSxfpCPE~ONcWoz2Mf8pVPkstzjUqe3j1uGMlWOU5KRNINtyjCSTrxs5SvTMqWn1P88lRnnZyTTV8fHt74wrOrkdqXszPTUlDBURJ6IKxtzBrlTgLKIMoU5wjPHmTZ1MP5k1AjrCSP3h1mu~Z82j9R0k0v4XP-9eRre2LViJ63kwhGpi~iIdpIIinS1SJyiMn9JQvE~uRPHqqy9Vl6MCxdC780uwcsvWhx1CrhI74qRPM5oGbAMjSWW8CkEPFCOw~rV4K4l4fuL3nRDFDEnjfLg__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA
* http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.675.3045&rep=rep1&type=pdf
* https://www.semanticscholar.org/paper/An-Approach-towards-Traffic-Management-System-using-Shaikh-Chandak/fb24269fb2ae1cc53dc22bdfea675d7e163c1264?p2df



## Diagrama do funcionamento da api

![Funcionamento API Alert Ambulance Traffic](FuncionamentoAPIAlertAmbulanceTraffic.png)

## Ferramentas, linguagens e arquitetura utilizadas
* Node.js
* Express.js
* Nodemon
* mongoDB
* JavaScript
* Postman
* MVC

## Rotas
GET
~~~JavaScript

~~~


GET
~~~JavaScript

~~~

GET
~~~JavaScript

~~~

GET
~~~JavaScript

~~~

GET
~~~JavaScript

~~~

GET
~~~JavaScript

~~~

POST Transit Agent
https://alert-ambulance.herokuapp.com/agents/create
~~~JavaScript
{
    "email": "luana-agent01@teste.com",
    "transitAgentName": "luana agent",
    "password": "teste123",
    "transitAgentCPF": "00400000001",
    "telephoneNumberAgent": "810000000000"
  }
~~~

POST ambulance
https://alert-ambulance.herokuapp.com/ambulances/create
~~~JavaScript
{
    "email": "luana2@teste.com",
    "driverName": "luana ambulance,
    "password": "luana",
    "driverCPF": "00000000002",
    "licensePlate": "23e456",
    "telephoneNumberAmbulance": "811234577"
}
~~~

POST message ambulance
https://alert-ambulance.herokuapp.com/message/create
~~~JavaScript
{
  "id": "5fd59afba21cf60017e69e57",
  "locationAmbulance": "Camaragibe", 
  "destinationHospital": "Recife",
  "routesToHopital": "Casa Forte"
}
~~~

POST message agent
http://localhost:3001/message/create
~~~JavaScript
{
  "id": "5fd5a153f4a8214eacba5858",
  "transitAgentlocation": "Camaragibe"
}
~~~
