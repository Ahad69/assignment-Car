import React from "react";
import { Card, Table } from "react-bootstrap";
import './Blogs.css'

const Blogs = () => {
  return (
    <div className="container">
        <h1 className="text-center mt-5">Difference Between JavaScript and Node JS</h1>
      <Table bordered className="container table">
        <thead>
          <tr className="text-center fs-3">
            <th className="comparison">Comparison</th>
            <th>JavaScript</th>
            <th>Node JS</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>
            Type
            </td>
            <td className="fs-4">
            JavaScript is a programming language. It is running in any web browser with a proper browser engine.
            </td>
            <td className="fs-4">
            It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.
            </td>
          </tr>
          <tr>
              <td>Utility</td>
              <td className="fs-4">Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</td>
              <td className="fs-4">It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</td>
          </tr>
            <tr>
                <td>Running Engine</td>
                <td className="fs-4">JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</td>
                <td className="fs-4">Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</td>
            </tr>
        </tbody>
      </Table>
      <br />
      <br />
      <br />
      <h1 className="text-center">Difference Between SQL and NoSQL</h1>
      <Table bordered>
            <thead>
                <tr className="text-center fs-3">
                <th>SQL</th>
                <th>NoSQL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="fs-4"> 1 . SQL databases are vertically scalable.</td>
                    <td className="fs-4"> 1.  NoSQL databases are horizontally scalable.</td>
                </tr>
                <tr>
                    <td className="fs-4">2. SQL databases are table-based.</td>
                    <td className="fs-4">2. NoSQL databases are document, key-value, graph, or wide-column stores.</td>
                </tr>
                <tr>
                    <td className="fs-4">3. SQL databases are better for multi-row transactions.</td>
                    <td className="fs-4">3. NoSQL is better for unstructured data like documents or JSON.</td>
                </tr>
                <tr>
                    <td className="fs-4">4. SQL databases are relational.</td>
                    <td className="fs-4">4. NoSQL databases are non-relational.</td>
                </tr>
                <tr>
                    <td className="fs-4">5. SQL databases use structured query language and have a predefined schema.</td>
                    <td className="fs-4">5. NoSQL databases have dynamic schemas for unstructured data.</td>
                </tr>
                <tr>
                    <td className="fs-4">6. Some examples of SQL databases include MySQL, Oracle, PostgreSQL, and Microsoft SQL Server. </td>
                    <td className="fs-4">6. NoSQL database examples include MongoDB, BigTable, Redis, RavenDB Cassandra, HBase, Neo4j, and CouchDB. </td>
                </tr>
            </tbody>
      </Table>
    </div>
  );
};

export default Blogs;
