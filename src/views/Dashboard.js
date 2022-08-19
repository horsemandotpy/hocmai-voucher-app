import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Pagination from 'react-bootstrap/Pagination';
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import dashboardApi from "api/dashboardApi";

function Dashboard() {

  const [comments, setTodos] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getComments() {
      const response = await dashboardApi.getList('comments');
      setTodos(response.data);
      setLoading(false);
    }
    getComments();


    async function create() {
      /* global data */
      const response = await dashboardApi.create('posts', data);

    }
  }, []);


  return (
    <>
      {<Container fluid>
        <Col md="12">
          <div className="text-right mb-3">
            <Link to="/amdin/user">
              <Button
                className="btn-fill"
                variant="primary"
              >
                Thêm mới +
              </Button>
            </Link>
          </div>
          <Card className="strpied-tabled-with-hover">
            <Card.Header>
              <Card.Title as="h4">Striped Table with Hover</Card.Title>
              <p className="card-category">
                Here is a subtitle for this table
              </p>
            </Card.Header>
            <Card.Body className="table-full-width table-responsive px-0">
              <Table className="table-hover table-striped">
                <thead>
                  <tr>
                    <th className="border-0">ID</th>
                    <th className="border-0">Name</th>
                    <th className="border-0">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    comments && comments.map((comment) => (
                      <tr key={comment.id}>
                        <td>{comment.id}</td>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                      </tr>
                      ))
                  }
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Container> }
    </>
  );
}

export default Dashboard;
