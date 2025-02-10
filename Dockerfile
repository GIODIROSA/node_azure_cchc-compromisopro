# Usar una imagen oficial de Node.js como base
FROM node:18

# Crear y establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Instalar netcat-openbsd (que proporciona nc)
RUN apt-get update && apt-get install -y netcat-openbsd

# Copiar archivos de dependencias para aprovechar la caché de Docker
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que corre la aplicación
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["./wait-for-it.sh", "database:5432", "--", "npm", "run", "dev"]
