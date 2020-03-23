const puppeteer = require('puppeteer');

(async () => {
  let pokemonUrl = 'https://www.pokemon.com/br/pokedex/';

  let browser = await puppeteer.launch({headless:false});
  let page = await browser.newPage();

  await page.goto(pokemonUrl, {waitUntil: 'networkidle2'});

  let data = await page.evaluate(() => {
    
    let imagePokemon = document.querySelector('section[class="section pokedex-results overflow-visible"');

    return {
      imagePokemon
    }
  });

  console.log(data);

  debugger

  await browser.close();

})()