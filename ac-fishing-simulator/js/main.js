document.querySelector('button').addEventListener('click', reelIn)


function reelIn() {
    let rando = Math.floor(Math.random() * 79 + 1)
    let url = "https://acnhapi.com/v1/fish/" + rando

    fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector('h2').innerText = data.name["name-USen"]
      document.querySelector('img').src = data.image_uri
      document.querySelector('h3').innerText = `Price: ${data.price}`
      document.querySelector('h4').innerText = data["catch-phrase"]
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}