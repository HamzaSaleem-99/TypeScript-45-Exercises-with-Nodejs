function describe_cities(city: string, country : string ='Pakistan'){
    console.log(`${city} is in ${country}`)
}

describe_cities('Karachi');

describe_cities('Tokyo' , 'Japan')

describe_cities('Delhi' , 'India');