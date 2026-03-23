# Imagem base
FROM node:20-alpine

# Diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Gera o build
RUN npm run build

# Expõe a porta da aplicação
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "start"]
