 // new types
 export interface CoursePartBase {
    name: string;
    exerciseCount: number;
    type: string;
  }
  
  export interface CourseBackendDevelopment extends CoursePartBase {
    type: "special"
    description: string;
    requirements: string[];
  
  }
  
  export interface CourseNewNormalPart extends CoursePartBase {
  
    type: "normal";
    description: string;
  }
  
  export interface CourseNormalPart extends CoursePartBase {
    type: "described";
    description?: string;
  }
  export interface CourseProjectPart extends CoursePartBase {
    type: "groupProject";
    groupProjectCount: number;
  }
  
  export interface CourseSubmissionPart extends CoursePartBase {
    type: "submission";
    description?: string;
    exerciseSubmissionLink: string;
  }
  
  export type CoursePart = CourseBackendDevelopment | CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseNewNormalPart;
  