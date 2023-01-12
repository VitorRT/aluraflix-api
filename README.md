
# ALURAFLIX 🍿

<div>
  <img src="https://uploaddeimagens.com.br/images/004/295/520/full/Design_sem_nome.png?1673473762" alt="aluraflix-logo"/>
<div/>
Neste projeto nós vamos construir o back-end para a plataforma de vídeos Aluraflix desenvolvimento uma API-REST que trata os possíveis erros e que sempre autentica quem for disparar qualquer requisição.

<hr/>

### Opa, prazer! Meu nome é Vitor  🧏🏾‍♂️
> Sou um desenvolvedor back-end com mentalidade de growth! <a href="" target="_blank">Vem me conhecer <a/> um pouco mais, tenho certeza que você vai gostar 😉

## Agradecimentos 
Antes de tudo, eu gostaria agradecer a algumas pessoas que colaboraram muito para a criação deste projeto. Se não fosse por essas pessoas eu teria muita dificuldade e talvez esse projeto nem iria sair. Então gostaria de agradecer ao <a href="https://www.linkedin.com/in/hugobereta/" target="_blank">Hugo Bereta<a/>, um amigo da comunidade do discord da Alura que ajudou bastante na modelagem dos dados, e gostaria de agradecer ao <a href="https://www.linkedin.com/in/matheusbattisti/" target="_blank">Matheus Battisti</a> do canal Hora de Codar, que ajudou com seu vídeo sobre autenticação usando o JWT.

## Considerações iniciais
_Antes de iniciar a documentação desta api, gostaria de escrever algumas considerações. Essa **API REST** foi feita inteiramente com o framework `Express.js` e com o **ORM** `sequelize` & `sequelize-cli` para as criações de modelos, migraçãos e sementes. Para a autenticação do usuário foi usado o `JWT - Json Web Token`  e para a encriptação dos dados foi usado a lib `bcrypt`. Sobre a modelagem de dados, é algo bem simples pois o foco deste projeto é criar mais intimidade com o sequelize e treinar as implementações dos requisitos de usuário na aplicação! Agora sim, podemos começar 🚀_

<hr/>

### 🗨 Vai usar? 
1. Baixe o projeto com o `git clone ...` ou em `.zip`.
2. Abra o terminal dentro da pasta do projeto e digite `npm install` para instalar o node_modules.
3. Rode o comando `npm start` e espere o servidor ficar online.
4. Antes de consumir a api, não se esqueça de ler sobre os `endpoints` ein. Obrigado e se divirta! 😁
> <small>by: VitorRT 💌<small/>


# Sobre o Projeto 🎬 🍿
![slide1-aluraflix](https://uploaddeimagens.com.br/images/004/296/465/full/Imagem_do_WhatsApp_de_2023-01-12_%C3%A0%28s%29_13.12.43.jpg?1673539986)

_A Aluraflix é um projeto de uma plataforma digital para vídeos, nela o cliente poderá cadastrar vídeos, adiciona-los a playlists, pesquisar por categorias e muito mais. Porém esse projeto está em desenvolvimento e precisa de um back-end que trate todos os requisitos de usuários e aplique as regras de negócio na plataforma. Além de um back-end o projeto também precisa de um banco de dados para armazenar todos os dados dos clientes e as demais entidades do sistema._

![slide2-aluraflix](https://uploaddeimagens.com.br/images/004/296/478/full/Imagem_do_WhatsApp_de_2023-01-12_%C3%A0%28s%29_13.06.48.jpg?1673540416)
_Como objetivos desse projeto nós vamos modelar os dados para entendermos como eles serão armazenados no banco de dados, vamos construir uma API no padrão REST  para melhor entrega de serviços web, e por fim vamos fazer o deploy e divulgar este projeto!_ <br/>
_Como meta desse projeto vamos desenvolver uma API compatível com qualquer framework front-end, ou seja, qualquer projeto front-end poderá usar e consumir dessa API, seja mobile, react, vue, etc. Também vamos colocar como meta realizar esse projeto no prazo de 4 semanas, sei que esse não é um grande projeto digno de meses de produção, mas para um começo está de bom tamanho. E por fim, mas não menos importante, vamos colocar como meta a segurança dos dados, ou seja, vamos criptografar dados que se forem expostos podem provocar um problema fatal._

## Modelagem de Dados 
> Antes de decidirmos qual será o SGBD que iremos utilizar, vamos modelar os dados primeiro.

![modelagem-dos-dados](https://uploaddeimagens.com.br/images/004/296/567/full/image.png?1673544625)
_Fiz essa modelagem com a minha interpretação, sei que não é a melhor modelagem mas ta de ótimo tamanho para esse projeto. Se você não concorda com alguma coisa dessa modelagem ou não entendeu algo, <a href="https://www.youtube.com/" target="_blank">pode me chamar!<a/>_


# Endpoints 🔚
### Cliente 🙋🏾‍♂️
Modelo   	| Endpoint			| Método			| Sobre	| BODY 	| Auth
  :---------: 	|    :------:			|     :-----:				|  :-----:	| :----:		| :---:
Cliente 		| /clients				| GET					| Selciona todos os clientes ativos  | FALSE  | TRUE
Cliente | /clients/id={id} | GET |	Seleciona apenas um cliente específico ativo | FALSE | TRUE
Cliente | /clients/signup | POST | Cadastra um novo cliente |  TRUE | FALSE
Cliente | /clients/login | POST | Loga o cliente no sistema | TRUE | FALSE
Cliente | /clients/id={id}/edit | PUT | Edita um cliente cadastrado | TRUE | TRUE
Cliente | /clienta/id={id}/delete | DELETE | Deleta um cliente cadastrado | FALSE | TRUE


### Video 🎥

Modelo   	| Endpoint			| Método			| Sobre	| BODY 	| Auth
  :---------: 	|    :------:			|     :-----:				|  :-----:	| :----:		| :---:
  Video | /videos | GET | Seleciona todos os videos públicos | FALSE | TRUE
  Video | /videos/id={id} | GET | Seleciona um vídeo específico | FALSE | TRUE
  Video | /videos/create | POST | Cadastra um novo vídeo no sistema | TRUE | TRUE
  Video | /videos/id={id}/edit | PUT | Edita um vídeo cadastrado | TRUE | TRUE
  Video | /videos/id={id} | DELETE | Deleta um vídeo cadastrado | FALSE | TRUE

### Playlist 🎦
Modelo   	| Endpoint			| Método			| Sobre	| BODY 	| Auth
  :---------: 	|    :------:			|     :-----:				|  :-----:	| :----:		| :---:
  Playlist | /playlists | GET | Seleciona todas as playlists públicas | FALSE | TRUE
  Playlist | /playlists/id={id} | GET | Seleciona uma playlist específica | FALSE | TRUE
  Playlist | /playlists/create | POST | Cadastra uma nova playlist | TRUE | TRUE
  Playlist | /playlists/id={id}/edit | PUT | Edita uma playlist cadastrada | TRUE | TRUE
  Playlist | /playlists/id={id}/delete | DELETE | Deleta uma playlist cadastrada | FALSE | TRUE
  Playlist | /playlists/id={id}/itens | GET | Seleciona todos os vídeos cadastrados de uma playlist | FALSE | TRUE
  Playlist | /playlists/id={id}/itens={item_id} | GET | Seleciona um vídeo específico cadastrado de uma playlist | FALSE | TRUE
  Playlist | /playlists/id={id}/itens/create | POST | Adiciona um novo vídeo em uma playlist | TRUE | TRUE
  Playlist | /playlists/id={id}/itens/delete | DELETE | Remove um vídeo de uma playlist | FALSE | TRUE
  Playlist | /playlists/private/client={client_id} | GET | Seleciona todas as playlists privadas de um cliente | FALSE | TRUE
  Playlist | /playlists/id={id}/private/client={client_id} | GET | Seleciona apenas uma playlist privada de um cliente | FALSE | TRUE

### Categoria 📼
Modelo   	| Endpoint			| Método			| Sobre	| BODY 	| Auth
  :---------: 	|    :------:			|     :-----:				|  :-----:	| :----:		| :---:
  Categoria| /categories| GET | Seleciona todas as categorias públicas | FALSE | TRUE
  Categoria| /categories/id={id} | GET | Seleciona uma categoria específica | FALSE | TRUE
  Categoria| /categories/create | POST | Cadastra uma nova categoria | TRUE | TRUE
  Categoria| /categories/id={id}/edit | PUT | Edita uma categoria cadastrada | TRUE | TRUE
  Categoria| /categories/id={id}/delete | DELETE | Deleta uma categoria cadastrada | FALSE | TRUE
  Categoria| /categories/id={id}/itens | GET | Seleciona todos os vídeos cadastrados em uma categoria | FALSE | TRUE
  Categoria| /categories/id={id}/itens={item_id} | GET | Seleciona um vídeo específico cadastrado de uma categoria | FALSE | TRUE
   Categoria| /categories/id={id}/itens/create | POST | Adiciona um novo vídeo em uma categoria | TRUE | TRUE
 Categoria| /categories/id={id}/itens/delete | DELETE | Remove um vídeo de uma categoria | FALSE | TRUE
  
  <br/>
  
> A Documentação ainda está sendo feita 📝
