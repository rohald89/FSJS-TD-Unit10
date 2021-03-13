import React from 'react';
import {Link, useHistory } from 'react-router-dom';

function ActionsBar(props) {
    const history = useHistory();
    const {id, context} = props;
    const { emailAddress, password } = context.authenticatedUser;

    const handleDelete = (e) => {
        e.preventDefault();
        console.log('delete Button Clicked!');
        context.data.deleteCourse(id, emailAddress, password);
        history.push('/');
    };

    return (
        <div className="actions--bar">
            <div className="wrap">
                <Link to={`/courses/${id}/update`} className="button">Update Course</Link>
                <button className="button" onClick={handleDelete}>Delete Course</button>
                <Link to="/" className="button button-secondary">Return to List</Link>
            </div>
        </div>
    )
}

export default ActionsBar
