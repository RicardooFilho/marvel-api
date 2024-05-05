 <h1>Documentação Prova Prática Bussola - Marvel API (King in Black)</h1>
    <h2>Characters</h2>
    <h3>GET - /api/characters</h3>
    <p>Retorna todos os characters cadastrados no banco</p>
    <p>Exemplo de retorno:</p>
    <pre><code>[
        {
        "_id": "6636cc889a09d997d78aa1b3",
        "name": "Avengers",
        "description": "Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle. With a roster that has included Captain America, Iron Man, Ant-Man, Hulk, Thor, Wasp and dozens more over the years, the Avengers have come to be regarded as Earth's No. 1 team.",
        "createdAt": "2024-05-05T00:02:16.093Z",
        "updatedAt": "2024-05-05T00:02:16.093Z",
        "__v": 0
    },
    {
        "_id": "6636cc889a09d997d78aa1b5",
        "name": "Doctor Strange",
        "description": "",
        "createdAt": "2024-05-05T00:02:16.404Z",
        "updatedAt": "2024-05-05T00:02:16.404Z",
        "__v": 0
    },
    {
        "_id": "6636cc889a09d997d78aa1b7",
        "name": "Eddie Brock",
        "description": "",
        "createdAt": "2024-05-05T00:02:16.723Z",
        "updatedAt": "2024-05-05T00:02:16.723Z",
        "__v": 0
    }
    ]
    </code></pre>
    <p>Typagem do Retorno</p>
    <pre><code>[
        "id": String,
        "name": String,
        "description": String,
        "createdAt": Timestamp,
        "updatedAt": Timestamp
    ]
    </code></pre>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>200 - Retorna os characters com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>GET - /api/characters/:id</h3>
    <p>Retona um character específico pelo id</p>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>200 - Retorna o character com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>POST - /api/characters</h3>
    <p>Realiza a criação de um novo character</p>
    <p>Corpo Necessário:</p>
    <pre><code>{
        "name": String,
        "description": String
    }
    </code></pre>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>201 - Realizou a criação do novo character com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>PUT - /api/characters/:id</h3>
    <p>Realiza a atualização de um character específico pelo id com o corpo passado na requisição</p>
    <p>Corpo Necessário:</p>
    <pre><code>{
        "name": String,
        "description": String
    }
    </code></pre>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>200 - Realizou a atualização do character com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>DELETE - /api/characters/:id</h3>
    <p>Realiza a exclusão de um character específico pelo id</p>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>204 - Realizou a exclusão do character com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>GET - /api/characters/count</h3>
    <p>Retorna a quantidade de characters no banco</p>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>200 - Retona a contagem com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>GET - /api/characters/description-gt-50</h3>
    <p>Retorna os characters que possuem uma descrição cujo tamanho é maior que 50</p>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>200 - Retona os characters filtrados com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h2>Comics</h2>
    <h3>GET - /api/comics</h3>
    <p>Retorna todos as comics do banco</p>
    <p>Exemplo de retorno:</p>
    <pre><code>[
        {
        "_id": "6636cc8c9a09d997d78aa1c1",
        "digitalId": 0,
        "title": "King in Black (2020) #5 (Variant)",
        "issueNumber": 5,
        "variantDescription": "Variant",
        "description": "WHAT'S A GOD TO A NONBELIEVER?",
        "isbn": "",
        "diamondCode": "JAN210528",
        "format": "Comic",
        "pageCount": 48,
        "createdAt": "2024-05-05T00:02:20.833Z",
        "updatedAt": "2024-05-05T00:02:20.833Z",
        "__v": 0
    },
    {
        "_id": "6636cc8d9a09d997d78aa1c3",
        "digitalId": 0,
        "title": "King in Black (2020) #5 (Variant)",
        "issueNumber": 5,
        "variantDescription": "Variant",
        "description": "WHAT'S A GOD TO A NONBELIEVER?",
        "isbn": "",
        "diamondCode": "JAN210523",
        "format": "Comic",
        "pageCount": 48,
        "createdAt": "2024-05-05T00:02:21.145Z",
        "updatedAt": "2024-05-05T00:02:21.145Z",
        "__v": 0
    }
    ]
    </code></pre>
    <p>Typagem do Retorno</p>
    <pre><code>[
        "id": String,
        "digitalId": Number,
        "title": String,
        "issueNumber": Number,
        "variantDescription": String,
        "description": String,
        "isbn": String,
        "diamondCode": String,
        "format": String,
        "pageCount": Number,
        "createdAt": Timestamp,
        "updatedAt": Timestamp
    ]
    </code></pre>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>200 - Retona as comics com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>GET - /api/comics/:id</h3>
    <p>Retona uma comic específica pelo id</p>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>200 - Retona a comic com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>POST - /api/comics</h3>
    <p>Realiza a criação de uma nova comic</p>
    <p>Corpo Necessário:</p>
     <pre><code>{
        "digitalId": Number,
        "title": String,
        "issueNumber": Number,
        "variantDescription": String,
        "description": String,
        "isbn": String,
        "diamondCode": String,
        "format": String,
        "pageCount": Number
    }
    </code></pre>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>201 - Realizou a criação da nova comic com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>PUT - /api/comics:id</h3>
    <p>Realiza a atualização de uma comic específica do banco</p>
    <p>Corpo Necessário:</p>
     <pre><code>{
        "digitalId": Number,
        "title": String,
        "issueNumber": Number,
        "variantDescription": String,
        "description": String,
        "isbn": String,
        "diamondCode": String,
        "format": String,
        "pageCount": Number
    }
    </code></pre>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>200 - Realizou a atualização da comic com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>DELETE - /api/comics/:id</h3>
    <p>Realiza a exclusão de uma comic do banco</p>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>204 - Realizou a exclusão com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>GET - /api/comics/count</h3>
    <p>Retorna a quantidade de comics do banco</p>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>200 - Realizou a contagem com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>GET - /api/comics/pages-gte-50</h3>
    <p>Retorna as comics que possuem mais de 50 páginas</p>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>200 - Retornou as comics com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h2>Creators</h2>
    <h3>GET - /api/creators</h3>
    <p>Retorna todos os creators cadastrados no banco</p>
    <p>Exemplo de retorno:</p>
    <pre><code>[
        {
        "_id": "6636cc9b9a09d997d78aa205",
        "firstName": "Jesus",
        "middleName": "",
        "lastName": "Aburtov",
        "suffix": "",
        "fullName": "Jesus Aburtov",
        "createdAt": "2024-05-05T00:02:35.808Z",
        "updatedAt": "2024-05-05T00:02:35.808Z",
        "__v": 0
    },
    {
        "_id": "6636cc9c9a09d997d78aa207",
        "firstName": "Erick",
        "middleName": "",
        "lastName": "Arciniega",
        "suffix": "",
        "fullName": "Erick Arciniega",
        "createdAt": "2024-05-05T00:02:36.152Z",
        "updatedAt": "2024-05-05T00:02:36.152Z",
        "__v": 0
    },
    {
        "_id": "6636cc9c9a09d997d78aa209",
        "firstName": "Ian",
        "middleName": "",
        "lastName": "Bederman",
        "suffix": "",
        "fullName": "Ian Bederman",
        "createdAt": "2024-05-05T00:02:36.459Z",
        "updatedAt": "2024-05-05T00:02:36.459Z",
        "__v": 0
    }
    ]
    </code></pre>
    <p>Typagem do Retorno</p>
    <pre><code>[
        "id": String,
        "firstName": String,
        "middleName": String,
        "lastName": String,
        "suffix": String,
        "fullName": String,
        "createdAt": Timestamp,
        "updatedAt": Timestamp
    ]
    </code></pre>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>200 - Retorna os creators com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>GET - /api/creators/:id</h3>
    <p>Retona um creator específico pelo id</p>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>200 - Retorna o creator com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>POST - /api/creators</h3>
    <p>Realiza a criação de um novo creator</p>
    <p>Corpo Necessário:</p>
    <pre><code>{
        "firstName": String,
        "middleName": String,
        "lastName": String,
        "suffix": String,
        "fullName": String
    }
    </code></pre>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>201 - Realizou a criação do novo creator com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>PUT - /api/creators/:id</h3>
    <p>Realiza a atualização de um creator específico pelo id com o corpo passado na requisição</p>
    <p>Corpo Necessário:</p>
    <pre><code>{
        "firstName": String,
        "middleName": String,
        "lastName": String,
        "suffix": String,
        "fullName": String
    }
    </code></pre>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>200 - Realizou a atualização do creator com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>DELETE - /api/creators/:id</h3>
    <p>Realiza a exclusão de um creator específico pelo id</p>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>204 - Realizou a exclusão do creator com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>
    <h3>GET - /api/creators/count</h3>
    <p>Retorna a quantidade de creators no banco</p>
    <p>Códigos de Resposta:</p>
    <ul>
        <li>200 - Retona a contagem com sucesso</li>
        <li>500 - Erro interno do servidor</li>
    </ul>