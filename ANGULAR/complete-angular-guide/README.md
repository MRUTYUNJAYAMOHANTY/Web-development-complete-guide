# CompleteAngularGuide (Repository is started with Version 13.3.0). This repository is getting  updated with latest next major version. Version change details for this work space is described in Version_changes.md
  * We are covering all angular concepts in individual concept wise folders/projects structure. 
  * We are incorporating common library setup.   
  * We have done a real time project wit UTC & e2e testing.
# create workspace (e.g MultipleApps)
  ng new MultipleApps --createApplication="false" --no-strict
  . For more on muliple-applications / workspace config refer angular.json file & the below 
    official docs
    https://angular.io/guide/workspace-config
# create application (e.g my-app)
  ng g application my-app --no-strict --force
# create component without spec files 
  ng g c component-name --skip-tests
  ## --no-strict is optional
     * It does strict = false in tsconfig.json
     * In this work-space most application are made having --no-strict false.
     * while installing an application choosed below options
        ? Would you like to add Angular routing? No
        ? Which stylesheet format would you like to use? CSS

** For more on Authentication checkout 
   projects\recipe_shopping-list\src\app\authentication.README.md
   projects\recipe_shopping-list\src\assets
# To run the project run below command 
    ng s recipe_shopping-list

# Hosting URL: https://ng-recipe-book-64c9d.web.app