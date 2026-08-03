import { Container, Form, Button } from "react-bootstrap";
import React,{useContext} from "react";
import UserContext from "../Context/UserContext";

export default function Login(){
    const {user, setUser} = useContext(UserContext);

    const [userName, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const updateLoginDetail = React.useCallback(()=>{
        setUser({user: userName, password: password});
    },[userName, password, setUser]);

return (
    <>
        <Container className="mt-5">

            <div className="mx-auto" style={{ maxWidth: "400px" }}>

                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the user"
                            value={userName}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter the password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </Form.Group>

                    <Button
                        variant="primary"
                        onClick={() => {
                            updateLoginDetail();
                        }}
                    >
                        Login
                    </Button>
                </Form>

                <p className="mt-3">
                    {user?.user ? user.user : "not login"}
                </p>

            </div>

        </Container>
    </>
);
}