# Testing mysql with nextjs using serverless-mysql
### .env.local.template needs to be renamed to .env.local and input your db settings

### posts to import in mysql db for testing
    ```
DROP TABLE IF EXISTS `posts`;
CREATE TABLE posts(
   title   VARCHAR(44) NOT NULL PRIMARY KEY
  ,content VARCHAR(49) NOT NULL
);
INSERT INTO posts(title,content) VALUES ('This is all about end points','This is all about api end points111');
INSERT INTO posts(title,content) VALUES ('How to guide on SSR','This is all about server side rendering');
INSERT INTO posts(title,content) VALUES ('My first post','This is my first post..I have nothing much to say');
INSERT INTO posts(title,content) VALUES ('A post','Yet another post');
INSERT INTO posts(title,content) VALUES ('Last years post','This post is from last year');
```