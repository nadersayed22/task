import React, { Fragment, useContext, useEffect } from 'react';
//import { Container } from 'semantic-ui-react';
import { observer } from "mobx-react-lite";
import {
    Route,
    withRouter,
    RouteComponentProps,
    Switch
}from 'react-router-dom';
import LoginForm from './components/LoginForm';
import 'typeface-roboto';
import './App.scss';



const App: React.FC<RouteComponentProps> = ({ location }) => {

    const stylelogin = {};
    const styleother = { float: 'right' };
    

    useEffect(() => {
        
    }, [])

    
    return (
        <Fragment >

            <Route
                path={'/'}
                render={() => (
                    <div>
                        <div className="page-wrapper" >
                            <div className="page-body-wrapper" >
                                
                                
                                <div >
                                    <Switch>
                                        {/* <Route exact path='/' component={Tabs} /> */}
                                        <Route exact path='/login' component={LoginForm} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            />
        </Fragment>
    );
}

export default withRouter(observer(App));
