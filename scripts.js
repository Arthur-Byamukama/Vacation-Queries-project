
$("form").on("submit", function(event) {
      event.preventDefault();
      var array = [];
      var count_one =[];
      var count_two =[];
      // process form
     // store the value of the input with name='age'
    var age = Number($(this).find('[name=age]:checked').val());

    if (age===1)count_one.push(age);
    else  count_two.push(age);


     // store the value of the input with name='age'
    //var gender = Number($(this).find('[name=gender]').val());
    //array.push(gender)
    //if (gender===1){count_one++}
    //else if (gender===2) {count_two++}


    var vacation_times = Number($(this).find('[name=vacation_times]:checked').val());
    if (vacation_times===1)count_one.push(vacation_times);
    else  count_two.push(vacation_times);


    var hobbies = Number($(this).find('[name=hobbies]:checked').val());
    if (hobbies===1)count_one.push(hobbies);
    else  count_two.push(hobbies);


    var income_status = Number($(this).find('[name=income_status]:checked').val());

    if (income_status===1)count_one.push(income_status);
    else  count_two.push(income_status);

    var vacations_in_years = Number($(this).find('[name=vacations_in_years]:checked').val());
    if (vacations_in_years===1)count_one.push(vacations_in_years);
    else  count_two.push(vacations_in_years);

   //functions to push answers to the main array


 if ((count_one.length) > (count_two.length)) {
  window.location.href = "beach-vacation.html";
}
else if ((count_two.length) > (count_one.length)) {
  window.location.href = "snow boarding.html"
}
else if((count_two.length) === (count_one.length)) {
  window.location.href = "camping trip.html"
};
    /*var one=0;
    var two=0;
    function main (arrays){
      for (c=0; c<=arrays.length; c++){
        if(arrays[c]===1){one++;}
        else if ((arrays[c]===2)) {
          two++;
        };

      };
    };*/

//  main(array)
  //  alert(one)








  });
