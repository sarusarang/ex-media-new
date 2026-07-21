export interface JobPosition {
    id: string;
    title: string;
    type: string;
    department: string;
    location: string;
    experience: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    benefits?: string[];
}

export interface ApplicationFormData {
    name: string;
    email: string;
    phone: string;
    position: string;
    portfolioUrl?: string;
    resumeLink?: string;
    coverLetter: string;
}
