import NavigationBar from "./NavigationBar";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import styled, { createGlobalStyle } from 'styled-components'
import Footer from "./Footer";


const BackgroundColor = createGlobalStyle`
  body{
    background-color:${(props) => (props.light ? "#f2f2f2" : "#333")}
  }
`;

const Layout = ({ children }) => {
    return (
        <>
            <Container fluid >
                <BackgroundColor light />
                <ToastContainer />
                <NavigationBar />
                <Container className="mt-5 mb-5">
                    {children}
                </Container>
            </Container>
            <Footer />
        </>
    );
};

export default Layout;