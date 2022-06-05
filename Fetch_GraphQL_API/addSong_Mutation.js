var axios = require('axios');
//Mutation addSong: Them bai hat vao mongo atlas database. (Khong can truyen vao token cua user vao header)

var data = JSON.stringify({
  query: `mutation ThemBaiHat($name: String!, $author: String!, $imageURL: String
, $URI: String!, $title: String!) {
  addSong(input: {
    name: $name
    author: $author
    imageURL: $imageURL
    URI: $URI
    title: $title
  }) {
    name,
    author,
    id,
    imageURL, 
    URI
    title
  }
}`,
  variables: {"name":"Best friend","author":"Byme","imageURL":"ThisisURL.com","URI":"Fileamthanh","title":"New"}
});

//Su dung post
var config = {
  method: 'post',
  url: 'https://apollo-api-for-musicapp.herokuapp.com/',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
