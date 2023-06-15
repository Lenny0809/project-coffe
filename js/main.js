const coloursrainbow=["red","orange","yellow","green","blue","indigo","violet"];
coloursrainbow.forEach(function(color){
    console.log(color);
    });
    coloursrainbow.forEach.log((color)=>
    console.log(color);
    );


    function fetchData()
    {

fetch("coffe.json")
.then(res=>res.json())

    }
    fetchData();