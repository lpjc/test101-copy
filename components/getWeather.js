export async function getWeather (lon, lat)
{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.700111&lon=-79.416298&appid=849338767c0e95025b5559533d26b7c4&units=metric&fbclid=IwAR3U71rVZ1ZljvzKguwHpzOdHljEdnOb-YNy9cZOa0VJTO1MjgM43hgvc0c`)
    const json = await res.json();
    return json;
}

export const weatherData = {"coord":{"lon":-79.42,"lat":43.7},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":5.01,"feels_like":1.71,"temp_min":3.89,"temp_max":6,"pressure":1007,"humidity":75,"sea_level":1007,"grnd_level":986},"visibility":10000,"wind":{"speed":2.08,"deg":51},"clouds":{"all":100},"dt":1606739752,"sys":{"type":1,"id":718,"country":"CA","sunrise":1606739465,"sunset":1606772546},"timezone":-18000,"id":6167865,"name":"Toronto","cod":200}