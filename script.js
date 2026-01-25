fetch("https://eoe4ivyffga40tr.m.pipedream.net/")
  .then(res => res.text())
  .then(text => {
    document.getElementById("response").textContent = text;
  })
  .catch(() => {
    document.getElementById("response").textContent = "request failed sadly";
  });
