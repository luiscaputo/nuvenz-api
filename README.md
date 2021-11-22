### **Documentação da API**:

_base url_ : `http://localhost:8080/`

## Instalação

1. npm install ou yarn para instalar as depêndencias
2. Criar um Banco de Dados em MySQL com o nome: _ nuvenz_api _ e Exportar o ficheiro nuvenz_api.sql localizado em src/dump
3. Dentro do directorio `src/insomnia/insomnia.json`
   Exportar esse ficheiro lá no insominia do seu computador
4. No terminal: yarn dev

### **Rodando no Docker**

Basta abrir o terminal no diretorio do projecto e rodar o seguinte:

1.  `docker-compose build/sudo docker-compose build` - no windows/Linux
2.  `docker-compose up -d/sudo docker-compose up -d` - Para rodar a o container em backGround
3.  `docker-compose up/docker-compose up` - Para rodar a aplicação também
4.  Rode um `docker ps/sudo docker ps` - Para verificar se os containers estão rodando
5.  Testar os endpoints

## **Tecnologias/Ferramentas usadas**

- NodeJs
- ExpressJs
- TypeScript
- MySQL
- typeorm
- docker
- Lint
- Prettier
- Insomnia

**Att: Luís Caputo**
