import { useContext } from "react";
import { AuthContext } from "./authContext"; // ✅ Correct Import

export const useAuth = () => useContext(AuthContext);

