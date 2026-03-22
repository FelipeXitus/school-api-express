export interface CreateStudentDto {
  name: string;
  email: string;
}

export interface UpdateStudentDto {
  name?: string;
  email?: string;
}