/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCars
// ====================================================

export interface GetCars_cars {
  __typename: "Car";
  id: string;
  name: string;
  mileage: string;
  monthlyPrice: number;
  thumbnailUrl: string;
  gearType: string;
  gas: string;
  dailyPrice: number;
}

export interface GetCars {
  cars: GetCars_cars[];
}
