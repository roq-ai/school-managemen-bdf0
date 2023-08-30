import axios from 'axios';
import queryString from 'query-string';
import { AcademicYearInterface, AcademicYearGetQueryInterface } from 'interfaces/academic-year';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAcademicYears = async (
  query?: AcademicYearGetQueryInterface,
): Promise<PaginatedInterface<AcademicYearInterface>> => {
  const response = await axios.get('/api/academic-years', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAcademicYear = async (academicYear: AcademicYearInterface) => {
  const response = await axios.post('/api/academic-years', academicYear);
  return response.data;
};

export const updateAcademicYearById = async (id: string, academicYear: AcademicYearInterface) => {
  const response = await axios.put(`/api/academic-years/${id}`, academicYear);
  return response.data;
};

export const getAcademicYearById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/academic-years/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAcademicYearById = async (id: string) => {
  const response = await axios.delete(`/api/academic-years/${id}`);
  return response.data;
};
