export const fetchNews = async(city) =>{
    const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=331436f60e8c45a585e121106250412&q=${city}&aqi=yes`)
    const data = await response.json()
    return data.articles
    
}