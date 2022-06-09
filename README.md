# hello-fullcycle


Para rodar a imagem da aplicação GO 

> docker pull oliveiraricardo/hello-fullcycle

Para a aplicação node com nginx os fontes estão em app_node

O docker-compose.yml está em app_node

Os fontes js estão em app_node/node

As configurações do nginx esé em app_node/nginx

É preciso criar a tabela people no MySQL com o script

> CREATE TABLE people ( id int not null auto_increment, name varchar(255), primary key (id));