import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-4xl mt-6 text-indigo-950'>Some Questions and Answers</h1>
            <div className='bg-cyan-200 mt-8'>
                <h1 className='font-bold text-2xl mt-14 lg:ms-8 '>1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className='mt-5 lg:ms-8 font-semibold'>An access token is a tiny piece of code that contains a large amount of data. Information about the user, permissions, groups, and timeframes is embedded within one token that passes from a server to a users device. <br />A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.<br /> The main purpose of using a refresh token is to considerably shorten the life of an access token. The refresh token can then later be used to authenticate the user as and when required by the application without running into problems such as cookies being blocked, etc. If that does not make much sense, think of it this way:

                    When a browser makes a request to an API endpoint to use a resource provided only to authenticated users, the application would require the credentials of the user.<br />Another approach is... you can store Access Token / Refresh Token in a cookie with HTTPS-Enable = TRUE, so client cannot manipulate it. Then you write an OwinMiddleware that read the cookie and add access token in the request.
                    I used this approach because LocalStorage or SessionStorage are vulnerable to XSS attack.

                    On the other hand cookie is not mobile friendly..so if the client is mobile I do not see any harm to store tokens on mobile itself.</p>
                 
                 {/* question-2 */}
                 <h1 className='font-bold text-2xl mt-8 lg:ms-8 '>1.Compare SQL and NoSQL databases?</h1>  
                 <div className="overflow-x-auto">
  <table className="table w-full mt-5">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Sql Database</th>
        <th>NoSql Database</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>
          Tables with fixed rows and columns
          </td>
        <td>Document: JSON documents, Key-value: key-value pairs, Wide-column: tables with rows and dynamic columns, Graph: nodes and edges</td>
       
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Developed in the 1970s with a focus on reducing data duplication</td>
        <td>Developed in the late 2000s with a focus on scaling and allowing for rapid application change driven by agile and DevOps practices.</td>
      
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Oracle, MySQL, Microsoft SQL Server, and PostgreSQL</td>
        <td>Document: MongoDB and CouchDB, Key-value: Redis and DynamoDB, Wide-column: Cassandra and HBase, Graph: Neo4j and Amazon Neptune</td>
     
      </tr>
      <tr>
        <th>4</th>
        <td>Typically required</td>
        <td>
          Typically not required</td>
     
      </tr>
    </tbody>
  </table>
 </div>   
 <h1 className='font-bold text-2xl mt-8 lg:ms-8 '>3.What is express js? What is Nest JS ?</h1>         
 <p className='mt-5 lg:ms-8 font-semibold'>Express is a minimalist and flexible framework that provides a simple and intuitive API for building web applications with Node.js. Some of its key features and benefits include:

Simple and intuitive API: Express provides a simple and easy-to-use API that allows developers to quickly build web applications with Node.js.

Minimalist approach: Express follows a minimalist approach, which means that it provides only the essential features and leaves the rest to the developers.

Middleware support: Express provides built-in support for middleware, which allows developers to add functionality to their applications easily.<br/>
NestJS is a framework that is built on top of Express and provides additional features and benefits. Some of its key features and benefits include:

Dependency injection: NestJS provides built-in support for dependency injection, which makes it easier to manage dependencies and write modular and scalable code.

Modular architecture: NestJS follows a modular architecture, which allows developers to break their applications into smaller and more manageable modules.

Intuitive CLI: NestJS provides an intuitive CLI that makes it easy to create new applications, modules, controllers, and services.</p>

<h1 className='font-bold text-2xl mt-8 lg:ms-8 '>4.What is MongoDB aggregate and how does it work?</h1> 
<p className='mt-5 lg:ms-8 font-semibold'>
Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.

One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on. <br/>
$match stage – filters those documents we need to work with, those that fit our needs
$group stage – does the aggregation job
$sort  stage – sorts the resulting documents the way we require (ascending or descending)
The input of the pipeline can be a single collection, where others can be merged later down the pipeline.

The pipeline then performs successive transformations on the data until our goal is achieved.

This way, we can break down a complex query into easier stages, in each of which we complete a different operation on the data. So, by the end of the query pipeline, we will have achieved all that we wanted.
</p>

            </div>
        </div>
    );
};

export default Blog;