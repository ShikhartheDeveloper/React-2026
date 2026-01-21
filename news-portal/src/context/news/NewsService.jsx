export const fetchNews = async(topic) =>{
    const response = await fetch (`https://newsapi.org/v2/everything?q=${topic}&from=2025-12-16&sortBy=publishedAt&apiKey=f4063a0cecc847be98c9cdbdf3a7b2cf`)
    const data = await response.json()
    return data.articles
    
}