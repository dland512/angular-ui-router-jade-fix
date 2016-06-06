# angular-ui-router-jade-fix
Companion code [for this post](http://ultravioletsoftware.com). Displays how to fix the issue with angular-ui router ui-views not showing up using jade templates.

## Requirements
* node
* npm

## Installation
    clone https://github.com/dland512/angular-ui-router-jade-fix.git
    cd angular-ui-router-jade-fix
    npm install
    node app

## Usage
Browse to http://localhost:3000

### Pages

* */broken* - the default page, will show you a page that displays the problem (the inner view will not be showing)

* */solution1* - shows the solution that uses `doctype html` at the type

* */solution2* - shows the solution that uses `div(class="ui-view")`

* */solution3* - shows the solution that uses `div(ui-view="")`

* */solution4* - shows the solution that uses `<div ui-view"></div>`
