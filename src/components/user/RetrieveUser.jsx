import React, { useEffect, useState } from "react";
import { Card, Container, Col,Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import * as userService from "../../services/user.service.js";

const RetrieveUser = () => {
    const { userId } = useParams();
    //http://localhost:4000/v1/user/1
    const [user, setUser] = useState({});

    const fetchUser = async () => {
        try {
            const response =  await userService.retrieveUser(userId);
            setUser(response);
        } catch (err) {
            setUser(null);
        }

    };

    useEffect(() => {
        fetchUser();
    }, [userId]);

    return (
        <Layout>
            {user ? (
                <Row className="justify-content-center">
                    <Col lg={4}>
                        <h3 className="text-center mb-3">{user.name}</h3>
                        <Card>
                            <Card.Body className="text-center">
                                <p>{user.email}</p>
                                {user.city && user.country && (
                                    <p>
                                        {user.city} - {user.country}
                                    </p>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ) : (
                <div className="text-danger text-center fw-bold">User not Found</div>
            )
            }
        </Layout>
    );

}

export default RetrieveUser;

