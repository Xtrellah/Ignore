const classmate = [
    {
        Name: 'Ash',
        Food: 'Pizza',
        Artist: 'Fleetwood Mac'
    },
    {
        Name: 'Florent',
        Food: 'Duck Confit',
        Artist: 'The Doors'
    },
    {
        Name: 'William',
        Food: 'Toad in the hole',
        Artist: 'Pink Floyd'
    },
    {
        Name: 'Milan',
        Food: 'Pizza',
        Artist: 'Plini'
    },
    {
        Name: 'Andy',
        Food: 'Thai red curry',
        Artist: 'The National'
    },
    {
        Name: 'Ivan',
        Food: 'Fish',
        Artist: 'Lady Gaga'
    },
    {
        Name: 'Abi',
        Food: 'Chocolate',
        Artist: 'Otis Redding'
    },
    {
        Name: 'Vicky',
        Food: 'Tacos',
        Artist: 'Chaka Khan'
    },
    {
        Name: 'Seona',
        Food: 'Dahl',
        Artist: 'Lankum'
    }
]

// classMate.array.forEach(function (name, food, artist){
//     console.log(Name + 'likes' + Food + 'and listens to' + Artist)
// })

function logClassmate(classmate) {
    console.log(`${classmate.Name} likes ${classmate.Food} and listens to ${classmate.Artist}`)
}

classmate.forEach(logClassmate)

