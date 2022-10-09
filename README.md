# Dev-to

Dev is a clone from [Dev.to](https://dev.to), I create this version just to practice my skills in developement and learn new skills, The importance of practice in programming just cannot be ignored.
With repeated practice, you are bound to grow and is more likely to suppress all your previous achievements.

![dev-to](https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png)

### What is Dev-to?

According to the **[about page](https://dev.to/about)**, Dev.to is:

> Where programmers share ideas and help each other grow. It is an online community for sharing and discovering great ideas, having debates, and making friends. Anyone can share articles, questions, discussions, etc.

In my own version, I have implemented the main feature of the application, which is the ability to publish, edit and delete an article.

## Built With

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white) ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![CircleCI](https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Dev.to blog](https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![auth0](https://cdn.auth0.com/oss/badges/a0-badge-dark.png)

## Live demo :tv:

[Vercel link, Click here to visit our app](https://blog-sigma-steel.vercel.app/)

## User Journey :airplane:

I can sign up in the app by selecting one of the list strategy login provided, you don't need to create a new account.
When I login I can create an article by click on create post on the top right of the page on from the drop list.
I can read any article in the feed, and interact with it.
I can follow a publisher I prefer, and save the article I like.

## Getting Started 📣

**1. You can start by cloning the repository on your local machine by running:**

```sh
git clone https://github.com/mAbadsa/blog.git
cd blog
```

**2. Install all of the dependencies:**

```sh
yarn install
```

### **3. Database Setup: 📋**

1. If you have pgcli skip this step.

   - Install PostgreSQL database
   - Alongside pgcli
   - [instructions on how to install pgcli](https://www.pgcli.com/install)

2. Open your terminal, run pgcli, navigate through the project to those paths:

   ```
   ./src/pages/api/models/databaseConfig.sql
   ./src/pages/api/models/build.sql
   ```

3. Copy each file path and perform the following command for each file:

   ```
   \i <paste your copied path to the file>
   ```

   add your Environment variables in `./.env.local` file

   ```
   # Data base
   DATABASE_URL= # Your production PostgreSQL connect
   DEV_DATABASE_URL=# Your development PostgreSQL connect
   ```

### **4. Auth0 Configuration: 🔑**

Create a Regular Web Application in the [Auth0 Dashboard](https://auth0.auth0.com/u/login/identifier?state=hKFo2SBxam5uRWd1SzRBd3NpTEdVXzhLUGM1bUhaNXg5ZEhCSKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEtqamluU3BRQ25qR01naHNBaTJ2NkhxQ1dkUVJuTUU1o2NpZNkgekVZZnBvRnpVTUV6aWxoa0hpbGNXb05rckZmSjNoQUk#/applications).

> If you're using an existing application, verify that you have configured the following settings in your Regular Web Application:

- Click on the "Settings" tab of your application's page.
- Scroll down and click on the "Show Advanced Settings" link.
- Under "Advanced Settings", click on the "OAuth" tab.
- Ensure that "JsonWebToken Signature Algorithm" is set to RS256 and that "OIDC Conformant" is enabled.

Next, configure the following URLs for your application under the "Application URIs" section of the "Settings" page:

- **Allowed Callback URLs**: `http://localhost:3000/api/auth/callback`
- **Allowed Logout URLs**: `http://localhost:3000/`
  Take note of the **Client ID**, **Client Secret**, and **Domain** values under the "Basic Information" section. You'll need these values in the next step.

#### Basic Setup

**Configure the Application**
You need to allow your Next.js application to communicate properly with Auth0. You can do so by creating a `.env.local` file under your root project directory that defines the necessary Auth0 configuration values as follows:

```sh
    # A long, secret value used to encrypt the session cookie
    SESSION_COOKIE_SECRET='your secret word'
    # The base url of your application
    NEXT_PUBLIC_BASE_URL='http://localhost:3000'
    NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI='/'
    NEXT_PUBLIC_REDIRECT_URI='/api/auth/callback'
    # The url of your Auth0 tenant domain
    NEXT_PUBLIC_AUTH0_DOMAIN='https://YOUR_AUTH0_DOMAIN.auth0.com'
    # Your Auth0 application's Client ID
    NEXT_PUBLIC_AUTH0_CLIENT_ID='YOUR_AUTH0_CLIENT_ID'
    NEXT_PUBLIC_AUTH0_SCOPE='email profile'
    # Your Auth0 application's Client Secret
    AUTH0_CLIENT_SECRET='YOUR_AUTH0_CLIENT_SECRET'
```

### **5. setup Cloudinary ⭐**

- You should login to [Cloudinary](https://cloudinary.com/) Account.
- You will gain [Cloud_Name], [Cloudinary_KEY], [Cloudinary_SECRET] environmental variables needed to upload images to database.

* add the Environment variables in `./.env.local` file

```sh
    # CLOUDINARY API VAR
    CLOUDINARY_NAME=# Your [User_Name]
    CLOUDINARY_API_KEY=# Your [Cloudinary_KEY]
    CLOUDINARY_API_SECRET=# Your [Cloudinary_SECRET]
```

**6. run the app locally:🔌**

```sh
yarn run dev
```

Now the app should be running at [http://localhost:3000](http://localhost:3000)

## Resources :mag:

- [React Library](https://reactjs.org/)
- [Nextjs](https://nextjs.o)
- [React-query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)
- [Redux toolkit](https://redux-toolkit.js.org/)
- [Styled-Components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [Node Js](https://nodejs.org/en/)
- [Express Framework](https://expressjs.com/)
- [Postgres](https://www.postgresql.org/)
- [Cloudinary](https://cloudinary.com/)
- [Material-UI](https://mui.com/)
- [moment](https://momentjs.com/)
