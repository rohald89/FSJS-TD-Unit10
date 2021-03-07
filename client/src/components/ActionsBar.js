import React from 'react';

function ActionsBar(props) {
    return (
        <div className="actions--bar">
            <div className="wrap">
                <a className="button" href={`/courses/${props.id}/update`}>Update Course</a>
                <a className="button" href="/delete">Delete Course</a>
                <a className="button button-secondary" href="index.html">Return to List</a>
            </div>
        </div>
    )
}

export default ActionsBar
