## Pre-preparion

```bash
$ npm install -g generator-angular-fullstack
```

## Initialize:

```bash
$ mkdir yod3
$ cd yod3
$ yo angular-fullstack yod3
$ bower install --save jquery d3 nvd3
$ bower install angularjs-nvd3-directives --save
$ grunt serve
```

<blockquote>
[Bubble Chart](http://bl.ocks.org/mbostock/4063269)
</blockquote>


## TODO:

1. passport local-strategy
1. ui-router
1. angular-d3 and angular-nvd3
1. iphone, ng-touch
1. mongoose access
1. login user admin


## yo generator

```bash
$ yo angular-fullstack:endpoint message
$ yo angular-fullstack:endpoint iphone
$ yo angular-fullstack:endpoint d3
$ yo angular-fullstack:endpoint admin 

$ yo angular-fullstack:route d3
```

```bash
$ yo angular-fullstack:route iphone
$ yo angular-fullstack:route vendor_manager
$ yo angular-fullstack:route risk_officer
```


```bash
$ yo angular-fullstack:route mylogin
$ cd client/app/mylogin
$ bower init
$ ed .bowerrc 
{
    "directory": "login_components"
}
$ bower install angular-formly angular-formly-templates-bootstrap bootstrap api-check --save


// add factory/service into mylogin/ folder
$ yo angular-fullstack:factory mylogin
```

Update Gruntfile.js <code>injector:js</code> section to ignore /mylogin/**.js files out of client/index.html.

## Mongod
```bash
$ nohup mongod &
```

Use <code>Robomongo</code> to monitor.


## grunt

```bash
$ grunt serve
$ grunt test
$ grunt build
$ grunt serve:debug

```

#### Updating npm packages 

Default npm packages on Angular Full-stack generator is a bit old, so let's update to the latest versions using npm-check-updates.
```bash
$ npm install -g npm-check-updates
$ npm-check-updates -u
$ npm install
```

#### remove from bower.json
"angular-messages": "~1.4.7"

### Bugs & Fixs:


1. index.html: (auto-injector)
  package.json: grunt-injector
  Gruntfile.js: <code>injector</code> section
  
1. auth token
ngCookie: /api/users/me
