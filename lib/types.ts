export interface ServiceDetail {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  gallery: string[];
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
}

export interface ProductDetail {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  gallery: string[];
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
}

export interface EnquiryInput {
  name: string;
  contactNo: string;
  email: string;
  organization: string;
  designation: string;
  serviceNeeded: string;
  message: string;
}

export interface Enquiry extends EnquiryInput {
  id: string;
  createdAt: string;
}
