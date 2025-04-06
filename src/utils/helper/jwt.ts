import { SignJWT, jwtVerify } from "jose";

// === Create key for encrypting and decrypting ===
const key = new TextEncoder().encode("my Secret Key");

// === Function for encrypting data ===
export const encryptJwt = async (payload: Record<string, unknown>): Promise<string> => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d") 
    .sign(key);
};
// === Function for decrypting token ===
export const decryptJwt = async (token: string): Promise<Record<string, unknown> | null> => {
  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"],
    });
    return payload as Record<string, unknown>; 
  } catch (error) {
    console.error(error);
    return null;
  }
};
