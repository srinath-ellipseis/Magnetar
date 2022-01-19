export interface Department {
  id?: number;
  name?: string;
}
export interface Employee {
  id?: number;
  department?: Department;
  name?: string;
  empType?: string;
}
