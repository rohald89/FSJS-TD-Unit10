import React from 'react';

function ActionsBar() {
    return (
        <div className="actions--bar">
            <div className="wrap">
                <a className="button" href="update-course.html">Update Course</a>
                <a className="button" href="/delete">Delete Course</a>
                <a className="button button-secondary" href="index.html">Return to List</a>
            </div>
        </div>
    )
}

export default ActionsBar
