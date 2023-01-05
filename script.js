//fetching a data in async and await method
async function fetchData(){
    try {
        const response = awaitfetch("https://restcountries.com/v3.1/all");

                const data = awaitresponse.json();
                console.log(data);
        
                data.forEach(element => {
                    const countryRequired={
                        ...element,
                        name: element.name.common
                     region:element.region,
                     capital: element.capital
                    
                    }
                    createCountry(countryRequired)
                    
                });
            }catch (error) {
                console.log(error);
            }
}

function createCountry({name,region,capital}) {
    document.body.innerHTML+=
    <div class = "container">
        <div class = "info">
            <h2>${name}</h2>
            <p><span>Region:</span>${region}</p>
            <p><span>Capital:</span>${capital}</p>
        </div>
    </div>
}
fetchData();






