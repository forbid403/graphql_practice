export const people = [
    {
        name : "sonia",
        age : 25,
        gender : "female",
        id : 1
    },
    {
        name : "nina",
        age : 25,
        gender : "female",
        id : 2
    },
    {
        name : "jella",
        age : 24,
        gender : "male",
        id : 3
    }
]

export const getById = id =>{
    const filterPeople = people.filter(person => id === person.id);
    return filterPeople[0];
}