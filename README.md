# Demo flight app
This app consists of front-end (Angular) and back-end (Nestjs).<br>
You need to install nodejs and npm to start the app.<br>
Go to the server directory and you'll see a dist folder which contains the built files of the back-end and a web folder which contains the web built files.<br>
In this server directory, install all back-end dependencies by using `npm install` and then simply start the app by using `node dist/main`<br>
If you want to develop the project by yourself, please refer to the README in the server or web folder.

# How to run the application
## FRONT END BUILD
The Angular front end needs to be built and deployed to the server/web directory 
```
cd web
npm install -g @angular/cli
npm install
npx ng build
```

The compiled front-end application is now in the web/dist/web directory 
We need to copy it to the server/web directory

```
cp -Rf dist/web ../server/
```

## SERVER BUILD
Next we go to the server directory and start up the complete application.

```cd server
npm install -g @nestjs/cli
npm install 
nest start 
```

The application should now be running on port 3000 (http://localhost:3000)
The API docs can be found on http://localhost:3000/api_doc/