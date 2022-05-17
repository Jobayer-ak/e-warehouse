import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <h2 className="py-4 fw-bold">Blog</h2>
        <div className="qa">
          <h3>What are the difference between Javascript and NodeJS ?</h3>
          <p className="lead">
            <span>Ans:</span>
            Javascipt is a programming language. It is used for writing scripts
            on the website. NodeJS is a Javascript runtime environment.
            Javascript only for client side and NodeJS mostly used on the
            server-sidel. Javascript is used in frontend development. NodeJS is
            used in server-side development. JS is the upgraded version of ECMA
            script that uses Chrom's V8 engine written in C++. NodeJS is written
            in C, C++ and JS. JS have framwork such as Next.js vue.js angular.js
            node.js etc also Nodejs have framework such as express loadash.
          </p>
        </div>
        <div className="qa">
          <h3>
            When should you use `nodejs` and when should you use `mongodb`?
          </h3>
          <p className="lead">
            <span>Ans:</span>
            Node.js shines in real-time web applications employing push
            technology over websockets. Node.js handles asynchronous
            input/output requests with a non blocking, single threaded event
            loop. It is quic iteration. It has huge open source community. It
            can do much more with less code. When need to send request and get
            responses are needed very quick, NodeJS should be the first choice.
            It remains light weight. MongoDB is non-relational NoSQl databases.
            It is document-oriented databases or a document store. Documents
            hold semistructured data, like JSON or XML format. Each document has
            unique key. With key we can find specific document. Mongo DB is good
            for Single View, sensor data, geospatial, Realtime analytics,
            catalog, inventory management Content management, Shopping
            Cart,Messaging application.
          </p>
        </div>
        <div className="qa">
          <h3>what are the differences between `sql` and `nosql` databases?</h3>
          <p className="lead">
            <span>Ans:</span>
            SQL is structured query language. NoSQL is unstructured quey
            language. SQL is relational database. NoSQL is non-relational,
            distributed database. SQL is Vertically scalable. NoSQL is
            horizontally scalable SQL is Table Based Database. NoSQL is document
            based, Graph based or key-value pair . SQL Pre-define schema. NoSQL
            is Dynamic schema. SQL is not preffered for large Datasets. NoSQL is
            largely Perffered for large Datasets.
          </p>
        </div>
        <div className="qa">
          <h3>What is the purpose of `jwt` and how does it work?</h3>
          <p className="lead">
            <span>Ans:</span>
            JWT stands for JSON WEB TOKEN. It is an open standard used to share
            information between two parties securely a cleint and a server.It is
            an encoded JSON containing a set of claims and a signature. It is
            usually used in the context of other authentication mechanisms like
            OAuth, OpenID to share user-related information. It is also a
            popular way to authenticate/authorize users in a microservice
            architecture.When it comes to API authentication and
            server-to-server authorization, JSON web token (JWT) is particularly
            a useful technology. In terms of Single Sign-On (SSO), it means that
            a service provider can receive trustworthy information from the
            authentication server.By sharing a secret key with the Identity
            Provider, the Service Provider can hash a part of a token it
            receives and compare it to the signature of the token. Now, if that
            result matches the signature, the SP knows that the information
            provided has come from the other entity possessing the key.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
