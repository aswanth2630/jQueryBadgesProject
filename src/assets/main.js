$(function() {
$.ajax({
  url:'https://www.codeschool.com/users/aswanth1989.json',
  dataType:'jsonp',
  success:function(response){
    addCourses(response.courses.completed);
  }
});
  // your code will go here
function addCourses(courses){
  var $badges =$('#badges');

  courses.forEach(function(course){
    console.log(course);
  var $course =  $('<div />',{
      class: 'course'
    }).appendTo($badges);

  $('<h3 />',{
    text: course.title
  }).appendTo($course);
  $('<img />',{
    src:course.badge
  }).appendTo($course);
  $('<a />',{
    'class':'btn btn-primary',
    target:'_blank',
    href:course.url,
    text:'See Course'
  }).appendTo($course);
    })
}
});
