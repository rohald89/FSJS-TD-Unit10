import React from 'react';
import {Link } from 'react-router-dom';
import {createBrowserHistory} from 'history';

function ActionsBar(props) {
    // force rerender of the courses after deleting one
    const history = createBrowserHistory({forceRefresh:true})
    const { id, context } = props;
    const { emailAddress, password } = context.authenticatedUser;

    const handleDelete = (e) => {
        e.preventDefault();
        context.data.deleteCourse(id, emailAddress, password);
        history.push('/');
    };

    return (
        <div className="actions--bar">
            <div className="wrap">
                <Link to={`/courses/${id}/update`} className="button">Update Course</Link>
                <Link to="/" className="button" onClick={handleDelete}>Delete Course</Link>
                <Link to="/" className="button button-secondary">Return to List</Link>
            </div>
        </div>
    )
}

export default ActionsBar
