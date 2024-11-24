import { address, location } from "./common";

export interface campingPreview {
  campingId: number;
  placeName: string;
  address: address;
  location: location;
  phoneNum: string;
  homePage: string;
  subIntro: string;
  categories: [];
}

export interface campingRegionCounts {
  region: string;
  campingCounts: number;
  lat: number;
  lng: number;
}
