// keyof: type operator

type RichVehicleCollection = {
    car: string;
    bike: string;
    cng: string;
}

type MyVehicle1 = "bike" | "car" | "cng" ;

type MyVehicle2 = keyof RichVehicleCollection;

const myVehicle: MyVehicle2 = "bike";

type User = {
    id: number;
    name: string;
    address: {
        city: string
    }
}

const user : User = {
    id: 123,
    name: 'akash',
    address: {
        city: 'dhaka'
    }
};

const myName = user.name;


const getPropertyFromObject = <X> (object: X, key: keyof X) => {
    return object[key]
}


const result4 = getPropertyFromObject(user, "address")

const product = {
    brand: "Hp"
}

const result5 = getPropertyFromObject(product, "brand")


console.log(result4)