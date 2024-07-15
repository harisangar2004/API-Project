import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from 'react-bootstrap';
import Layout from "../layout/Layout";
import * as userService from "../../services/user.service.js";
import { NavLink } from "react-router-dom";

const UsersList = () => {
    const [users, setUsers] = useState({});

    const fetchUsers = async () => {
        const response = await userService.retrieveAllUser();
        setUsers(response);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Layout >
            <h3 className="text-center mb-5 ">Users</h3>
            {Object.values(users).map(user => (
                <Row key={user.id} className="justify-content-center">
                    <Col>
                        <Card >
                            <Card.Body >
                                <h4>{user.name}</h4>
                                <p>{user.email}</p>
                                {user.city && user.country && (
                                    <p>
                                        {user.city} - {user.country}
                                    </p>
                                )}
                                <Button variant="primary" as={NavLink} to={`/edit/${user.id}`}>
                                    Edit
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Layout>
    )
}

export default UsersList;