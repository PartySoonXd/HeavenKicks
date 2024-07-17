<picture>
  <img alt="HistArts logo" src="https://github.com/PartySoonXd/HeavenKicks/blob/13b07888c77c66d1c347ba14dddd0b16cdc760ee/client/public/Logo.svg">
</picture>

## Description
HeavenKicks it is the sneaker online store that was made as a portfolio project. Here you can find a lot of sneakers from different brands. This website is created for people who want to buy sneakers for everyday wear or looking for some rare collectable pairs. After finishing this project I learned to work with **Strapi CMS**, **Stripe API** and **Google auth**.
## Stack
### Frontend 
- NextJS 
- MobX
- Axios 
### Backend 
- NextJS 
- Strapi
### Database
- PostgreSQL

## Run locally
1. Clone the project
```bash
git clone https://github.com/PartySoonXd/HeavenKicks.git
```
2. Go to the project directory
```bash
cd HeavenKicks
```
3. Install dependencies
```bash
npm install
```
4. Go to the client directory
```bash
cd client
```
5. Install dependencies
```bash
npm install
```
6. Rename .env.example to .env.local
7. Go to the admin directory
```bash
cd admin
```
8. Install dependencies
```bash
npm install
```
9. Rename .env.example to .env.local
10. Run app from root directory
```bash
npm run dev
```
11. Go to the [configuration](#configuration)

After this you can open apps in your browser
- Client - http://localhost:3000
- Admin - http://localhost:1337/admin

## Run with docker
***You need to have docker on your computer***
1. Go to the app directory
```bash
cd app
```
2. Rename .env.example to .env.local
3. Go to the admin directory
```bash
cd admin
```
4. Rename .env.example to .env.local
5. Run docker-compose from root directory
```bash
docker-compose up
```
6. Go to the [configuration](#configuration)

After this you can open apps in your browser
- Client - http://localhost:3000
- Admin - http://localhost:1337/admin

## Configuration
1. Open `admin/.env.local` and complete required variables
2. Open `client/.env.local` and complete required variables
3. Go to http://localhost:1337/admin and create new user
4. Open Google Auth plugin on home page of admin panel and configure
    - Create a google project from the [Google Cloud Console](https://console.cloud.google.com/projectcreate?previousPage=%2Fcloud-resource-manager%3Fproject%3D%26folder%3D%26organizationId%3D).
    - Create OAuth Consent Screen (Nav Menu -> APIs & Services -> [OAuth consent screen](https://console.cloud.google.com/apis/credentials/consent)).
    - Go to [Credentials](https://console.cloud.google.com/apis/credentials), click create credentials -> OAuth Client ID
    - Input the CLIENT_ID, CLIENT_SECRET, REDIRECT URL & the Scopes in the plugin page of Strapi, and save it.
### Just for docker
1. In `admin/.env.local` change value of ```DATABASE_HOST``` variable into ```postgres``` and ```@localhost``` in ```DATABASE_URL``` into ```@postgres```

## Feedback
Vladislav Belomestnykh - vladislav.webdeveloper@gmail.com
