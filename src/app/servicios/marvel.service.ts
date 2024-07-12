import { Injectable } from '@angular/core';

/*----usar http----*/
import { HttpClient } from "@angular/common/http"

/*----usar map---*/
import { map } from "rxjs/operators"


@Injectable({
  providedIn: 'root'
})

export class MarvelService {
  

  guardarToken:any = "";

  juegos:juegos[] = [

    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/bacon_lob_crd_01.jpg",
      titulo: "Marvel's Wolverine",
      video : "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6271804019001&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/popsicle_lob_crd_01.jpg",
      titulo: "Marvel's Spider-Man 2",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6271804990001&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelsmidnightsuns_lob_crd_03.jpg",
      titulo: "Marvel's Midnight Suns",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6316309440112&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelsnap_lob_crd_01.png",
      titulo: "MARVEL SNAP",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6316809379112&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelsguardiansofthegalaxy_lob_crd_02.jpg",
      titulo: "Marvel's Guardians of the Galaxy",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6315969161112&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/futurerevolution_lob_crd_01.jpg",
      titulo: "MARVEL Future Revolution",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6261621394001&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/donut_lob_crd_01_1.jpg",
      titulo: "Fortnite",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6196150405001&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/msmmm_lob_crd_02.jpg",
      titulo: "Marvel's Spider-Man: Miles Morales",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6208366512001&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelsavengers_lob_crd_01.jpg",
      titulo: "Marvel's Avengers",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6166954241001&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelsironmanvr_lob_crd_02.jpg",
      titulo: "Marvel's Iron Man VR",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6168349620001&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/legomarvelcollectionbundle_lob_crd_01.jpg",
      titulo: "LEGO® Marvel Collection Bundle",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6012753666001&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelultimatealliance3_lob_crd_02.jpg",
      titulo: "Marvel Ultimate Alliance 3: The Black Order",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5976516798001&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelsspider-man_lob_crd_02.jpg",
      titulo: "Marvel's Spider-Man",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6208366512001&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelpowersunitedvr_lob_crd_01.jpg",
      titulo: "MARVEL Powers United VR",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5811364817001&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelcontestofchampions_lob_crd_02.jpg",
      titulo: "Marvel Contest of Champions",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6316888355112&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelfuturefight_lob_crd_03.jpg",
      titulo: "MARVEL Future Fight",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6120783951001&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelstrikeforce_lob_crd_01.jpg",
      titulo: "Marvel Strike Force",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6154727798001&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelpuzzlequest_lob_crd_02_4.jpg",
      titulo: "Marvel vs. Capcom: Infinite",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6193080519001&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelvscapcominfinite_lob_crd_01.jpg",
      titulo: "Marvel vs. Capcom: Infinite",
      video: "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6193080519001&brand=marvel"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelsguardiansofthegalaxythetelltaleseries_lob_crd_01.jpg",
      titulo: "Marvel's Guardians of the Galaxy: The Telltale Series",
      video: "https://www.youtube.com/embed/ypNlxrQ0Ong"
     
    },
    { 
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelpinball_lob_crd_01.jpg",
      titulo: "Marvel Pinball",
      video: "https://www.youtube.com/embed/3H0-1kvvY-Y"
     
    }
  
  ]

  peliculas:movies[] = [
    
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengerssecretwars_lob_crd_01.jpg",
      titulo: "Avengers: Secret Wars",
      anio :  "MAY 1, 2026",
      video:  "https://www.youtube.com/embed/ZiBoru_gYbk"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersthekangdynasty_lob_crd_01.jpg",
      titulo: "Avengers: The Kang Dynasty",
      anio :  "MAY 2, 2025",
      video:  "https://www.youtube.com/embed/4Uy9BP-7_mI"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/fantasticfour_lob_crd_01.jpg",
      titulo: "Fantastic Four",
      anio :  "FEB 14, 2025",
      video:  "https://www.youtube.com/embed/kM3pQe5Jrog"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/deadpool3_lob_crd_01.jpg",
      titulo: "Untitled Deadpool Movie",
      anio :  "NOV 8, 2024",
      video:  "https://www.youtube.com/embed/hJh8l46YV0s"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blade_lob_crd_01.jpg",
      titulo: "Blade",
      anio :  "SEP 6, 2024",
      video:  "https://www.youtube.com/embed/Jq52mKdx_0w"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thunderbolts_lob_crd_01.jpg",
      titulo: "Thunderbolts",
      anio :  "JUL 26, 2024",
      video:  "https://www.youtube.com/embed/UXwzL8emQuo"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericaneworldorder_lob_crd_01.jpg",
      titulo: "Captain America: New World Order",
      anio :  "MAY 3, 2024",
      video:  "https://www.youtube.com/embed/NfAW3-OjpPg"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/themarvels_lob_crd_01.jpg",
      titulo: "The Marvels",
      anio :  "JUL 28, 2023",
      video:  "https://www.youtube.com/embed/Wh1h73V8Pc4"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/guardiansofthegalaxyvolume3_lob_crd_02.jpg",
      titulo: "Guardians of the Galaxy Volume 3",
      anio :  "MAY 5, 2023",
      video:  "https://www.youtube.com/embed/u3V5KDHRQvk"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/antmanandthewaspquantumania_lob_crd_03.jpg",
      titulo: "Ant-Man and The Wasp: Quantumania",
      anio :  "FEB 17, 2023",
      video:  "https://www.youtube.com/embed/51S4llUG5QM"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpantherwakandaforever_lob_crd_06.jpg",
      titulo: "Black Panther: Wakanda Forever",
      anio :  "2022",
      video:  "https://www.youtube.com/embed/QROhcz3aYrM"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorloveandthunder_lob_crd_04.jpg",
      titulo: "Thor: Love and Thunder",
      anio :  "2022",
      video:  "https://www.youtube.com/embed/ZaD7iZR0-5w"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg",
      titulo: "Doctor Strange in the Multiverse of Madness",
      anio :  "2022",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6305086101001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
      titulo: "Spider-Man: No Way Home",
      anio :  "2021",
      video:  "https://www.youtube.com/embed/6QkTCmhOzuA"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/eternals_lob_crd_06.jpg",
      titulo: "Eternals",
      anio :  "2021",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6275688950001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/shangchi_lob_crd_07.jpg",
      titulo: "Shang-Chi and The Legend of The Ten Rings",
      anio :  "2021",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6261916461001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_crd_06.jpg",
      titulo: "Black Widow",
      anio :  "2021",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6246688400001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manfarfromhome_lob_crd_04_3.jpg",
      titulo: "Spider-Man: Far From Home",
      anio :  "2019",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6033358625001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg",
      titulo: "Avengers: Endgame",
      anio :  "2019",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6027157990001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_crd_06.jpg",
      titulo: "Captain Marvel",
      anio :  "2019",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6015326192001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-manthewasp_lob_crd_01.jpg",
      titulo: "Ant-Man and The Wasp",
      anio :  "2018",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5722251911001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_crd_02_1.jpg",
      titulo: "Avengers: Infinity War",
      anio :  "2018",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5662084610001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpanther_lob_crd_01_4.jpg",
      titulo: "Black Panther",
      anio :  "2018",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5738791807001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorragnarok_lob_crd_03.jpg",
      titulo: "Thor: Ragnarok",
      anio :  "2017",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5793457593001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manhomecoming_lob_crd_01_3.jpg",
      titulo: "Spider-Man: Homecoming",
      anio :  "2017",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5790932452001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/guardiansofthegalaxyvol.2_lob_crd_01.jpg",
      titulo: "Guardians of the Galaxy Vol. 2",
      anio :  "2017",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5790932955001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrange_lob_crd_01_6.jpg",
      titulo: "Doctor Strange",
      anio :  "2016",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5790930123001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericacivilwar_lob_crd_01_9.jpg",
      titulo: "Captain America: Civil War",
      anio :  "2016",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5790932946001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-man_lob_crd_01_8.jpg",
      titulo: "Ant-Man",
      anio :  "2015",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5790932937001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersageofultron_lob_crd_03.jpg",
      titulo: "Avengers: Age of Ultron",
      anio :  "2015",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5790937227001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/guardiansofthegalaxy_lob_crd_03.jpg",
      titulo: "Guardians of the Galaxy",
      anio :  "2014",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5791076711001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericathewintersoldier_lob_crd_01_1.jpg",
      titulo: "Captain America: The Winter Soldier",
      anio :  "2014",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5791035995001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorthedarkworld_lob_crd_02_1.jpg",
      titulo: "Thor: The Dark World",
      anio :  "2013",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5793459089001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman3_lob_crd_01_10.jpg",
      titulo: "Iron Man 3",
      anio :  "2013",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5806314068001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg",
      titulo: "The Avengers",
      anio :  "2012",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5806334271001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamerica_lob_crd_01.jpg",
      titulo: "Captain America: The First Avenger",
      anio :  "2011",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5806328337001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thor_lob_crd_01.jpg",
      titulo: "Thor",
      anio :  "2011",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5806334270001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman2_lob_crd_01_3.jpg",
      titulo: "Iron Man 2",
      anio :  "2010",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5786616628001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theincrediblehulk_lob_crd_01_2.jpg",
      titulo: "The Incredible Hulk",
      anio :  "2008",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5786823800001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_3.jpg",
      titulo: "Iron Man",
      anio :  "2008",
      video:  "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=5786306590001&brand=marvel"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/darkphoenix_lob_crd_01.jpg",
      titulo: "X-Men: Dark Phoenix",
      anio :  "2019",
      video:  "https://www.youtube.com/embed/QKbCeqbNDRk"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/deadpool2_lob_crd_02.jpg",
      titulo: "Deadpool 2",
      anio :  "2018",
      video:  "https://www.youtube.com/embed/U6VMFwS2mPk"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/logan_lob_crd_02.jpg",
      titulo: "Logan",
      anio :  "2017",
      video:  "https://www.youtube.com/embed/HrHyGexXP7c"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/fox_x-menapocalypse_lob_crd_01.jpg",
      titulo: "X-Men: Apocalypse",
      anio :  "2016",
      video:  "https://www.youtube.com/embed/TBZjPqYty8E"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/deadpool_lob_crd_02.jpg",
      titulo: "Deadpool",
      anio :  "2016",
      video:  "https://www.youtube.com/embed/QyU7glpHg-c"
    },
    {
      imagen: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/fox_x-mendaysoffuturepast_lob_crd_01.jpg",
      titulo: "X-Men: Days of Future Past",
      anio :  "2014",
      video:  "https://www.youtube.com/embed/-fzkF-oOKS8"
    },

  ]

  comicLanzamientos:lanzamientos[] = [
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/7/70/63b476f63e9d9/portrait_uncanny.jpg",
      titulo :  "Dark Web: Ms. Marvel #2",
      autor  :  "Pirzada, Mortarino",
      url    :  "https://www.marvel.com/comics/issue/104562/dark_web_ms_marvel_2022_2"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/4/50/63b476d7e4794/portrait_uncanny.jpg",
      titulo :  "Miles Morales: Spider-Man #2",
      autor  :  "Ziglar, Vicentini",
      url    :  "https://www.marvel.com/comics/issue/103609/miles_morales_spider-man_2022_2"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/3/70/63b476a56085a/portrait_uncanny.jpg",
      titulo :  "Star Wars: Darth Vader #30",
      autor  :  "Pak, Ross",
      url    :  "https://www.marvel.com/comics/issue/103061/star_wars_darth_vader_2020_30"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/6/03/63b476f322093/portrait_uncanny.jpg",
      titulo :  "Mary Jane & Black Cat #2",
      autor  :  "Mackay, Carratu",
      url    :  "https://www.marvel.com/comics/issue/103018/mary_jane_black_cat_2022_2"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/d/10/63b476f3eeee7/portrait_uncanny.jpg",
      titulo :  "Ghost Rider #10",
      autor  :  "Percy, Smith",
      url    :  "https://www.marvel.com/comics/issue/103001/ghost_rider_2022_10"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/4/a0/639cf556d9755/portrait_uncanny.jpg",
      titulo :  "Incredible Hulk Facsimile Edition #1",
      autor  :  "Lee, Kirby",
      url    :  "https://www.marvel.com/comics/issue/102929/incredible_hulk_facsimile_edition_2023_1"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/4/70/63b476f385e96/portrait_uncanny.jpg",
      titulo :  "Legion of X #9",
      autor  :  "Spurrier, Diaz",
      url    :  "https://www.marvel.com/comics/issue/102526/legion_of_x_2022_9"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/6/40/63b4771db05e5/portrait_uncanny.jpg",
      titulo :  "Black Panther #13",
      autor  :  "Ridley, Peralta",
      url    :  "https://www.marvel.com/comics/issue/102502/black_panther_2021_13"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/3/a0/63b476a3619c6/portrait_uncanny.jpg",
      titulo :  "Wolverine #29",
      autor  :  "Percy, Ryp",
      url    :  "https://www.marvel.com/comics/issue/102277/wolverine_2020_29"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/6/50/63b476a354dc4/portrait_uncanny.jpg",
      titulo :  "X-Men #18",
      autor  :  "Duggan, Villa",
      url    :  "https://www.marvel.com/comics/issue/102228/x-men_2021_18"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/3/c0/63b4771f098c3/portrait_uncanny.jpg",
      titulo :  "The Amazing Spider-Man #17",
      autor  :  "Wells, Mcguinness",
      url    :  "https://www.marvel.com/comics/issue/102185/the_amazing_spider-man_2022_17"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/4/00/63b476cf38339/portrait_uncanny.jpg",
      titulo :  "Monica Rambeau: Photon #2",
      autor  :  "Ewing, Maresca",
      url    :  "https://www.marvel.com/comics/issue/101543/monica_rambeau_photon_2022_2"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/2/80/63b4762c3002a/portrait_uncanny.jpg",
      titulo :  "Wasp #1",
      autor  :  "Ewing, Nie",
      url    :  "https://www.marvel.com/comics/issue/106471/wasp_2023_1"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/d/c0/63b4765466514/portrait_uncanny.jpg",
      titulo :  "Avengers Two: Wonder Man And Beast - Marvel Tales #1",
      autor  :  "Bradshaw",
      url    :  "https://www.marvel.com/comics/issue/105923/avengers_two_wonder_man_and_beast_-_marvel_tales_2023_1"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/4/00/63b4769216e6f/portrait_uncanny.jpg",
      titulo :  "Avengers Forever #13",
      autor  :  "Aaron, Kuder",
      url    :  "https://www.marvel.com/comics/issue/104880/avengers_forever_2021_13"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/6/c0/63b4767e5bb82/portrait_uncanny.jpg",
      titulo :  "Dark Web: X-Men #3",
      autor  :  "Duggan, Reis",
      url    :  "https://www.marvel.com/comics/issue/104565/dark_web_x-men_2022_3"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/2/d0/63b476a10903b/portrait_uncanny.jpg",
      titulo :  "Alien #5",
      autor  :  "Johnson, Ohta",
      url    :  "https://www.marvel.com/comics/issue/103782/alien_2022_5"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/2/03/63b4762c27070/portrait_uncanny.jpg",
      titulo :  "Venom #15",
      autor  :  "Ewing, Hitch",
      url    :  "https://www.marvel.com/comics/issue/103644/venom_2021_15"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/6/20/63b4762c312fd/portrait_uncanny.jpg",
      titulo :  "Star Wars: Bounty Hunters #30",
      autor  :  "Sacks, Villanelli",
      url    :  "https://www.marvel.com/comics/issue/103050/star_wars_bounty_hunters_2020_30"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/a/03/63b476530487b/portrait_uncanny.jpg",
      titulo :  "Spider-Man: The Lost Hunt #3",
      autor  :  "J.M. DeMatteis, Hotz",
      url    :  "https://www.marvel.com/comics/issue/103034/spider-man_the_lost_hunt_2022_3"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/3/e0/63b476756e35b/portrait_uncanny.jpg",
      titulo :  "Iron Man #2",
      autor  :  "Duggan, Frigeri",
      url    :  "https://www.marvel.com/comics/issue/101530/iron_man_2022_2"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/6/d0/63b4767c76af2/portrait_uncanny.jpg",
      titulo :  "Deadly Neighborhood Spider-Man #4",
      autor  :  "B. Earl, Ferreyra",
      url    :  "https://www.marvel.com/comics/issue/101156/deadly_neighborhood_spider-man_2022_4"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/3/60/63b4762c2b547/portrait_uncanny.jpg",
      titulo :  "Wakanda #4",
      autor  :  "Narcisse, Shaw",
      url    :  "https://www.marvel.com/comics/issue/100417/wakanda_2022_4"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/d/70/63b4765344037/portrait_uncanny.jpg",
      titulo :  "Namor: Conquered Shores #4",
      autor  :  "Cantwell, Ferry",
      url    :  "https://www.marvel.com/comics/issue/100391/namor_conquered_shores_2022_4"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/d/70/63b4765344037/portrait_uncanny.jpg",
      titulo :  "Namor: Conquered Shores #4",
      autor  :  "Cantwell, Ferry",
      url    :  ""

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/3/e0/63b476509f9b2/portrait_uncanny.jpg",
      titulo :  "Strange #10",
      autor  :  "Mackay, Ferreira",
      url    :  "https://www.marvel.com/comics/issue/100045/strange_2022_10"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/9/20/63b4762c2dcf1/portrait_uncanny.jpg",
      titulo :  "Star Wars: Han Solo & Chewbacca #9",
      autor  :  "Guggenheim, Messina",
      url    :  "https://www.marvel.com/comics/issue/96857/star_wars_han_solo_chewbacca_2022_9"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/3/a0/63b4765339aa7/portrait_uncanny.jpg",
      titulo :  "Peter Parker & Miles Morales: Spider-Men Double Trouble #3",
      autor  :  "Ayala, Gurihiru",
      url    :  "https://www.marvel.com/comics/issue/94632/peter_parker_miles_morales_spider-men_double_trouble_2022_3"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/4/50/63b4767c6279f/portrait_uncanny.jpg",
      titulo :  "Deadpool #3",
      autor  :  "Wong, Coccolo",
      url    :  "https://www.marvel.com/comics/issue/93030/deadpool_2022_3"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/8/03/63b476530f553/portrait_uncanny.jpg",
      titulo :  "Punisher #9",
      autor  :  "Aaron, Saiz",
      url    :  "https://www.marvel.com/comics/issue/92270/punisher_2022_9"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/7/10/63b4767b8f5a7/portrait_uncanny.jpg",
      titulo :  "Immortal X-Men #10",
      autor  :  "Gillen, Werneck",
      url    :  "https://www.marvel.com/comics/issue/91741/immortal_x-men_2022_10"

    },
    {
      imagen :  "https://i.annihil.us/u/prod/marvel/i/mg/6/b0/63b4767c13f7c/portrait_uncanny.jpg",
      titulo :  "Hulk #11",
      autor  :  "Ottley, Ottley",
      url    :  "https://www.marvel.com/comics/issue/91730/hulk_2021_11"

    }
    
  ]

  SeriesTv:any[] = [
    {
      marvelDisney : [
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/legends_lob_crd_01.jpg",
          titulo : "Marvel Studios: Legends",
          anio   : "2021",
          video  : "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6221275251001&brand=marvel"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/wandavision_lob_crd_06.jpg",
          titulo : "WandaVision",
          anio   : "2021",
          video  : "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6215509803001&brand=marvel"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/falcws_lob_crd_03.jpg",
          titulo : "The Falcon and The Winter Soldier",
          anio   : "2021",
          video  : "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6241580825001&brand=marvel"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/loki_lob_crd_04.jpg",
          titulo : "Loki | Season 1",
          anio   : "2021",
          video  : "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6215507931001&brand=marvel"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/whatif_lob_crd_01.jpg",
          titulo : "What If...? | Season 1",
          anio   : "2021",
          video  : "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6262751537001&brand=marvel"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/hawkeye_lob_crd_04.jpg",
          titulo : "Hawkeye",
          anio   : "2021",
          video  : "https://www.youtube.com/embed/5VYb3B1ETlk"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/moonknight_lob_crd_05.jpg",
          titulo : "Moon Knight",
          anio   : "2022",
          video  : "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6302350349001&brand=marvel"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/msmarvel_lob_crd_04.jpg",
          titulo : "Ms. Marvel",
          anio   : "2022",
          video  : "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6307414530112&brand=marvel"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/iamgroot_lob_crd_04.jpg",
          titulo : "I Am Groot",
          anio   : "2022",
          video  : "https://www.youtube.com/embed/D7eFpRf4tac"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/shehulk_lob_crd_04.jpg",
          titulo : "She-Hulk: Attorney-at-Law",
          anio   : "2022",
          video  : "https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6311067686112&brand=marvel"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/werewolfbynight_lob_crd_01.jpg",
          titulo : "Werewolf By Night",
          anio   : "2022",
          video  : "https://www.youtube.com/embed/bLEFqhS5WmI"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theguardiansofthegalaxyholidayspecial_lob_crd_02.jpg",
          titulo : "The Guardians of the Galaxy Holiday Special",
          anio   : "2022",
          video  : "https://www.youtube.com/embed/OYhFFQl4fLs"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/secretinvasion_lob_crd_03.jpg",
          titulo : "Secret Invasion",
          anio   : "2023",
          video  : "https://www.youtube.com/embed/sQY6Umchw2M"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/echo_lob_crd_01.jpg",
          titulo : "Echo",
          anio   : "2023",
          video  : "https://www.youtube.com/embed/HewiZqo1bKM"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/lokis2_lob_crd_01.jpg",
          titulo : "Loki | Season 2",
          anio   : "2023",
          video  : "https://www.youtube.com/embed/b5aAlFnMI88"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironheart_lob_crd_02.jpg",
          titulo : "Ironheart",
          anio   : "2023",
          video  : "https://www.youtube.com/embed/nqkpDcWK7eM"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/agathacovenofchaos_lob_crd_01.jpg",
          titulo : "Agatha: Coven of Chaos",
          anio   : "2023",
          video  : "https://www.youtube.com/embed/RVwJp_959d8"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/daredevilbornagain_lob_crd_01.jpg",
          titulo : "Daredevil: Born Again",
          anio   : "2024",
          video  : "https://www.youtube.com/embed/YH3UV5hklKc"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/armorwars_lob_crd_02.jpg",
          titulo : "Armor Wars",
          anio   : "2025",
          video  : "https://www.youtube.com/embed/NsBG8aPzMLM"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/xmen97_lob_crd_01_rev.jpg",
          titulo : "X-Men '97",
          anio   : "2025",
          video  : "https://www.youtube.com/embed/jEVUcY9IlNI"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/whatif2_lob_crd_01.jpg",
          titulo : "What If...? | Season 2",
          anio   : "2025",
          video  : "https://www.youtube.com/embed/tZKQGt0-dsU"
        },
         {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manfreshmanyear_lob_crd_01.jpg",
          titulo : "Spider-Man: Freshman Year",
          anio   : "2025",
          video  : "https://www.youtube.com/embed/fbvp8IAoaDw"
        },
        {  
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelzombies_lob_crd_01.jpg",
          titulo : "Marvel Zombies",
          anio   : "2025",
          video  : "https://www.youtube.com/embed/G16auzDRIW0"
        },

      ]
    },
    {
      noFiccion: [
        {
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/assembled_lob_crd-01.jpg",
          titulo : "Marvel Studios Assembled",
          anio   : "2021",
          video  : "https://www.youtube.com/embed/VybOxMZ-NGQ"
        },
        {
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/behindthemask_lob_crd_02.jpg",
          titulo : "Marvel's Behind the Mask",
          anio   : "2021",
          video  : "https://www.youtube.com/embed/ZZKzPblr1lc"
        },
        {
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel616_lob_crd_02_1.jpg",
          titulo : "Marvel's 616",
          anio   : "2021",
          video  : "https://www.youtube.com/embed/1ODhWjCxydU"
        },
        {
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelsheroproject_lob_crd_01.jpg",
          titulo : "Marvel's Hero Project | Season 1",
          anio   : "2020",
          video  : "https://www.youtube.com/embed/qpwRyA9pfFs"
        },
      ]
    },
    {
      marvelHulu : [
        {
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/hitmonkey_lob_crd_02.jpg",
          titulo : "Marvel's Hit-Monkey",
          anio   : "2021",
          video  : "https://www.youtube.com/embed/9AcQxOYcTGg"
        },
        {
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/modok_lob_crd-02_1.jpg",
          titulo : "Marvel's M.O.D.O.K.",
          anio   : "2021",
          video  : "https://www.youtube.com/embed/zkIfhxezXIk"
        },
        {
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/runaways_s3_lob_crd_03.jpg",
          titulo : "Marvel's Runaways",
          anio   : "2019",
          video  : "https://www.youtube.com/embed/y-OJVwUG76k"
        },
        {
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/legion_lob_crd_04.jpg",
          titulo : "Legion",
          anio   : "2019",
          video  : "https://www.youtube.com/embed/4SZ3rMMYBLY"
        },
        {
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/cloakanddagger_lob_crd_02_1.jpg",
          titulo : "Marvel's Cloak and Dagger",
          anio   : "2019",
          video  : "https://www.youtube.com/embed/zW_4nKoIvbw"
        },
        {
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thegifteds2_lob_crd_01.jpg",
          titulo : "The Gifted",
          anio   : "2018",
          video  : "https://www.youtube.com/embed/TTFq1NwhJr0"
        },
      ]
    },
    {
      animacion : [
        {
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/moongirlanddevildinosaur_lob_crd_03.jpg",
          titulo : "Marvel's Moon Girl and Devil Dinosaur",
          anio   : "2023",
          video  : "https://www.youtube.com/embed/D0E4YkDwLzA"
        },
        {
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spidey_lob_crd_01.jpg",
          titulo : "Marvel's Spidey and his Amazing Friends",
          anio   : "2021",
          video  : "https://www.youtube.com/embed/Drh7TYrVo6M"
        },
        {
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/animatedavengers_lob_crd_02.jpg",
          titulo : "Marvel's Avengers",
          anio   : "2018",
          video  : "https://www.youtube.com/embed/np4Zb986lAE"
        },
        {
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/animatedgotg_lob_crd_01.jpg",
          titulo : "Marvel's Guardians of the Galaxy",
          anio   : "2018",
          video  : "https://www.youtube.com/embed/HWxae2ddVh4"
        },
        {
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/animatedmarvelrising_lob_crd_01.jpg",
          titulo : "Marvel Rising",
          anio   : "2018",
          video  : "https://www.youtube.com/embed/6UiNnW_2STI"
        },
        {
          imagen : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/animatedspider-man_lob_crd_01.jpg",
          titulo : "Marvel's Spider-Man",
          anio   : "2018",
          video  : "https://www.youtube.com/embed/QDB0mqvhn54"
        },

      ]
    }
  ]
  

  

  constructor( private http: HttpClient) {
    
    this.leerToken();
    
  }





  /*-----juegos----*/
  getJuegos(){ 
    return this.juegos;
  }

  getUnJuego(posicion:number){

    return this.juegos[posicion];
  }


  /*-----peliculas----*/
  getPeliculas(){
    return this.peliculas;
  }


  getUnaPelicula( posicion:number ){
    return this.peliculas[ posicion ]
  }


  /*-----lanzamientos-----*/
  getLanzamientos(){
    return this.comicLanzamientos;
  }

  getUnLanzamiento( posicion:any ){
    return this.comicLanzamientos[ posicion] ;
  }

  
  /*------series-----*/
  getSeriesTv(){

    return this.SeriesTv
  }

  getUnaSerie( posicionArr:any, termino:any, posicion:number ){

    return this.SeriesTv[posicionArr][`${termino}`][ posicion ]
  }





  //https://gateway.marvel.com/v1/public/series?ts=1&apikey=f54144f48f607fe8bd0e73923d0351da&hash=85905d22e54a4da52a51e458f598ec18

  getComics(){
    
    return this.http.get( `https://gateway.marvel.com/v1/public/comics?limit=100&format=magazine&orderBy=title&ts=1&apikey=f54144f48f607fe8bd0e73923d0351da&hash=85905d22e54a4da52a51e458f598ec18` );
  
  }

  getDetalleComic( idComic:number ){
  
    const URL             = "https://gateway.marvel.com/v1/public/";
    const DATO            = "comics";
    const TS              = "?ts=1";
    const API_KEY_PUBLIC  = "&apikey=f54144f48f607fe8bd0e73923d0351da";
    const APIS_HASH       = "&hash=85905d22e54a4da52a51e458f598ec18"; 

    return this.http.get(`${ URL + DATO + "/"+ idComic + TS + API_KEY_PUBLIC + APIS_HASH }`)

  }


  /*---------select comics-------------*/
  getSelectComics( categoria:string, tipo:any ){

    return this.http.get(`https://gateway.marvel.com/v1/public/comics?limit=100&format=${ categoria }${ tipo }&orderBy=title&ts=1&apikey=f54144f48f607fe8bd0e73923d0351da&hash=85905d22e54a4da52a51e458f598ec18`)
                    .pipe(
                      map( (resp:any) => {
                        return resp.data.results;
                      } )
                    )

  }

  /*---------select comics-------------*/



  getSeries(){
    
    return this.http.get(`https://gateway.marvel.com/v1/public/series?contains=digital%20comic&limit=100&ts=1&apikey=f54144f48f607fe8bd0e73923d0351da&hash=85905d22e54a4da52a51e458f598ec18`)
                    .pipe(
                      map( (resp:any) => {
                        return resp.data.results
                      })
                    )
  }


  getDetalleSerie( idSerie:number ){

    return this.http.get(`https://gateway.marvel.com/v1/public/series/${ idSerie }?limit=100&ts=1&apikey=f54144f48f607fe8bd0e73923d0351da&hash=85905d22e54a4da52a51e458f598ec18`)
                    .pipe(
                      map( (resp:any) => {
                        return resp.data.results[0]
                      } )
                    )
  }




  
  /*------------select----------*/
  getSeriesCombo( serie:string ){

    return this.http.get(`https://gateway.marvel.com/v1/public/series?contains=${ serie }&limit=100&ts=1&apikey=f54144f48f607fe8bd0e73923d0351da&hash=85905d22e54a4da52a51e458f598ec18`)
               .pipe(
                map( (resp:any) => {
                  return resp.data.results

                } )
               )
  }





  /*--------------------registar usuario-----------------*/
    
  /*----

Documentacion:
  https://console.firebase.google.com/project/marvel-d06c2/authentication/users
  https://firebase.google.com/docs/reference/rest/auth#section-create-email-password


  firebase:

  1. autenticacion -> sing y method -> correo y contraseña -> habilitar
  2. pasar a la pestaña de usuario/user

  ----*/
  // Api_key:  AIzaSyCcjT1T153DhETv3PPVej59kHjybvXTHoE

  
  registrarUsuario( valorCampo:any ){

    const datos = {
      
      name : valorCampo.controls['nombre'].value,
      email : valorCampo.controls['email'].value,
      password  : valorCampo.controls['pass'].value,
      volverSecureToken : true
    }

    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcjT1T153DhETv3PPVej59kHjybvXTHoE`, datos )

  }

  loginUsuario( datosLogin:any ){
        
    const daLogin = {

      email:      datosLogin.controls['emailLogin'].value,
      password :  datosLogin.controls['passLogin'].value,
      volverSecureToken : true
    
    }

    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcjT1T153DhETv3PPVej59kHjybvXTHoE`, daLogin )
               .pipe(
                   map( (resp:any) => {
                      
                       this.guardarToken = resp['idToken'];
                       this.guardarTokenLocalStorage();
                        
                       return resp;
                   })
               )

  }


  guardarTokenLocalStorage(){

    localStorage.setItem( "token", this.guardarToken );
  
  }
  

  leerToken(){

    if( localStorage.getItem('token') ){
      
      this.guardarToken = localStorage.getItem('token')
    
    }else{
      
      this.guardarToken = "";
    }
  
  }


  
  borrarToken(){

    localStorage.removeItem('token');
 
  }


  autenticarGuard(){

    return this.guardarToken.length > 2;
  
  }
  

}








/*--------------------interface----------------*/
export interface juegos {
  
  imagen :string,
  titulo :string,
  video  :string

}

export interface movies {

  imagen : string;
  titulo : string;
  anio   : string;
  video  : string
}

export interface lanzamientos {

  imagen : string;
  titulo : string;
  autor  : string;
  url    : string;
}




