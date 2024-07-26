import { Product, useGetAllUsersQuery, User } from "@/generated";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface AppContextType {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  users: User[]; // Add this line
  setUsers: React.Dispatch<React.SetStateAction<User[]>>; // Add this line
  product: Product[];
  setProduct: React.Dispatch<React.SetStateAction<Product[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState("Hello");
  const [users, setUsers] = useState<User[]>([]);
  const [product, setProduct] = useState<Product[]>([]);
  const { data, loading, error } = useGetAllUsersQuery();

  useEffect(() => {
    if (data?.getAllUsers) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <AppContext.Provider
      value={{ state, setState, users, setUsers, product, setProduct }}
    >
      {children}
    </AppContext.Provider>
  );
};
