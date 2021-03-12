import React, {useState, useEffect, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function UpdateCourse(props) {
    const { id } = props.match.params;
    const { context } = props;
    const { emailAddress, password } = context.authenticatedUser;
    const history = useHistory();
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
        console.log('useEffect called!', id)
        axios.get(`http://localhost:5000/api/courses/${id}`)
        .then(data => setCourse(data.data.course))
        .then(console.log(course))
        .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        const { name, value } = e.target;
        setCourse(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleUpdate = (e) => {
        e.preventDefault();
        context.data.updateCourse(course, emailAddress, password)
          .then(errors => {
              if(errors) {
                  return errors;
              } else {
                  history.push(`/courses/${id}`)
              }
          })
          .catch(err => console.log(err));
    }

    return (
        <div className="wrap">
            <h2>Update Course</h2>
            <form>
                <div className="main--flex">
                    <div>
                        <label htmlFor="title">Course Title</label>
                        <input id="title" name="title" type="text" value={course.title} onChange={handleChange} />

                        <label htmlFor="courseAuthor">Course Author</label>
                        <input id="courseAuthor" name="courseAuthor" type="text" value={`${course.user.firstName} ${course.user.lastName}`} />

                        <label htmlFor="description">Course Description</label>
                        <textarea id="description" name="description" value={course.description} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="estimatedTime">Estimated Time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" value={course.estimatedTime} onChange={handleChange} />

                        <label htmlFor="materialsNeeded">Materials Needed</label>
                        <textarea id="materialsNeeded" name="materialsNeeded" value={course.materialsNeeded}  onChange={handleChange}/>
                    </div>
                </div>
                <button className="button" type="submit" onClick={handleUpdate}>Update Course</button><Link to={`/courses/${id}`} className="button button-secondary">Cancel</Link>
            </form>
        </div>
    )
}

export default UpdateCourse
