import React, { useState } from "react";
import { Button, Col,  Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import Layout from "../layout/Layout.jsx";
import * as userService from "../../services/user.service.js";
import { firstUpperCase } from "../helpers/string.helper.js";
const CreateUser = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    
    const submitForm = async (event) => {
        event.preventDefault();

        const payload = {
            name,
            email,
            city,
            country,
        };

        try {
            //Optional chaining operator ?
            const response = await userService.createUser(payload);
            if (response?.status) {

                const getUserID= response?.user?.name;
                toast.success(`User ${getUserID} successfully Created. `)
                // OK, give a success message
                setName('');
                setEmail('');
                setCity('');
                setCountry('');
            }
            else {
                toast.warn('An error has occurred. ');
            }
        } catch (error) {
            // We received something wrong

            const getErrorMessage = () => {
                const {
                    data: {
                        errors: { body }
                    },
                } = error.response;

                // Optional Chaining Operator ES6
                const msg = body[0]?.message;
                return firstUpperCase(msg);
            };
            //Uppercase the first letter

            toast.error(getErrorMessage());
        }
    };

    return (
        <Layout>
            <Row className="justify-content-center">
                <Col lg={6}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label> Name </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                onChange={(elName) => setName(elName.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label> Email </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label> City </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="City"
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label> Country </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Country"
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={submitForm}>
                            Add User
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Layout>
    )
};

export default CreateUser;