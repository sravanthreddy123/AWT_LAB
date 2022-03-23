async function movies(){
  let url='https://imdb-api.com/en/API/MostPopularMovies/k_8y1nwuoi';
  const res=await fetch(url);
  let data=await res.json();

    console.log(data);
    let{items}=data;
    items.forEach(element=> {
        let{title,rank}=element;
        console.log("Movie name is"+title+"Rank is"+rank);

});
}
