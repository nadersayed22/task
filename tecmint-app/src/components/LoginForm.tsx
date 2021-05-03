import React, { useContext } from "react";
//import { Link } from 'react-router-dom';
import { Form as FinalForm, Field } from 'react-final-form';
import { FORM_ERROR } from "final-form";
import { Button, Col, Container, Form, Row } from 'reactstrap';
import agent from "../api/agent";

export interface IUserLogin
{
    Username: string;
    Emailaddress : string;
    password: string;
    token: string;
}


const usersRequests = {
    login: (user: IUserLogin): Promise<IUserLogin> => agent.requests.post('login/',user)
}

const LoginForm = () => {
    let password = null;
    let login = async (values: IUserLogin) => {
        try {
            const user = await usersRequests.login(values);
            window.localStorage.setItem('jwt', values.token)
            // history.push('/');
        }
        catch (error) {
            throw error;
            console.log(error);
        }
    }
    return (

        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="8">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="auth-innerright">
                                                    <div className="authentication-box">
                                                        <div className="text-center"></div>
                                                        <div className="card mt-4">
                                                            <div className="card-body">
                                                                <div className="text-center">
                                                                    <h4>LOGIN</h4>
                                                                    <h6>Enter your Username and Password </h6>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="col-form-label pt-0">Your Email</label>
                                                                    <Field
                                                                        name='email'
                                                                        placeholder='Email'
                                                                        textAlign='left'
                                                                        className='formControl'
                                                                    />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="col-form-label">Password</label>
                                                                    <Field
                                                                        name='password'
                                                                        placeholder=''
                                                                        type='password'
                                                                        className='formControl'
                                                                    />
                                                                </div>
                                                                <div className="checkbox p-0">
                                                                    <input id="checkbox1" type="checkbox" />
                                                                    <label htmlFor="checkbox1">Remember me</label>
                                                                </div>
                                                                
                                                                    <div className="form-group form-row mt-3 mb-0">
                                                                        <Button content='Login' >
                                                                            Login
                                                                                </Button>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        
                    </Col>
                </Row >
            </Container >
        </div >


    )
}

export default LoginForm