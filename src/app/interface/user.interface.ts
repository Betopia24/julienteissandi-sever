import { UserRole, Gender } from '../../../generated/prisma';

export type IUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
  isActive: boolean;
  aiCredits: number;
  gender?: Gender;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  isEmailVerified: boolean;
  otp?: string;
  otpExpiresAt?: Date;
  refreshToken?: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
};

export type ICreateUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender?: Gender;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  role?: UserRole;
};

export type ILoginUser = {
  email: string;
  password: string;
};

export type IUpdateUser = {
  firstName?: string;
  lastName?: string;
  gender?: Gender;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
};

export type IUserResponse = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  aiCredits: number;
  gender: Gender | null;
  phone: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  country: string | null;
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
};
