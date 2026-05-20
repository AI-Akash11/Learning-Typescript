type User = {
    name: string;
    age: number;
}

interface IUser {
    name: string;
    age: number;
}

// interface is mainly user for object type but type is used for both object and primitive type.

type Role = {
    role: "admin" | 'user';
}

type UserWithRole = User & Role;

interface IUserWithRole  extends IUser {
    role: 'admin' | 'user';
}

const user1: IUserWithRole = {
    name: "akash",
    age: 89,
    role: 'admin'
};

const user2: IUser = {
    name: "taslima",
    age: 90
}

type IsAdmin = boolean;

const isAdmin : IsAdmin = false;


// function

type Add = (num1: number, num2: number) => number;

interface IAdd {
    (num1: number, num2: number) : number;
}

const add: IAdd = (num1, num2) => num1+num2;