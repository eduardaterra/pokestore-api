<h1 align=center><img src="./.github/pokestore-api-logo.png" width="350"></img></h1>
<h1 align=center><img src="./.github/pokestore-api.gif"></img></h1>
 <p align=center>This project is a Pokemon Store Api. Got data from <a href="https://pokeapi.co/">PokeApi</a>, customized with a price property and created new resources.<br/>
<strong>Create your own Pokestore and enjoy. Gotta catch’em all! :)</strong></p><br>

## 🧩 Tecnologies

<ul>
<li><a href="https://expressjs.com/">Express.js</a><br></li>
<li><a href="https://www.typescriptlang.org/">Typescript</a><br></li>
<li><a href="https://axios-http.com/">Axios</a><br></li>
<li><a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a><br></li>
<li><a href="https://mongoosejs.com/">Mongoose</a><br></li>
</ul><br>

## 🛣️ Routes

<ul>
<li><a href="https://pokestore-api.herokuapp.com/pokemon">Pokemon Route</a></li>
<li><a href="https://pokestore-api.herokuapp.com/types">Type Route</a></li>
</ul><br>

## 🚀 Resources

<ol>
<li><strong><p>Pagination</p></strong></li><br>
<p>
https://pokestore-api.herokuapp.com/pokemon?<strong>offset</strong>=20&<strong>limit</strong>=20</p><br>
<p>You can see and navigate the API through the Pagination Resources. The <strong>Offset</strong> means the Pokemon Index and <strong>Limit</strong> is how many Pokemon will appear in the page. You can change the URL to customize the Limit and Offset. Also, you have the <strong>Next</strong> and <strong>Previous</strong> to navigate throught the Api more efficiently. This resource also works in the <strong>Type Route</strong>.</p><br>

<li><strong><p>Search Pokemon</p></strong></li><br>
<p>
https://pokestore-api.herokuapp.com/pokemon/<strong>bulbasaur || 1 (key)</strong></p><br>
<p>You can search the Pokemon by adding a <strong>Paramater</strong> after the Pokemon Route. The parameter should be the Pokemon name or key values. If you type the incomplete name, the Api will still show the possible matches.</p><br>

<li><strong><p>Order Page By Name || Key</p></strong></li><br>
https://pokestore-api.herokuapp.com/pokemon?offset=20&limit=20&<strong>order</strong>=name || key</p><br>

<p>You can choose the wanted order to display the Pokemon between <strong>key</strong> or <strong>name</strong>. Other resources will join your choice automatically! This resource also works in the <strong>Type Route</strong>. </p>

</ol>
