import { useSelector } from 'react-redux';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';

const RenderActions = (props) => {
    const loggedIn = useSelector(state => !!state.session.user)

    const renderAction = !loggedIn ? <Component {...props} />  : <Redirect to='/tasks' />

    return ( 
        {renderAction}
     );
}
 
export default RenderActions;