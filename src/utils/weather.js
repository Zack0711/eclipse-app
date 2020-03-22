const API_ROOT = 'https://api.openweathermap.org/data/2.5/weather'
const API_ID = 'e99ff4972d3316c9f00c76a7bd535a92'

export const getWeatherData = async pos => {
  const url = `${API_ROOT}?lat=${pos.lat}&lon=${pos.lng}&appid=${API_ID}`;

  try {
    return await fetch(url).then( rsp => rsp.json())
  } catch(e){
    console.log(e)
    return null
  }
}
