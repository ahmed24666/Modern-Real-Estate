import axios from "axios";
const BASE_URL='https://bayut.p.rapidapi.com/'
const options = {
    url: BASE_URL,
    headers: {
      'X-RapidAPI-Key':'3427eff601msh93a0b2b0028377ap17dddfjsndaa81f84633e',
      // 'X-RapidAPI-Key':'3624148276msh0e08a89fdbf13e2p16beb4jsnff2e6d8e597e',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };
  export const getProperties = async (url) => {
    const {data}=await axios.get(`${BASE_URL}${url}`,options)
    return data
  }