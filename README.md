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


#### remove from bower.json
"angular-messages": "~1.4.7",
