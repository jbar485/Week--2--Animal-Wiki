$(document).ready(function() {
  $("button").click(function(event){
    event.preventDefault();

     var animal = $("input:radio[name=animals]:checked").val();
     var final = parseInt(animal);

     if (final === 1){
       $(".zebra-card").show();
       $(".bear-card").hide();
       $(".lion-card").hide();
     }else if (final === 2) {
       $(".bear-card").show();
       $(".zebra-card").hide();
       $(".lion-card").hide();
     }else {
       $(".lion-card").show();
       $(".bear-card").hide();
       $(".zebra-card").hide();
     }

    console.log(animal, final);



  });

});
