# MyMessages
    
                     *Development Environment*
Run 2 terminals

1. FRONTEND : ng serve
2. BACKEND: npm run server

CORS : Cross-origin resource sharing

- Occurs when client and server are in different host

3. MongoDB:
   db>collection>document

   * Recommended - For production and development use two different cluster in mongondb.But it will 
     cost money , so in this project one cluster is used. 

                      *Production Environment*

4. CLOUD : AWS DEPLOYMENT

     * NodeJS - Elastic Beanstalk(EB) , ANGULAR - S3
     * S3 is static is for static content, Elastic Beanstalk(EB) is for dynamic content
     * ng build  
  
  * AWS HOST URL

    DYNAMIC -
    For single app deployment(both node and angular in one port and one directory) 
    http://nodeangular-env.eba-84hhqj3h.ap-northeast-1.elasticbeanstalk.com/

    STATIC -
    For two apps deployment(one port FE and one port BE , 2 different directory)
    http://my-messages-mean-stack.s3-website-ap-northeast-1.amazonaws.com/

  * DEPLOYING OPTIONS 
    > 2 options

        1. deploy 2 separated apps
           . angular app
              # static host only(only serve html,css,js), e.g AWS S3,Firebase
           . node REST API
              # Node.js host , e.g AWS EC2,EB,Heroku
          Two apps means two ports/domains.That means we need also 2 app/instances/setup to deploy
           localhost:3000 needed for backend
           localhost;4200 needed for frontend 
          N.B : CORS headers are absolutely required
      
        2. deploy 1 combined app
           . Node REST API which renders the angular app too
          N.B : CORS headers are not required
          N.B : To make this we have to modify outputPath:api/anyname.
                This will make a new directory(folder must not exist previously) 
                naming as anynamne while doing ng build.
          Only localhost:3000 will be runn for both backend and front end