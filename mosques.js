//localStorage.clear();

if (localStorage.getItem("infoMosques") !== null) {
  infoMosques = JSON.parse(window.localStorage.getItem("infoMosques"));
  console.log(infoMosques);
} else
  infoMosques = [
    {
      title: "Jawatha Mosque",
      info: `Jawatha Mosque is located in the [[Jawāthā ]], about 12 km (7.5 mi) northeast of Hofuf, Al-Ahsa, Saudi Arabia. It was the earliest known mosque built in eastern Arabia, and most of the original structure is in ruins. Nevertheless, the site is still used for prayer.
It was built in the seventh year of the Hijrah (c. 629 CE), or c. 636 CE, at the hands of the Bani Abd al-Qays tribe, which lived there before and early in the Islamic period. This mosque is believed to be the first mosque built in Eastern Province and where the second Friday congregation prayer in Islam was offered, the first being held in the Prophet's Mosque in Medina. According to legend, when the Hajr Al-Aswad (Black Stone) was stolen from Mecca by the Qarmatians, it was kept in this mosque for nearly 22 years.
Most of the mosque's original structure has been lost and it remains in danger of collapse. Only five small mud-brick arches remain. The visible ruins probably date from around the 9th century AD. The mosque's current structure's design is similar to the design of Masmak fort in Saudi Arabia.`,
      date: "7 H",
      area: "206.5",
      image:
        "https://madainproject.com/content/media/collect/jawatha_masjid_3761.jpg",
      fav: "fa fa-star favIconChecked",
      btn: "btnShowElement",
      loc: "Jawatha, Saudi Arabia",
    },
    {
      title: "Ibn Tulun Mosque",
      info: `The Mosque of Ibn Tulun is located in Cairo, Egypt. It is one of the oldest mosques in Egypt as well as the whole of Africa surviving in its full original form, and is the largest mosque in Cairo in terms of land area. Since Ibn Tulun Mosque has much open space, it boasts both sunlight and shadows. It is built around an open square courtyard which allows natural light to travel through. Ibn Tulun Mosque features ancient architecture styles of Egypt, its decorations being created from carved stucco and wood. This mosque is a popular tourist attraction.
`,
      date: "263 H",
      area: "26,000",
      image:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/8e/84.jpg",
      fav: "fa fa-star favIconChecked",
      btn: "btnShowElement",
      loc: "Cairo, Egypt",
    },
    {
      title: "Al-Hakim Mosque",
      info: `Al-Hakim Mosque is also known as Al-Jamiʿ al-Anwar. Its construction was initiated by Al-Aziz Billah in the year 990 and the following Friday prayers took place in it. Al-Hakim bi-Amr Allah resumed construction work in year 1003, with its inauguration taking place in Ramadan of year 1013. The Mosque was constructed at a cost of 40,000 dinars after which another 5,000 dinars were spent on furnishings. At the time of inauguration, Al-Hakim bi-Amr Allah permitted a celebratory procession which made its way from al-Azhar to al-Anwar and from al-Anwar back to al-Azhar.
The interior of the mosque is an open courtyard with parallel columns, forming a rectangle shape all around. In late 1010, Al Hakim ordered for the minarets to be at an angle and that the columns of the masjid to be very tall to cover the inside of the mosque. The mosque's walls were symmeterically arranged within each other. The mosque had originally more than thirteen entrances hence the open space courtyard, one can enter from wherever. Masjid Al Hakim is very similar in architectural design with the Mosque of ibn Tulun: It consists of an irregular rectangle with four arcades surrounding the courtyard. An unusual feature is the monumental entrance with its projecting stone porch.
This Fatimid style mosque was built over the span of twenty years with considerable communal effort. It is located in Islamic Cairo, on the east side of Muizz Street, just south of Bab Al-Futuh (the northern gate).`,
      date: "379 AH",
      area: "16,000",
      image:
        "https://www.alkhaleej.ae/sites/default/files/styles/d08_standard/public/migrated/283e742a-6d48-4c29-a77d-dfda14b1c7b8.jpg?h=827069f2&itok=TFBcbkle",
      fav: "fa fa-star favIconChecked",
      btn: "btnShowElement",
      loc: "Cairo, Egypt",
    },
    {
      title: "Kobe Mosque",
      info: `Kobe Masjid was founded in October, 1935 in Kobe and is Japan's first masjid. Its construction was funded by donations collected by the Islamic Committee of Kobe from 1928 until its opening in 1935. The mosque was confiscated by the Imperial Japanese Navy in 1943. However, it continues to function as mosque today. It is located in the Kitano-cho foreign district of Kobe. The mosque survived the air raids that laid waste to most of Kobe's urban districts in 1945 and was able to endure through the Great Hanshin earthquake in 1995. The mosque is located in one of Kobe's best-known tourist areas, which features many old western style buildings.
The mosque was built in traditional Indo-Islamic style by the Czech architect Jan Josef Švagr (1885–1969), the architect of a number of Western religious buildings throughout Japan. In recent years there are more than 110 mosques in Japan.`,
      date: "1928",
      area: "1,500",
      map: "34°41′46″N 135°11′16″E",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tokyo_Camii_2009.jpg/1200px-Tokyo_Camii_2009.jpg",
      fav: "fa fa-star favIconChecked",
      btn: "btnShowElement",
      loc: "Kobe, masjid",
    },
    {
      title: "Sinan Pasha Mosque",
      info: `The Sinan Pasha Mosque is an Ottoman mosque in the city of Prizren, Kosovo. It was built in 1615 by Sofi Sinan Pasha, bey of Budim. The mosque overlooks the main street of Prizren and is a dominant feature in the town's skyline.
Sofi Sinan Pasha started construction of the mosque in either 1600 or 1608. Sofi Sinan Pasha, an Albanian and former beylerbey and kaymakam in Bosnia should not be confused with grand vizier Sinan Pasha, who built the Sinan Pasha Mosque in the nearby city of Kačanik.
It is widely considered that the stones used to build the mosque were taken from nearby Saint Archangels Monastery, a Serbian Orthodox monastery founded by Serbian Emperor Stefan Dušan. In fact, parts of the former monastery can be seen in the mosque. The monastery, which was abandoned after the arrival of the Ottomans in the 16th century, had fallen to ruins by the 17th century. Hasan Kaleshi, an Albanian historian, sustained in 1972 that Sofi Sinan Pasha couldn't have possibly ordered any monastery destruction as this was impossible without a Sultan decree, rather, he ordered the use of the spare stones to a better deed as ordered by the Sultan.`,
      date: "1,600",
      area: "196",
      image:
        "https://st.depositphotos.com/2442973/5104/i/950/depositphotos_51048321-stock-photo-view-at-the-sinan-pasha.jpg",
      fav: "fa fa-star favIconChecked",
      btn: "btnShowElement",
      loc: "Prizren, Kosovo",
    },

    {
      title: "Hassan II Mosque",
      info: `The Hassan II Mosque is a mosque in Casablanca, Morocco. It is the second largest functioning mosque in Africa and is the 7th largest in the world. Its minaret is the world's second tallest minaret at 210 metres (689 ft). Completed in 1993, it was designed by Michel Pinseau under the guidance of King Hassan II and built by Moroccan artisans from all over the kingdom. The minaret is 60 stories high topped by a laser, the light from which is directed towards Mecca. The mosque stands on a promontory looking out to the Atlantic Ocean; worshippers can pray over the sea but there is no glass floor looking into the sea. The walls are of hand-crafted marble and the roof is retractable. A maximum of 105,000 worshippers can gather together for prayer: 25,000 inside the mosque hall and another 80,000 on the mosque's outside ground.
`,
      date: "1414 H",
      area: "20,000",
      image:
        "https://i.pinimg.com/originals/86/7c/e9/867ce91f62feb7ba78329d7b0fd9812c.jpg",
      fav: "fa fa-star favIconChecked",
      btn: "btnShowElement",
      loc: "Casablanca, Morocco",
    },

    {
      title: "Quba Mosque",
      info: `The Quba Mosque is a mosque located on the outskirts of Medina, Saudi Arabia. Initially, the mosque was built 6 kilometers (3.7 miles) off Medina in the village of Quba, before Medina expanded to include this village. Depending on whether the Mosque of the Companions in the Eritrean city of Massawa is older or not, it may be the first mosque in the world that dates to the lifetime of The Islamic Prophet Muhammad in the 7th century CE. According to records, its first stones were positioned by Muhammad as soon as he arrived on his emigration from the city of Mecca to Medina, and the mosque was completed by his companions. Muhammad spent 14 days in this mosque praying qaṣr while waiting for Ali to arrive in Medina, after the latter stayed behind in Mecca to safeguard Muhammad’s life and safe escape by sleeping in Muhammad’s bed in his place, an event referred to in the Quran, sura al Baqara verse 207. Also going along with traditional saying, this mosque is said to be where the first Friday prayer was held, led by Muhammad.`,
      date: "1 H",
      area: "5,000",
      image:
        "https://vid.alarabiya.net/images/2018/12/24/d41240f6-4eb2-4b0d-97e3-0b3a7076c73f/d41240f6-4eb2-4b0d-97e3-0b3a7076c73f.JPG",
      fav: "fa fa-star favIconChecked",
      btn: "btnShowElement",
      loc: "Medina, Saudi Arabia",
    },

    {
      title: "Sultan Ahmed Mosque",
      info: `Sultan Ahmed Mosque also known as the Blue Mosque, is an Ottoman-era historical imperial mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb, a madrasah and a hospice. Hand-painted blue tiles adorn the mosque’s interior walls, and at night the mosque is bathed in blue as lights frame the mosque’s five main domes, six minarets and eight secondary domes. It sits next to the Hagia Sophia, the principal mosque of Istanbul until the Blue Mosque's construction and another popular tourist site.
After the Peace of Zsitvatorok and the crushing loss in the 1603–18 war with Persia, Sultan Ahmed I decided to build a large mosque in Istanbul to reassert Ottoman power. It would be the first imperial mosque for more than forty years. While his predecessors had paid for their mosques with the spoils of war, Ahmed I procured funds from the Treasury, because he had not gained remarkable victories. The construction was started in 1609 and completed in 1616.
`,
      date: "1609",
      area: "4,608",
      image:
        "https://www.swedishnomad.com/wp-content/images/2019/01/Blue-Mosque.jpg",
      fav: "fa fa-star favIconChecked",
      btn: "btnShowElement",
      loc: "Istanbul, Turkey",
    },

    {
      title: "Süleymaniye Mosque",
      info: `The Süleymaniye Mosque is an Ottoman imperial mosque located on the Third Hill of Istanbul, Turkey. The mosque was commissioned by Suleiman the Magnificent and designed by the imperial architect Mimar Sinan. An inscription specifies the foundation date as 1550 and the inauguration date as 1557. Behind the qibla wall of the mosque is an enclosure containing the separate octagonal mausoleums of Suleiman the Magnificent and that of his wife Hurrem Sultan (Roxelana). For 462 years, the Süleymaniye Mosque was the largest mosque in the city, until it was surpassed by the Çamlıca Mosque in 2019. The Süleymaniye Mosque is one of the best-known sights of Istanbul, and from its location on the Third Hill, it commands an extensive view of the city around the Golden Horn.`,
      date: "1550",
      area: "1378",
      image:
        "https://www.realtyports.com/wp-content/uploads/2020/09/suleymaniye-to-vefa-trail-of-architect-sinan-.jpg",
      fav: "fa fa-star favIconChecked",
      btn: "btnShowElement",
      loc: "Istanbul, Turkey",
    },
  ];

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
