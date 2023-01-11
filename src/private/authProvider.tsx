import React, { createContext, useState } from 'react';

import { PersonType } from '../components';

interface AuthContextType {
  person: PersonType | null;
  signIn: (newPerson: PersonType, cb: () => void) => void;
  signOut?: (cb: () => void) => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [person, setPerson] = useState<PersonType | null>(null);

  const signIn = (newPerson: PersonType, cb: () => void) => {
    setPerson(newPerson);
    cb();
  };

  const signOut = (cb: () => void) => {
    setPerson(null);
    cb();
  };

  const contextConfig: AuthContextType = { person, signIn, signOut };

  return (
    <AuthContext.Provider value={contextConfig}>
      {children}
    </AuthContext.Provider>
  );
};

const initialState = {
  person: null,
  signIn: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialState);
