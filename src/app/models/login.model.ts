export interface LoginOptions {
  email?: any;
  password?: any;
}
export interface PersonalDetails {
  firstName?: any;
  lastName?: any;
  email?: any;
  password?: any;
  rePassword?: any;
  gender?: string;
  dob?: any;
  country?: string;
  state?: string;
  city?: string;
  zipcode?: any;
  mobileNumber?: number;
  countryCode?: string | number;
}
export interface EmpDetails {
  id?: number;
  companyName?: string;
  designation?: string;
  roles?: string;
  projects?: string;
  toDate?: any;
  formDate?: any;
  country?: string;
  state?: string;
  city?: string;
  zipcode?: any;
}
export interface EduDetails {
  id?: number;
  collegeName?: string;
  major?: string;
  levelEdu?: string;
  projects?: string;
  toDate?: any;
  formDate?: any;
  gpa?: string;
  gpaCode?: string;
  country?: string;
  state?: string;
  city?: string;
  zipcode?: string;
}
