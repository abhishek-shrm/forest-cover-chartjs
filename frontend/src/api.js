import axios from 'axios'

export default()=>{
  return axios.create({
    baseURL:'https://forest-cover.herokuapp.com/'
  });
}