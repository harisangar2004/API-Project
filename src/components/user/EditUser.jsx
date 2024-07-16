import { useEffect, useState } from "react";
import * as userService from "../../services/user.service.js";
import { Button, Col, Form,  Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import { toast } from "react-toastify";
import { firstUpperCase } from "../helpers/string.helper.js";
import { NavLink } from "react-router-dom";
const EditUser = () => {
    const { userId } = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const populateUserField = async () => {
        try {
            const user = await userService.retrieveUser(userId);
            setName(user.name);
            setEmail(user.email);
            setCity(user.city);
            setCountry(user.country);
        } catch (err) {
            console.log(err.message);
            toast.error(`user ${userId} counldn't be updated`)

        }
    };
    const submitForm = async (event) => {
        event.preventDefault();

        const payload = {
            name,
            email,
            city,
            country
        };

        try {
            const response = await userService.editUser(userId, payload);

            if (response?.status) {
                const userName = response.user.name;
                toast.success(`${userName} successfully updated. `)
            }
            else {
                toast.warn(`user counldn't be updated`)
            }
        } catch (err) {
            const getErrorMessage = () => {
                const {
                    data: {
                        errors: { body }
                    },
                } = err.response;

                const errorMessage = body[0]?.message;
                return firstUpperCase(errorMessage);
            }
            toast.error(getErrorMessage());
        }
    };

    useEffect(() => {
        populateUserField();
    }, [userId]);
    return (
        <Layout>
            <h2 className="text-center">Edit User</h2>
            <Row className="justify-content-center">
                <Col lg={6}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label> Name </Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(elName) => setName(elName.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label> Email </Form.Label>
                            <Form.Control
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label> City </Form.Label>
                            <Form.Control
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label> Country </Form.Label>
                            <Form.Control
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" onClick={submitForm} className="m-1">
                            Update
                        </Button>

                        <Button variant='danger' as={NavLink} to={`/remove/${userId}`} className="m-1" >
                            Remove
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Layout>
    );
}

export default EditUser;