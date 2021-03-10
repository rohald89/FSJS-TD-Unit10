import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ActionBar from './ActionsBar';

function CourseDetail(props) {
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
        console.log('useEffect called!', props.match.url)
        axios.get(`http://localhost:5000/api/${props.match.url}`)
        .then(data => setCourse(data.data.course))
        .then(console.log(course))
        .catch(err => console.log(err))
    }, [])


    return (
        <>
            <ActionBar id={course.id}/>
            
            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{course.title}</h4>
                            <p>By {course.user.firstName} {course.user.lastName}</p>

                            <p>{course.description}</p>
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            <p>{course.estimatedTime}</p>

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                                { course.materialsNeeded 
                                    ? course.materialsNeeded.split('*').slice(1).map(material => (
                                    <li key={material}>{material}</li>
                                    ))
                                    : ''
                                }
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
            </>
    )
}

export default CourseDetail
