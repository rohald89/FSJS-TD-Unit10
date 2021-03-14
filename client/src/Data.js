import config from './config';

export default class Data {
  api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
    const url = config.apiBaseUrl + path;
  
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }
    if(requiresAuth) {
      const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);

      options.headers['Authorization'] = `Basic ${encodedCredentials}`;
    }
    console.log(credentials);
    return fetch(url, options);
  }

  async getUser(emailAddress, password) {
    const response = await this.api(`/users`, 'GET', null, true, { emailAddress, password });
    if (response.status === 200) {
      return response.json().then(data => data);
    }
    else if (response.status === 401) {
      return null;
    }
    else {
      throw new Error();
    }
  }
  
  async createUser(user) {
    const response = await this.api('/users', 'POST', user);
    if (response.status === 201) {
      return [];
    }
    else if (response.status === 400) {
      return response.json().then(data => {
        return data.error.message;
      });
    }
    else {
      throw new Error();
    }
  }

  async getCourses() {
    const path = `/courses/`
    const response = await this.api(path, 'GET');
    if(response.status === 200) {
      return response.json();
    }
  }

  async getCourse(courseId){
    const path = `/courses/${courseId}`
    const response = await this.api(path, 'GET');
    if (response.status === 200) {
      return response.json().then(data => data.course);
    } else if (response.status === 404) {
      return null;
    }
  }

  async createCourse(course, emailAddress, password) {
    const path = `/courses`;
    const response = await this.api(path, 'POST', course, true, { emailAddress, password });
    if (response.status === 201) {
      console.log('COURSE CREATED')
      return [];
    }
    else if (response.status === 400) {
      return response.json().then(data => {
        return data.error.message;
      });
    }
    else {
      throw new Error();
    }
  }

  async updateCourse(course, emailAddress, password) {
    const path = `/courses/${course.id}`;
    const response = await this.api(path, 'PUT', course, true, { emailAddress, password });
    if (response.status === 204) {
      return [];
    } else if (response.status === 400) {
      return response.json().then(data => {
        return data.error.message;
      });
    } else if (response.status === 500) {
      this.props.history.push('/error');
    } else {
      throw new Error();
    }
  }

  async deleteCourse(id, emailAddress, password) {
    const path = `/courses/${id}`;
    const response = await this.api(path, 'DELETE', null, true, { emailAddress, password });
    if (response.status === 204 ) {
      return;
    }
  }
}
