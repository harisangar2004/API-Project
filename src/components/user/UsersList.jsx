import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from 'react-bootstrap';
import Layout from "../layout/Layout";
import * as userService from "../../services/user.service.js";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const UsersList = () => {
    const [users, setUsers] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const fetchUsers = async () => {
        try {
            const response = await userService.retrieveAllUser();
            setUsers(response);
        } catch (error) {
            const retrieveErrorMessage = () => {
                const apiErrorMessage = error?.response?.data?.message;
                // Null Coalescing Operator
                return apiErrorMessage ?? 'Error while connecting to the server';
            }
            setErrorMessage(retrieveErrorMessage());
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Layout >
            {errorMessage ? (
                <h4 className="text-center text-danger fw-bold">{errorMessage}</h4>
            ) : (
                <>
                    <h3 className="text-center mb-2 ">Users</h3>
                    {
                        Object.values(users).map(user => (
                            <Row key={user.id} className="justify-content-center">
                                <Col>
                                    <Card >
                                        <Card.Body >
                                            <h4>{user.name}</h4>
                                            <h4>{user.email}</h4>
                                            {user.city && user.country && (
                                                <h4>
                                                    {user.city} - {user.country}
                                                </h4>
                                            )}
                                            <Button variant="primary" as={NavLink} to={`/edit/${user.id}`}>
                                                Edit
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        ))
                    }
                </>
            )}
        </Layout>
    )
}

export default UsersList;