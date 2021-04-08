import axios from 'axios'
import { GET_ALL_COURSES, GET_ALL_POSTS, GET_ALL_SPECIALITIES, GET_ALL_TEACHERS, GET_CLASE, GET_COURSE, GET_POST, GET_SPECIALITY } from './actions'

const API_URL = process.env.REACT_APP_API_URL

export const getAllPosts = () => dispatch =>{
  axios.get(`${API_URL}/posts`)
  .then(
    resp =>{
      return dispatch({
        type: GET_ALL_POSTS,
        posts: resp.data
      })
    }
  )
}

export const getAllSpecialities = () => dispatch =>{
  axios.get(`${API_URL}/especialidades`)
  .then(
    resp =>{
      return dispatch({
        type: GET_ALL_SPECIALITIES,
        specialities: resp.data
      })
    }
  )
}


export const getAllCourses = () => dispatch =>{
  axios.get(`${API_URL}/cursos`)
  .then(
    resp =>{
      return dispatch({
        type: GET_ALL_COURSES,
        courses: resp.data
      })
    }
  )
}

export const getAllTeachers = () => dispatch =>{
  axios.get(`${API_URL}/profesores`)
  .then(
    resp =>{
      return dispatch({
        type: GET_ALL_TEACHERS,
        teachers: resp.data
      })
    }
  )
}


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

export const getPost = id => dispatch =>{
  axios.get(`${API_URL}/posts/${id}`)
  .then(
    resp =>{
      return dispatch({
        type: GET_POST,
        post: resp.data
      })
    }
  )
}

export const getSpeciality = id => dispatch =>{
  axios.get(`${API_URL}/especialidad/${id}`)
  .then(
    resp =>{
      return dispatch({
        type: GET_SPECIALITY,
        speciality: resp.data
      })
    }
  )
}

export const getCourse = id => dispatch =>{
  axios.get(`${API_URL}/curso/${id}`)
  .then(
    resp =>{
      return dispatch({
        type: GET_COURSE,
        course: resp.data
      })
    }
  )
}

export const getClase = id => dispatch =>{
  axios.get(`${API_URL}/clases/${id}`)
  .then(
    resp =>{
      return dispatch({
        type: GET_CLASE,
        clase: resp.data
      })
    }
  )
}
