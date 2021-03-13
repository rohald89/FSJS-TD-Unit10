import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from './Form';

function CreateCourse(props) {
    const { context } = props;
    const history = useHistory();
    const { id, firstName, lastName, emailAddress, password } = context.authenticatedUser; 

    const [course, setCourse] = useState({
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        userId: id    
    });
    const [errors, setErrors] = useState([]);

    const handleChange = e => {
        const { name, value } = e.target;
        setCourse(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCreate = () => {
        console.log(course);
        context.data.createCourse(course, emailAddress, password)
        .then(data => setErrors(data));
    };

    const cancel = () => {
        history.push('/');
    }

    return (
        <div className="wrap">
            <h2>Create Course</h2>
            <Form
                cancel={cancel}
                errors={errors}
                submit={handleCreate}
                submitButtonText="Create Course"
                elements={() => (
                    <div className="main--flex">
                        <div>
                            <label htmlFor="title">Course Title</label>
                            <input id="title" name="title" type="text" onChange={handleChange} />

                            <label htmlFor="courseAuthor">Course Author</label>
                            <input id="courseAuthor" name="courseAuthor" type="text" defaultValue={`${firstName} ${lastName}`} disabled />

                            <label htmlFor="description">Course Description</label>
                            <textarea id="description" name="description" onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input id="estimatedTime" name="estimatedTime" type="text" onChange={handleChange} />

                            <label htmlFor="materialsNeeded">Materials Needed</label>
                            <textarea id="materialsNeeded" name="materialsNeeded" onChange={handleChange} />
                        </div>
                    </div>
                )} 
            />
        </div>
    )
}

export default CreateCourse
