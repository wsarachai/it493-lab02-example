# ---------- stage "dev": Vite dev server (ใช้ตอนพัฒนา) ----------
FROM node:24-alpine AS dev
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# ---------- stage "build": สร้างไฟล์ static ลง /app/dist ----------
FROM dev AS build
RUN npm run build

# ---------- stage "prod": Nginx เสิร์ฟไฟล์ที่ build แล้ว ----------
FROM nginx:1.31-alpine AS prod
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
