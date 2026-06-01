
type Student = {id: number, name: string}

const addStudentToCourse1 = <T extends Student>(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo
    }
} ;


const student12 = {
id: 1,
name: "akash",
hasPen:true
}

const student22 = {
id: 2,
name: "ali",
hasNote: true
}

const student32 = {
    id:3,
    name: 'any',
    hasWatch: true
}

const result2 = addStudentToCourse1(student32);
console.log(result2)