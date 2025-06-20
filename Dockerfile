# Étape 1 : Image de base minimale
FROM node:18-alpine

WORKDIR /app

# Copie des fichiers nécessaires
COPY package*.json ./
RUN npm install --omit=dev

COPY . .

# Créer un utilisateur non-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

CMD ["node", "src/app.js"]

