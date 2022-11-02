var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
  
  console.log("Estimate price button clicked");
  var day = 9;
  var month = 12;
  var year =  2021;
 // var estPrice = document.getElementById("uiEstimatedPrice");
  var url = "http://127.0.0.1:5000/predict_bitcoin"; //Use this if you are NOT using nginx which is first 7 tutorials
  //var url = "/api/predict_bitcoin"; // Use this if  you are using nginx. i.e tutorial 8 and onwards

  $.post(url, {
      //total_sqft: parseFloat(sqft.value),
      day: day,
      month: month,
      year: year
  },function(data, status) {
      console.log(data.estimated_price);
     // estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
      console.log(status);
  });
  


