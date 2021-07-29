
import { ACCESS_POINT } from '../config';

import http from "./http";





const GetPages = async (id) => {
//  console.log(data)
  const result = await http.get(`https://reqres.in/api/users?page=${id}`);
  return result;
};


export default {
 
  GetPages
  

}