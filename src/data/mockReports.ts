import { LabReport } from '../types';

export const mockReports: LabReport[] = [
  {
    id: '1',
    patientId: '1',
    patientName: 'John Doe',
    testType: 'Complete Blood Count (CBC)',
    date: '2024-01-15',
    status: 'ready',
    results: 'All values within normal range. Hemoglobin: 14.2 g/dL, White Blood Cells: 6,800/μL, Platelet count: 280,000/μL',
    doctorName: 'Dr. Sarah Johnson',
    fileUrl: '/reports/cbc-john-doe.pdf',
    createdAt: '2024-01-15T09:30:00Z',
    updatedAt: '2024-01-15T14:45:00Z'
  },
  {
    id: '2',
    patientId: '1',
    patientName: 'John Doe',
    testType: 'Lipid Profile',
    date: '2024-01-10',
    status: 'reviewed',
    results: 'Total cholesterol elevated at 245 mg/dL. LDL: 165 mg/dL (high), HDL: 45 mg/dL, Triglycerides: 175 mg/dL',
    doctorName: 'Dr. Michael Chen',
    fileUrl: '/reports/lipid-john-doe.pdf',
    createdAt: '2024-01-10T11:15:00Z',
    updatedAt: '2024-01-12T16:20:00Z'
  },
  {
    id: '3',
    patientId: '1',
    patientName: 'John Doe',
    testType: 'Thyroid Function Test',
    date: '2024-01-20',
    status: 'pending',
    results: 'Results pending analysis',
    doctorName: 'Dr. Emily Davis',
    createdAt: '2024-01-20T08:00:00Z',
    updatedAt: '2024-01-20T08:00:00Z'
  },
  {
    id: '4',
    patientId: '3',
    patientName: 'Alice Johnson',
    testType: 'Diabetes Panel',
    date: '2024-01-18',
    status: 'ready',
    results: 'Glucose: 95 mg/dL (normal), HbA1c: 5.2% (normal), Insulin: 8.5 μU/mL',
    doctorName: 'Dr. Robert Wilson',
    fileUrl: '/reports/diabetes-alice-johnson.pdf',
    createdAt: '2024-01-18T10:45:00Z',
    updatedAt: '2024-01-19T13:30:00Z'
  },
  {
    id: '5',
    patientId: '4',
    patientName: 'Bob Smith',
    testType: 'Liver Function Test',
    date: '2024-01-22',
    status: 'pending',
    results: 'Sample received, processing in progress',
    doctorName: 'Dr. Lisa Anderson',
    createdAt: '2024-01-22T14:20:00Z',
    updatedAt: '2024-01-22T14:20:00Z'
  }
];