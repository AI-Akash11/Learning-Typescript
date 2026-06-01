// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithBoolean = (value: boolean) => [value];

// const createArrayWithUserObject = (value: {id: number; name: string}) => {
//     return [value];
// }


const createArrayWithGeneric = <T>(value: T) => [value];

const arrString = createArrayWithGeneric("Hello");
const arrNumber = createArrayWithGeneric(42);
const arrBoolean = createArrayWithGeneric(true);
const arrUserObject = createArrayWithGeneric<{id: number; name: string}>({id: 1, name: "Alice"});


// tuple

const createArrayWithTuple = (param1: string, param2: string) => [param1, param2];

const createArrayWithTupleGeneric = <X,Y> (param1:X, param2:Y) => [param1, param2];

const res1 = createArrayWithTupleGeneric('akash',false)
const res2 = createArrayWithTupleGeneric('ali',true)



const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo
    }
} ;


const student1 = {
id: 1,
name: "akash",
hasPen:true
}

const student2 = {
id: 2,
name: "ali",
hasNote: true
}

// const result = addStudentToCourse(student1);
// console.log(result)

const result = addStudentToCourse(student2);
console.log(result)