export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  role: 'client' | 'admin';
}

export interface LabReport {
  id: string;
  patientId: string;
  patientName: string;
  testType: string;
  date: string;
  status: 'pending' | 'ready' | 'reviewed';
  results: string;
  doctorName: string;
  fileUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id' | 'role'> & { password: string }) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}