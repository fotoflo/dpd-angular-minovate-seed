# dpd-angular-minovate-seed 
###### Start your awesome webs app on a simple yet powerful API in hours, not months. Everything you need is here.

### Try the [demo](http://)

dpd-angular-minovate-seed provides you with all the components of a generic webapp, ready to customize:

#### BASIC FUNCTIONS:
* An functioning angular app with nested views and routing all setup
* A simple and fast realtime REST API server, complete with socket.io push functionality.
* A basic form, file upload, email, login/registration and Facebook-Authentication already working with the api server
* A functioning test suite 

###Alternatives
[@rgolea](https://github.com/rgolea) has created a brilliant [Angular Material](https://material.angularjs.org/latest/#/) seed called [angular-deployed-admin](]https://github.com/rgolea/angular-deployd-admin)

## What is a seed?
Starting a project used to take a few weeks or even months just to get the most basic things working - home page, login, registration, building a lead-capture form, a data-input form, uploading a file, sending an email.

With a seed it takes minutes to start a project and have your basic functions.  Many frameworks come with some kind of basic seed - for example, to get started with a new rails project, you type ```rails new myapp``` and a blank app is magically created in the subdirectory myapp.

A seed takes care of all off the repetitive overhead that we spend so much time doing: With a seed, you have a ready to go project, just Npm install, bower install, and start a new branch. 


## What is [Deployd?](http://www.deployd.com/)
[![Deployd is "The simplest way to build an API"](http://static.splashnology.com/articles/Collection_of_Frameworks_for_Web_Design/Deployd.jpg)](http://www.youtube.com/watch?v=I_Jq1BVj6D0)

Basically it's a node.js REST API server that's easy as sin to use. And it supports realtime communication with Socket.io. And it has a bunch of [plugins](https://www.npmjs.com/browse/keyword/dpd) that do all sorts of great stuff, like allowing [file upload to amazon s3](https://www.npmjs.com/package/dpd-s3), [sending email](https://www.npmjs.com/package/dpd-email) or [sms](https://www.npmjs.com/package/dpd-twilio), or [push notifications](https://www.npmjs.com/package/dpd-notify), [connecting to Facebook](https://www.npmjs.com/package/dpd-passport), [run cron jobs](https://www.npmjs.com/package/dpd-jobs), etc. Of course it also supports just about any node module, or can even itself be used as a module from within [ExpressJS](http://expressjs.com/).

[Watch the YouTube video](http://www.youtube.com/watch?v=I_Jq1BVj6D0) and prepare to have your mind blown.

## What is [Minovate?](http://themeforest.net/item/minovate-angular-admin-dashboard/full_screen_preview/10068009?ref=fotoflo)


[![Minovate](https://0.s3.envato.com/files/131321566/01_preview1.__large_preview.png)](http://themeforest.net/item/minovate-angular-admin-dashboard/full_screen_preview/10068009?ref=fotoflo)


Minovate is a "premium admin dashboard powered by AngularJS. It’s built on popular Twitter Bootstrap v3 framework. Minovate is fully based on HTML5 + CSS3 standards. Is fully responsive and clean on every device and every browser.

Minovate contains many example pages with many ready to use elements and is strongly customizable. You can choose from 6 colors for header, branding, navbar and active element. You can toggle fixed navbar and header and choose from few premade layouts such as horizontal navbar, boxed layout or rtl layout.

Minovate works on every modern browser, any device and any screen size."

#License 
Please note that the full Minovate has a [paid license](http://themeforest.net/licenses/standard?license=regular&ref=fotoflo), but this seed file only has about 10% of minovate's functionality - I've removed charts and web templates, and PSDs and many other things, leaving only the 10% we web developers need most to get started. If you like Minovate, [buy it](http://themeforest.net/item/minovate-angular-admin-dashboard/10068009?ref=fotoflo) like I did, and use all the features (It's cheap).  If you use the Minovate in an commercial project, please make sure to read and abide by the license.

#### Alternatives:
You can try the free open source [rdash dashboard](http://rdash.github.io/)


## Install
```
$ git clone
$ npm install
$ bower install
$ karma start 
$ grunt serve
$ dpd -d
$ open http://localhost:2023/
```
* Clone the repository
* Install node dependancies
* Install front-end dependancies
* Start the test suite
* Compile the front end assets and start the front-end server
* Start the api server and open the api dashboard
* Open the front-end your default browser


## Getting Started With Development

### KEY CONCEPTS
#### Routes
#### Callbacks



### EXAMPLES
###### COMING SOON
#### Add a new API
#### Add a new factory or service
#### Add a new view & controller
#### Add a new test



## Example site: [http://callnotes.io](Callnotes.io)
*Make a pull request on this readme.md or pm @fotoflo to get your example added*
