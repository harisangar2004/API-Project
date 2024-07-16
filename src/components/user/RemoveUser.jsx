import { useParams } from "react-router-dom";
import * as userService from "../../services/user.service.js";
import Layout from "../layout/Layout.jsx";
import { toast } from "react-toastify";
import { Button, Row } from "react-bootstrap";

const RemoveUser = () => {
    const DELAY_BEFORE_REDIRECTION_MS = 1000;
    const {userId} = useParams();

    const submitAction = async () => {
        try {
            const res = await userService.removeUser(userId);
            if (res?.status) {
                toast.success(`User has been successfully removed. `)
            }
            else {
                toast.warn(`User couldn't be removed. `)
            }
            setTimeout(() => {
                window.location.href = '/';
            }, DELAY_BEFORE_REDIRECTION_MS)
        } catch (err) {
            toast.error(`User cannot be removed. `);
            console.log(err.message);
        }
    }
    const cancelAction = () => {
        window.location.href = '/';
    };

    return (
        <Layout>
            <Row className="justify-content-center">
                <h4 className="text-center mb-3">
                    Are you sure to remove the user {userId}?
                </h4>
                <div className="text-center">
                    <Button variant="danger" onClick={submitAction} className="m-1 w-25" >
                        Yes
                    </Button>
                    <Button variant="primary" onClick={cancelAction} className="m-1 w-25" >
                        No
                    </Button>
                </div>


            </Row>
        </Layout>
    )
}

export default RemoveUser