var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://polosa4.github.io/quizzApp/data.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
    var data = request.response;
    populateHeader(data);
    
}
var answers;
function populateHeader(jsonObj){
    var myQuestion = document.createElement('h3');
    myQuestion.textContent = jsonObj['question'];
    header.appendChild(myQuestion);


    my_form=document.createElement('FORM');
    my_form.name='myForm';
    my_form.method='POST';
    answers = jsonObj['answers'];
    for (var i=0; i < answers.length; i++){
        var listItem = "";
        listItem = answers[i]['answer' + [i+1].toString()];
        // section.html('');
        // var result = document.getElementById('result');
        // result.html('');
        // var radio = document.createElement('input');
        
        // var listItem = document.createElement('li');
        var radio = document.createElement('input');
        radio.type = "radio";
        radio.name = "answer";
        radio.id = listItem;
        var text = listItem;
        // var label = ('<label><input type="radio" name="usernames" value="' + listItem + '" /> ' + listItem + '</label>');
        my_form.appendChild(radio);
        my_form.appendChild(document.createTextNode(text));
        // var q = t + i.toString();
        // var q = document.createElement('p');
        // q.textContent = answers[i];
        // var q2 = document.createElement('p');
        // var q3 = document.createElement('p');
        // var q4 = document.createElement('p');
        section.append(my_form);
        

    } 

}

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
