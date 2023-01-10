const URL ='https://api.quotable.io/random';


export const randomQuote = async () => {
  try {
    const response = await fetch(URL);
    const quote = await response.json();
    return quote;

  } catch (error) {
    console.log(error);
  }  
}