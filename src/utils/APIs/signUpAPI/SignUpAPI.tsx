import { TSignUpForm } from "../../../components/signUpForm/type";
import { client } from "../../../constants/interseptor";


export const SignUpAPI = async (data: TSignUpForm) => {
  try {
    const res = await client.post("/users/", data);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
