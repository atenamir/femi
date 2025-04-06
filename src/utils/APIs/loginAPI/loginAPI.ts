import axios from "axios";
import { TLoginType } from "./type";

export const loginAPI = async (data: TLoginType) => {
  try {
  const res = await axios.post("https://api.escuelajs.co/api/v1/auth/login",data , {
    headers: {
      'Content-Type': 'application/json'
    }});
    console.log(res);
    
    return res
   
  } catch (error) {
    console.log("Error message:", error);  

  }
};
