const films = [
    {
        "image": "images/avengers.jpg",
        "name": "Avengers:Endgame",
        "givenScore": "8.8",
        "lastUpdate": "SUN 8 SEPT - 10:00PM" ,
        "runningTime": "2HR 09MIN"
      },
      {
        "image": "images/hobbs and shaw.jpg",
        "name": "Hobbs & Shaw",
        "givenScore": "9.7",
        "lastUpdate": "TUE 4 JULY - 06:00PM" ,
        "runningTime": "2HR 13MIN"
      },
      {
        "image": "images/John-Wick-3-1.jpg",
        "name": "John Wick 3",
        "givenScore": "9.8",
        "lastUpdate": "WED 16 AUG - 07:00PM" ,
        "runningTime": "2HR 33MIN"
      },
      {
        "image": "images/deadpool-2-1.jpg",
        "name": "Deadpool 2",
        "givenScore": "7.3",
        "lastUpdate": "MON 16 OCT - 10:00PM" ,
        "runningTime": "2HR 0MIN"
      },
      {
        "image": "images/the lion king.jpg",
        "name": "The Lion King",
        "givenScore": "8.1",
        "lastUpdate": "SUN 8 SEPT - 10:00PM" ,
        "runningTime": "2HR 36MIN"
      },
      {
        "image": "images/mad-max.jpg",
        "name": "Mad Max:Fury Road",
        "givenScore": "7.4",
        "lastUpdate": "TUE 8 JULY - 05:00PM" ,
        "runningTime": "2HR 19MIN"
      },
      {
        "image": "images/aquaman.jpg",
        "name": "Aquaman",
        "givenScore": "8.1",
        "lastUpdate": "WED 16 AUG - 07:00PM" ,
        "runningTime": "2HR 14MIN"
      },
      {
        "image": "images/mission-impossible.jpg",
        "name": "Mission Impossible",
        "givenScore": "7.8",
        "lastUpdate": "MON 16 OCT - 10:00PM" ,
        "runningTime": "2HR 33MIN"
      }
]
render(films);
function render(films) {
  let allDivs = "";
  films.forEach(film => {
    let sampleDiv = `          
<div class="card">
<div class="cardBody">
  <img src="${film.image}" alt="" width="100%" style="height: 250px; border-radius: 10px;">
</div>
<div class="cardDetailsBox">
  <div class="cardDetailsBoxDevided">
      <span class="movieName">${film.name}</span>
      <div><span class="givenScore">${film.givenScore}</span><span class="allScore">/10</span></div>
  </div>
  <div class="cardDetailsBoxDevided">
      <span class="cardTitr">LAST UPDATE</span>
      <span class="cardTitr">RUNNING TIME</span>
  </div>
  <div class="cardDetailsBoxDevided">
      <span class="lastUpdate">${film.lastUpdate}</span>
      <span class="runningTime">${film.runningTime}</span>
  </div>
  </div>
  </div>`;
  allDivs = allDivs + sampleDiv;
});
document.getElementById("movieCardsBox").innerHTML = "";
document.getElementById("movieCardsBox").innerHTML = allDivs;
}
document.getElementById("search").addEventListener("keyup",function(event){
  if (event.keyCode===13) {
  search();
}})
  function search() {
    let name = document.getElementById("search").value;
    let result = [];
films.forEach(film => {
    if (film.name.toLowerCase().includes(name)) {
        result.push(film)
        render(result)
    }
});
  }