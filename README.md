<img alt="HeavenKicks logo" src="https://github.com/PartySoonXd/HeavenKicks/blob/master/client/public/Logo.svg">

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
4. Install dependencies for applications
```bash
npm run deps
```
5. Go to the `client` directory and rename **.env.example** to **.env.local**
6. Go to the `admin` directory and rename **.env.example** to **.env.local**
7. Go to the [configuration](#configuration)

After this you can open apps in your browser
- Client - http://localhost:3000
- Admin - http://localhost:1337/admin

## Run with docker
***You need to have docker on your computer***
1. Clone the project
```bash
git clone https://github.com/PartySoonXd/HeavenKicks.git
```
2. Go to the `client` directory and rename **.env.example** to **.env.local**
3. Go to the `admin` directory and rename **.env.example** to **.env.local**
4. In `admin/.env.local` change value of ```DATABASE_HOST``` variable into ```postgres``` and ```@localhost``` in ```DATABASE_URL``` into ```@postgres```
5. Run docker-compose from root directory
```bash
docker-compose up
```
6. Go to the [configuration](#configuration)

After this you can open apps in your browser
- Client - http://127.0.0.1:3000
- Admin - http://localhost:1337/admin

## Configuration
### Locally
1. Install [postgreSQL](https://www.postgresql.org/download/) on your computer
    - In process of installation you need to set password(default: root) ***similar with values in `admin/.env.local`***
2. Init database from root directory
```bash
npm run db
```
3. Run apps from root directory
```bash
npm run dev
```
##
1. Open `admin/.env.local` and complete required variables
2. Open `client/.env.local` and complete required variables
3. Go to http://localhost:1337/admin and create new user
4. Go to settings -> Config Sync(Interface) and click on Import button
5. Open Google Auth plugin on home page of admin panel and configure
    - Create a google project from the [Google Cloud Console](https://console.cloud.google.com/projectcreate?previousPage=%2Fcloud-resource-manager%3Fproject%3D%26folder%3D%26organizationId%3D).
    - Create OAuth Consent Screen (Nav Menu -> APIs & Services -> [OAuth consent screen](https://console.cloud.google.com/apis/credentials/consent)).
    - Go to [Credentials](https://console.cloud.google.com/apis/credentials), click create credentials -> OAuth Client ID
    - Input the CLIENT_ID, CLIENT_SECRET, REDIRECT URL & the Scopes in the plugin page of Strapi, and save it

## Feedback
Vladislav Belomestnykh - vladislav.webdeveloper@gmail.com
