export interface CreateCourseDto {
  title: string;
  category?: string;
  description?: string;
}

export interface UpdateCourseDto {
  title?: string;
  category?: string;
  description?: string;
}