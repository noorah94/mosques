infoMosques = [];
if (localStorage.getItem("infoMosques") !== null) {
  infoMosques = JSON.parse(window.localStorage.getItem("infoMosques"));
  console.log(infoMosques);
}

const favSelected = (index) => {
  if (infoMosques[index].fav === "fa fa-star") {
    infoMosques[index].fav = "fa fa-star favIconChecked";
    //localStorage.removeItem(index);
  } else {
    infoMosques[index].fav = "fa fa-star";
    //localStorage.setItem(index, index);
  }
  localStorage.setItem("infoMosques", JSON.stringify(infoMosques));
  console.log("ddd" + localStorage);
  renderList();
};

const showSelected = (index) => {
  //console.log(index);
  infoMosques[index].btn = "btnShowElement2";
  localStorage.setItem("infoMosques", JSON.stringify(infoMosques));
  console.log(infoMosques);
  localStorage.setItem("index", index);
  window.location.href = "showInfo.html";
};

function renderList() {
  $(".mosquesElements").html("");

  let count = 0;
  for (let i = 0; i < infoMosques.length; i++) {
    if (infoMosques[i].fav === "fa fa-star") {
      $(".mosquesElements").append(`<div class="element">
        <img
          src="${infoMosques[i].image}"
          alt=""
          class="imgElement"
        />

        <div class="insideElement">
          <h4>${infoMosques[i].title}</h4>
          <h5>${infoMosques[i].area} m²</h5>
          <p>
          <br/>  
            <i
              >${infoMosques[i].loc}.</i
            >
          </p>

          <button class="${infoMosques[i].btn}" onclick="showSelected(${i})">SHOW INFO</button>
          <button class="favIcon" onclick="favSelected(${i})">
            <span
              class="${infoMosques[i].fav}"
            ></span>
          </button>
        </div>
      </div>`);
    }
  }
}

renderList();

document.querySelector("input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    console.log(document.getElementById("input").value);
    if (document.getElementById("input").value === "")
      alert("Nothing to search");
    else {
      localStorage.setItem("search", document.getElementById("input").value);
      window.location.href = "search.html";
    }
  }
});
