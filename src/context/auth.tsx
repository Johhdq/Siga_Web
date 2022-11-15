import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

// Informações do usuário
type User = {
  id: string;
  email: string;
  ra: string;
  nome: string;
};

type AuthContextData = {
  user: User | null;
  saveUser: (id: number) => void;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProvider = {
  children: ReactNode;
};

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null);

  async function saveUser(id: number) {
    api
      .get<User>("url")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signOut, saveUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}
