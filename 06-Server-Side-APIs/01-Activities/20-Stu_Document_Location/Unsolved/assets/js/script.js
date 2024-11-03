var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  if(response.status === 404) {
    document.location.replace(redirectUrl);
  } else return response.json();
})
  .then(function (data) {
  console.log(data)
});
