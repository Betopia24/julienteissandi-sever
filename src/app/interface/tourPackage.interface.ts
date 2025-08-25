import { TourPackageStatus } from '../../../generated/prisma';

export type IDailyActivity = {
  [key: string]: {
    title: string;
    description: string;
  };
};

export type ITourPackage = {
  id: string;
  packageName: string;
  totalMembers: number;
  pricePerPerson: number;
  startDay: Date;
  endDay: Date;
  citiesVisited: string[];
  tourType: string;
  activities: string[];
  dailyActivity: IDailyActivity;
  highlights: string;
  description: string;
  photos: string[];
  status: TourPackageStatus;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
};

export type ICreateTourPackage = {
  packageName: string;
  totalMembers: number;
  pricePerPerson: number;
  startDay: Date;
  endDay: Date;
  citiesVisited: string[];
  tourType: string;
  activities: string[];
  dailyActivity: IDailyActivity;
  highlights: string;
  description: string;
  photos: string[];
  status?: TourPackageStatus;
};

export type IUpdateTourPackage = {
  packageName?: string;
  totalMembers?: number;
  pricePerPerson?: number;
  startDay?: Date;
  endDay?: Date;
  citiesVisited?: string[];
  tourType?: string;
  activities?: string[];
  dailyActivity?: IDailyActivity;
  highlights?: string;
  description?: string;
  photos?: string[];
  status?: TourPackageStatus;
};

export type ITourPackageResponse = {
  id: string;
  packageName: string;
  totalMembers: number;
  pricePerPerson: number;
  startDay: Date;
  endDay: Date;
  citiesVisited: string[];
  tourType: string;
  activities: string[];
  dailyActivity: IDailyActivity;
  highlights: string;
  description: string;
  photos: string[];
  status: TourPackageStatus;
  createdAt: Date;
  updatedAt: Date;
};
