import { createContext, useState } from "react";

export const customersContext = createContext({
  customers: [],
  setCustomers: () => {},
});
export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const value = { customers, setCustomers };

  return (
    <customersContext.Provider value={value}>
      {children}
    </customersContext.Provider>
  );
};
