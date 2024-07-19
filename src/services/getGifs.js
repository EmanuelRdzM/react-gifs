const apiKey = 'YOUR_API';

export default function getGifs ({keyword = 'pokemon'} = {}){
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=pg-13&lang=en&bundle=low_bandwidth`;

  return fetch(apiURL)
    .then( res => res.json())
    .then(response => {
      const {data = []} = response;
      if (Array.isArray(data)) {
        const gifsAPI = data.map(image => {
          const {images, title, id} = image;
          const {url} = images.downsized_medium
          return {title, id, url};
        })
        return gifsAPI
      }
    }) 
}