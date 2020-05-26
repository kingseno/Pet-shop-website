const pets = [
    {
        "_id": 1,
        "name": "Poodle"
    },
    {
        "_id": 2,
        "name": "Chihuahua"
    },
    {
        "_id": 3,
        "name": "Pull France"
    },
    {
        "_id": 4,
        "name": "Bit pull"
    },
    {
        "_id": 5,
        "name": "Golden"
    },
    {
        "_id": 6,
        "name": "Shiba Inu"
    },
    {
        "_id": 7,
        "name": "Others"
    }
]

const price = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "$0 to $49",
        "array": [0, 49]
    },
    {
        "_id": 2,
        "name": "$50 to $99",
        "array": [50, 99]
    },
    {
        "_id": 3,
        "name": "$100 to $199",
        "array": [100, 199]
    },
    {
        "_id": 4,
        "name": "$200 to $299",
        "array": [200, 299]
    },
    {
        "_id": 5,
        "name": "More than $300",
        "array": [300, 1500000]
    }
]

export {
    price,
    pets
}