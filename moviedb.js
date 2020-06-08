<head>
<meta charstset= "UTF-8">
<title>Using TheMovieDB</title>
<meta name ="  viewport" content ="width"- device- width">
<!--...-->
</head>
<body>
<h1> Using TheMovieDB.org API v3</h1>
<div id="output">
<!--output will go here-->
</div>
<script src= "./js/key.js"></script>
<script>
/**** */
SAMPLE URLS
1. To get  the congig data like image base URLS
https://api.themoviedb.org/3/configuration?api_key=<APIKEY>
let base URL = 'https://api.themoviedb.org/3/';
let configData = null;
let baseImageURL = null;
let getConfig = function()
{
    let url = "".concat(baseURL,'configuration?api_key=',APIKEY);
    fetch(url)
    .then(result)=>{
return result.json();
    })
    .then((data)=>{
    baseImage URL = data.images.secure_base_url;
    configData = data.images;
    console.log('config:', data);
    console.log('config:, fetched');
    runsearch('jaws')
    })
    catch(function(err)){
        alert(err);
    });
}

let runsearch = function(keyword){
    let url = ".concat(baseURL,'search/movie?api_key=', APIKEY, '&query =', keyword)";
    fetch(url)
    .then(result=>result.json())
    .then(data)=>{
        //process the returned data
        document.getElementBvId('output').innerHTML= JSON.string
    }
}
    }


</APIKEY>

</script>
