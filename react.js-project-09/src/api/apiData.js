import axiox from 'axios'

export const getApiData = async () => {
    const response = await axiox.get("https://fakestoreapi.com/products")
    return response.data
}



