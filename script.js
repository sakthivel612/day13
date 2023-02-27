// RESTCOUNTRIES & WEATHER USING FETCH API

// Implement the rest countries and open weather map APIs using fetch() API.

 
var API_key = "8260469f298604bcaf571ac8d0c6b7b1"

async function URL(){
    var api = fetch('https://restcountries.com/v3.1/all')
    var response = await api
    var promise = response.json()
    var result = await promise
    // console.log(result);

    var weather_data_all = document.createElement('div')
    weather_data_all.classList.add('weather_data')    
    document.querySelector('.weather_data')

    var row = document.createElement('div')
    row.classList.add('row')
    document.querySelector('.row')

    var col_class = document.createElement('div')
    col_class.classList.add('col-lg-4','col-sm-12')
    document.querySelector('.col-lg-4','col-sm-12')


    for(let i of result){
        try{
            // console.log(i);
            var data_container = document.createElement('div')
            var lat = i.latlng[0]
            var lng = i.latlng[1] 

            data_container.setAttribute('lat',lat)
            data_container.setAttribute('lng',lng)
            console.log(i.latlng)

            data_container.classList.add('country_data')
            data_container.style.border = '2px solid gold'
            data_container.style.margin = '10px'
            data_container.style.padding = '50px'
            data_container.style.display = 'inline-block'
            

            var countryName = document.createElement('p')
            countryName.innerText = i.name.common
            data_container.append(countryName)
            console.log(i.name.common)

            var flag = document.createElement('img')
            flag.setAttribute('src',i.flags.png)
            console.log(i.flags.png)
            data_container.append(flag)
            

            var capital= document.createElement('p')
            console.log(i.capital[0])
            capital.innerText = i.capital[0]
            data_container.append(capital)
            

            var region = document.createElement('p')
            console.log(i.region)
            region.innerText = i.region
            data_container.append(region)
            

            var countryCode = document.createElement('p')
            console.log('countryCode:',i.postalCode.format)
            countryCode.innerText = `countryCode: ${i.postalCode.format}`
            data_container.append(countryCode)
            

            var button_weather = document.createElement('button')
            button_weather.setAttribute('onclick','weatherapi(this)')
            button_weather.innerText = 'Click for weather'
            data_container.append(button_weather)
            col_class.appendChild(data_container)
            row.appendChild(col_class)
            weather_data_all.appendChild(row)
            document.body.appendChild(weather_data_all)

            }catch{
            }
        }
}
URL()


async function weatherapi(e){
    console.log(e);
    console.log(e.parentElement)

    var parent = e.parentElement
    var lat = parent.getAttribute('lat')
    var lng = parent.getAttribute('lng')
    console.log('lat',lat);
    console.log('lng',lng);
     
    var weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}`
    var api2 = fetch(weather_url)
    var response1 = await api2
    var promise2 = response1.json()
    var result2 = await promise2
    console.log(result2) 
}

 weatherapi()

