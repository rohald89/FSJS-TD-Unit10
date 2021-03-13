import React from 'react';
import {Link} from 'react-router-dom';

function ActionsBar(props) {
    const {id, context} = props;
    const { emailAddress, password } = context.authenticatedUser;

    const handleDelete = (e) => {
        e.preventDefault();
        console.log('delete Button Clicked!')
        context.data.deleteCourse(id, emailAddress, password)
    };

    return (
        <div className="actions--bar">
            <div className="wrap">
                <Link to={`/courses/${id}/update`} className="button">Update Course</Link>
                <a className="button" onClick={handleDelete}>Delete Course</a>
                <Link to="/" className="button button-secondary">Return to List</Link>
            </div>
        </div>
    )
}

export default ActionsBar
