import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Component } from 'react';
import RenderActions from './RenderActions';

export const AuthRoute = ({ component: Component, path, exact }) => {
    const loggedIn = useSelector(state => !!state.session.user)

    // const renderAction = !loggedIn ? <Component {...props} />  : <Redirect to='/tasks' />

    return (
        <Route path={path} exact={exact} render={(props) => (
            !loggedIn ? (
                <Component { ...props } /> 
            ) : (
                <Redirect to='/tasks' />
            )
        )} />
    )
    
}

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const loggedIn = useSelector(state => !!state.session.user)

    return (
        <Route {...rest} render={<RenderActions props={{ Component }} />} />
    )
}