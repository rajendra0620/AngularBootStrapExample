# AngularBootStrapExample
This I simple Angular BootStrap Example..

Before we start creating the demo application, let’s see the requirements needed for this tutorial.

Node.js and NPM installed .

Installing Angular CLI
npm install -g @angular/cli

After Install Check the version.
ng --version

Creating A Project
ng new angular-bootstrap-demo

The CLI will then ask you:
Would you like to add Angular routing?
Press Y. Next, it will ask you:
Which stylesheet format would you like to use?
Choose “CSS”.

Adding Bootstrap
First, navigate inside your project’s root folder:
cd angular-bootstrap-demo

Next, install Bootstrap 4 and jQuery from npm:
npm install --save bootstrap jquery

Finally, open the angular.json file and add the file paths of Bootstrap CSS and JS files as well as jQuery to the styles and scripts arrays under the build target:

"architect": {
  "build": {
    [...], 
    "styles": [
      "src/styles.css", 
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
      "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
      ]
    },
    
    Adding A Data Service:
    ng generate service data
    
    Adding Components:
     ng generate component home
     ng generate component contact-create
     ng generate component contact-list
     
     Adding Header And Footer Components:
     ng generate component header
     ng generate component footer
     
     Running The Angular Application:
     ng serve
     
     A live-reload development server will be running from the http://localhost:4200 address.
     Open your web browser and navigate to that address. You should see the following interface:
    
    In this tutorial, we’ve seen how to create a simple Angular application with a Bootstrap interface. You can find the complete source     code on GitHub .
