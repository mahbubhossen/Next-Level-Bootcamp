// conditional Type => which type will be return depends on the condition

type A = null;
type B = undefined;

type C = A extends null ? true : B extends undefined ? true : false;

type richPeopleVehicle = {
  bike: string;
  car: string;
  ship: string;
};

type CheckVehicle<T> = T extends keyof richPeopleVehicle ? true : false;

type HasBike = CheckVehicle<"bike">;