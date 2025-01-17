require("dotenv").config();

// Print out value of API key stored in .env file

async function getImages(query) {
  let imgArr = [];
  try {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    const response = await fetch(endpoint);

    const data = await response.json();

    let array = data.data;

    for (let i = 0; i < array.length; i++) {
      let link = array[i].url;

      imgArr.push(link);
    }

    return imgArr;
  } catch (error) {
    console.error(error);
  }
}

async function helperFunction() {
  let result = await getImages("cars");
  console.log(result);
}

helperFunction();
