import axios from 'axios'

const swURL = `https://swapi.co/api/people/`

export function getCostume () {
    
    let num1 = Math.floor(Math.random()*86),
        num2 = Math.floor(Math.random()*86),
        num3 = Math.floor(Math.random()*86),
        // num4 = Math.floor(Math.random()*86),
        apiPromises=[axios.get(`${swURL}${num1}`).then(response=>response.data),
        axios.get(`${swURL}${num2}`).then(response=>response.data),
        axios.get(`${swURL}${num3}`).then(response=>response.data),
        // axios.get(`${swURL}${num4}`).then(response=>response.data)
    ]


    return Promise.all(apiPromises)
    
}

