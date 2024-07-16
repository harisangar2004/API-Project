import Layout from "../layout/Layout";
import { Row, Col } from "react-bootstrap";

const AboutUs = () => {
    return (
        <Layout>
            <h3 className="text-center">About us</h3>
            <Row className="justify-content-center">
                    <div className="text-center">
                        About us. Learning React, NodeJS and ExpressJS is so fun. This project was part of the Udemy course done by Pierre-Henry Soria <br />
                        I will see you very soon!
                    </div>
            </Row>
        </Layout>
    )
}

export default AboutUs;