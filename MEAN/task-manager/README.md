##                               ROAD MAP STEPS                    ##

# DEFAULT PORTS : -

  ANGULAR  : 4200

  NODE     : 3000
  
  MONGOOSE : 27017

  IT CAN BE CHANGED ACCORDING TO USER 

  Command to run frontend and api .
  front end (should be in frontend directory): ng s
  api (should be in api directory): nodemon app.js
## STEP 1 : -
    CREATING THE UI WITH ANGULAR , BULMA
 
    REQUIRED NPM : -
       npm i bulma

## STEP 2 : -
    BUILDING THE API

    REQUIRED NPM : -
       npm i express 
       npm i mongoose
       npm i body-parser 
       npm i nodemon
## STEP 3 : -
    CONNECTING ANGULAR FRONTEND TO THE API

    REQUIRED : CORS error fixed 

    HELP SOURCE :
    https://enable-cors.org/server_expressjs.html

   CORS HEADERS MIDDLEWARE :

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

## STEP 4 : -
    CREATING LISTS AND DISPLAYING IN SIDEBAR
## STEP 5 : -
    NEW TASK BUTTON ADDED
## STEP 6 : -

## STEP 7 : -

## STEP 8 : -

## STEP 9 : -

## STEP 10 : -

## STEP 11 : -

## STEP 12 : -

## STEP 13 : -

## STEP 14 : -


