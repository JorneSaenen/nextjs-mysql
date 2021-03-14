#  mysql with nextjs using serverless-mysql

###  .env.local.template needs to be renamed to .env.local and input your db settings

###  posts to import in mysql db for testing
    DROP TABLE IF EXISTS `posts`;
    CREATE TABLE posts(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,  
    title VARCHAR(44) NOT NULL
    ,content VARCHAR(49) NOT NULL
    );
    INSERT INTO posts(title,content) VALUES ('Post title 1','Post body 1');
    INSERT INTO posts(title,content) VALUES ('Post title 2','Post body 2');
    INSERT INTO posts(title,content) VALUES ('Post title 3','Post body 3');
    INSERT INTO posts(title,content) VALUES ('Post title 4','Post body 4');
    INSERT INTO posts(title,content) VALUES ('Post title 5','Post body 5');

#### Packages used
#### Yarn
- https://yarnpkg.com/package/serverless-mysql
#### NPM
- https://www.npmjs.com/package/serverless-mysql
