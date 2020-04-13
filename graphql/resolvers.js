const sonia = {
    name : "sonia",
    age : 25,
    gender : "female"
}

const resolvers = {
    Query :{
        person :()=>sonia
    }
}

export default resolvers