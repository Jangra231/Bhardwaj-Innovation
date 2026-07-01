/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  feedback: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl?: string;
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
