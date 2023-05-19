import React from 'react';
import useTitle from '../allHooks/useTitle';

const Blog = () => {
  useTitle('Blog');
  return (
    <div className='h-full '>
      <h1 className='text-center text-bold mt-7 text-5xl'>Blog </h1>


      <div className='text-center' >
        {/* question 1 */}
        <div className=' m-10 p-10 bg rounded'>
          <h1 className='text-3xl text-bold  my-5'>What is an access token?</h1>

          <div className="overflow-x-auto">
            <p>
              When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server.
              When a client application needs to access protected resources on a server on behalf of a user, the access token lets the client signal to the server that it has received authorization by the user to perform certain tasks or access certain resources.
            </p>



            <br />
            <h1 className='text-3xl text-bold  my-5'>What is a refresh token?</h1>
            <p>
              Refresh token for security purposes, access tokens may be valid for a short amount of time.
              Once they expire, client applications can use a refresh token to "refresh" the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again
            </p>
            <br />
            <h1 className='text-3xl text-bold  my-5'>where should we store access token and refresh token on the client-side?</h1>

            <p>
              We can store our jwt token in our browser local storage. But its not fully secure to store jwt token in our local storage. We should store jwt tokens on HTTP only cookie.
            </p>

          </div>
        </div>


        {/* question 2 */}
        <div className=' m-10 p-10 bg rounded'>
          <h1 className='text-3xl text-bold  my-5'>Compare SQL and NoSQL databases?</h1>
          <div className="overflow-x-auto">
            <ol >
              <li > SQL databases are relational, and NoSQL databases are non-relational.</li>
              <li>SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
              <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
              <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
              <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
              </li>
            </ol>
          </div>
        </div>



        {/* question 3 */}
        <div className=' m-10 p-10 bg rounded'>
          <h1 className='text-3xl text-bold  my-5'>What is express js? What is Nest JS ?</h1>

          <div className="overflow-x-auto">
            <ul>
              <li>Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.

                Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application.</li>
              <br />
              <li>NestJS is a popular open-source, back-end framework for Node.js and TypeScript-based, server-side applications. It is intended to provide a solid foundation for developing server-side applications by leveraging well-known patterns and the best practices from other frameworks such as Angular, Express.js, and others.</li>
            </ul>
          </div>
        </div>

        {/* question 4 */}
        <div className=' m-10 p-10 bg rounded'>
          <h1 className='text-3xl text-bold  my-5'>What is MongoDB aggregate and how does it work?</h1>
          <div className="overflow-x-auto">
            <p>
              Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
            </p>
            <br />
            <p>
              MongoDB Aggregation uses an aggregate() method to perform the aggregation operations. Basically, this aggregation operation practices data records and provides calculated results. The aggregation operations assemble values from various documents together and are able to execute a range of operations, such as average, sum, maximum, minimum, etc., on the assembled data to provide only a result. A corresponding of MongoDB Aggregation in SQL is count(*) and with the group by. MongoDB Aggregation is identical to the aggregate function provided in SQL.
              MongoDB supports three techniques to execute aggregation operations:
              <ul>
                <li>✔ Single-purpose aggregation</li>
                <li>✔ Aggregation pipeline</li>
                <li>✔ Map-reduce function</li>
              </ul>
              Hence, aggregations are applied to a structure of query operations to the documents in a collection, decreasing and changing them as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; <h1>Blog page coming soon</h1>