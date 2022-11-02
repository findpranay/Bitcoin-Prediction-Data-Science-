
function onClickedEstimatePrice() {
  console.log("Estimate price button clicked");
  var day = document.getElementById("day").value;
  var month =  document.getElementById("month").value;
  var year =  document.getElementById("year").value;
  var estPrice = document.getElementById("uiEstimatedPrice");
  var url = "http://127.0.0.1:5000/predict_bitcoin"; //Use this if you are NOT using nginx which is first 7 tutorials
  //var url = "/api/predict_bitcoin"; // Use this if  you are using nginx. i.e tutorial 8 and onwards

  $.post(url, {
    
      day: day,
      month: month,
      year: year
  },function(data, status) {
      console.log(data.estimated_price);
      estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakhs</h2>";
      console.log(status);
  });
  
}

