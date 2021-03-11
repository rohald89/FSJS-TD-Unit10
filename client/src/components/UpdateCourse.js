import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';


function UpdateCourse(props) {
    const {context} = props;
    const [course, setCourse] = useState({
        id: '',
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        user: {
            id: '',
            firstName: '',
            lastName: '',
            emailAddress: ''
        }        
    });

    useEffect(() => {
        console.log('useEffect called!', props.match.params.id)
        axios.get(`http://localhost:5000/api/courses/${props.match.params.id}`)
        .then(data => setCourse(data.data.course))
        .then(console.log(course))
        .catch(err => console.log(err))
    }, [])
    
    return (
        <div className="wrap">
            <h2>Update Course</h2>
            <form>
                <div className="main--flex">
                    <div>
                        <label htmlFor="courseTitle">Course Title</label>
                        <input id="courseTitle" name="courseTitle" type="text" value={course.title} />

                        <label htmlFor="courseAuthor">Course Author</label>
                        <input id="courseAuthor" name="courseAuthor" type="text" value={`${course.user.firstName} ${course.user.lastName}`} />

                        <label htmlFor="courseDescription">Course Description</label>
                        <textarea id="courseDescription" name="courseDescription" value={course.description}/>
                    </div>
                    <div>
                        <label htmlFor="estimatedTime">Estimated Time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" value={course.estimatedTime} onChange={context.actions.handleChange} />

                        <label htmlFor="materialsNeeded">Materials Needed</label>
                        <textarea id="materialsNeeded" name="materialsNeeded" value={course.materialsNeeded}/>
                    </div>
                </div>
                <button className="button" type="submit">Update Course</button><button className="button button-secondary" onClick={()=> console.log('cancel button clicked')}>Cancel</button>
            </form>
        </div>
    )
}

export default UpdateCourse
