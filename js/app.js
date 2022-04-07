function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
  
  var category_a = [ 
 ['Product1','img/A1.jpg'],
  ['Product2','img/A2.jpg'],
  ['Product3','img/A3.jpg'] 
  ['Product4','img/A4.jpg'] 
];
  var category_b = [ 
  ['Product1','img/B1.png'],
  ['Product2','img/B2.png'],
  ['Product3','img/B3.png'] ,
  ['Product4','img/B4.png'],
  
];
 
  
  const all = [...category_a, ...category_b];
  
  $("#random-btn").click(function(){
    var radioValue = $("input[name='results_number']:checked").val();
    

      $("#results").empty();
      $("#results").append(getMultipleRandom(all, radioValue));
      $("#nothing").hide();
  });
  
  $("#reset").click(function(){
      $("#results").empty();
      $("#nothing").show();
  });