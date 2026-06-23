type A = null
type B = undefined

type C = A extends number ? true : false;

type RichPeoplesVehicle = {
    bike: string;
    car: string;
    ship: string;
}

type checkVehicle <T> = T extends keyof RichPeoplesVehicle ? true : false;

type HasBike = checkVehicle<"bike">;