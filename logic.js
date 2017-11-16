var header = document.querySelector('header');
var section = document.querySelector('section');
// JSONObject jsonObject = new JSONObject();
// function load() {
//     var mydata = JSON.parse(data);
// 	alert(mydata[0].name);
	
// }

// function loadJSON(callback) {   
    
//         var xobj = new XMLHttpRequest();
//             xobj.overrideMimeType("application/json");
//         xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
//         xobj.onreadystatechange = function () {
//               if (xobj.readyState == 4 && xobj.status == "200") {
//                 // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//                 callback(xobj.responseText);
//               }
//         };
//         xobj.send(null);  
//     }

//     loadJSON(function(response) {
//         // Do Something with the response e.g.
//         jsonresponse = JSON.parse(response);
    
//         // Assuming json data is wrapped in square brackets as Drew suggests
//         console.log(jsonresponse[0].question);
    
//     });
function loadJSON(callback) {
var xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.open('GET', 'data.json', true);
xobj.onreadystatechange = function () {
if (xobj.readyState == 4 && xobj.status == "200") {

// .open will NOT return a value but simply returns undefined in async mode so use a callback
callback(xobj.responseText);

}
}
xobj.send(null);

}

// Call to function with anonymous callback
loadJSON(function(response) {
// Do Something with the response e.g.
jsonresponse = JSON.parse(response);

// Assuming json data is wrapped in square brackets as Drew suggests
console.log(jsonresponse[0].name);

});