import { client } from "../../../constants/interseptor";

interface IUserProfile{
    id: number
    email: string
    password: string
    name: string
    role: string
    avatar: string
    creationAt: string
    updatedAt: string
}
export const getUserProfile = async():Promise<IUserProfile | null> => {
    try {
        const res = await client.get('/auth/profile');
        return res?.data;
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return null;  
    }
}