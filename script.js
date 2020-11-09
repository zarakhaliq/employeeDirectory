

$(document).ready(function(){
        
          
            $.ajax({
                url: "selectAll.php",
                type: "post",
                success: function(data) {
                    console.log(data);
                    //console.log(searchText);
                //$('.success').show();
                //$('.success').delay(3000).fadeOut();
               
                for(var i=0;i<data.data.length;i++){
                  
                    $('#card').append('<div class="card"><div class="card-header" id="cardTitle"> <i class="fas fa-user fa-fw"></i>&nbsp&nbsp&nbsp <span class="fn">'+ data.data[i].firstName+'</span>  <span class="ln">'+data.data[i].lastName+'</span></div><div class="card-body"><section id="cardContent"> <p class="card-text id">'+data.data[i].id+'</p> <p class="card-text job">'+data.data[i].jobTitle+'</p> <p class="card-text department"><i class="fas fa-building fa-fw"></i> '+data.data[i].department+'</p><p class="card-text"> <img src="locationIcon.svg"  style="width:1rem; height:1rem;" class="img-fluid"> '+data.data[i].location+'</p><p class="card-text email"><img src="email.svg" style="width:1rem; height:1rem;" class="img-fluid emailIcon"><a href="'+data.data[i].email+'">'+data.data[i].email+'</a></p></section> </div><div class="card-footer"><button type="button"data-toggle="modal" data-target="#exampleModal4" class="btn btn-primary btn-sm float-left editButton" id="edit1"><img src="edit.svg" style="width: 1.2rem; height:1.2rem;" class="img-fluid editCard"></button><button type="button" class="btn btn-danger btn-sm float-left binButton" data-toggle="modal" data-target="#exampleModal2"><img src="bin.svg"  style="width:1.2rem; height:1.2rem;" class="img-fluid binCard"></button> </div></div> </div></div></div>');
                   
             }
               
                 $('.editButton').on('click', function(e){
               
                   var cards= [];
                   //$(this).closest('.card').slideUp();
                   console.log($(this).closest('.card').children('.card-header').text());
                   $('#firstName').val($(this).closest('.card').find('.fn').text());
                   $('#lastName').val($(this).closest('.card').find('.ln').text());
                   $('#jobTitle').val($(this).closest('.card').find('.job').text());
                   $('#email').val($(this).closest('.card').find('.email').text());
                   $('#id').val($(this).closest('.card').find('.id').text());


              });    
              $('.binButton').on('click', function(e){
               
                            
                //$(this).closest('.card').slideUp();
               // console.log($(this).closest('.card').children('.card-header').text());
               // $('#firstName').val($(this).closest('.card').find('.fn').text());
               // $('#lastName').val($(this).closest('.card').find('.ln').text());
               // $('#jobTitle').val($(this).closest('.card').find('.job').text());
               // $('#email').val($(this).closest('.card').find('.email').text());
                $('#removeID').val($(this).closest('.card').find('.id').text());

                
              
           });          
  
              
                },
                error: function (request, status, error) {
                console.log(request.responseText);
                }
                });
           
                //e.preventDefault();
                });


          
            
 $('#save').on('click', function(e){    
    
     var department= $('#department').val();
     var location= $('#location').val();
     $.ajax({
             url: "insertDepartment.php",
            type: "post",
            data: {"name":department,
                    "location":location},
                        success: function(data) {
                           // console.log(data);
                            console.log(data); 
                            console.log(department);
                        $('.added').show();
                        $('.added').delay(3000).fadeOut();
                        
                        },
                        error: function (request, status, error) {
                        console.log(request.responseText);
                        }
                        });
                    });

                        $('#remove').on('click', function(e){
                            //var department= $('#id').val()
                            var id = document.getElementById("removeID").value;
                            //var fName = document.getElementById("Fselect").value;
                            //var lName = document.getElementById("Lselect").value;
                            //console.log(fName);
                            
                            $.ajax({
                               url: "deletePersonnel.php",
                               type: "post",
                                data: {"id":id
                               
                            },
                                success: function(data) {
                                   console.log(data);
                                   //console.log(department);
                                $('.deleted').show();
                                $('.deleted').delay(3000).fadeOut();
                                
                                },
                                error: function (request, status, error) {
                                console.log(request.responseText);
                                $('.deleteError').show();
                                $('.deleteError').delay(3000).fadeOut();
                                }
                                });
                                
                            });

   $('#delete').on('click', function(e){
                                //var department= $('#id').val()
                                var department = document.getElementById("departmentName").value;
                                //var lName = document.getElementById("Lselect").value;
                                console.log(department);
                                
                                $.ajax({
                                   url: "deleteDepartment.php",
                                   type: "post",
                                    data: {"department":department},
                                    success: function(data) {
                                       console.log(data);
                                       //console.log(department);
                                    $('.deletedDepartment').show();
                                    $('.deletedDepartment').delay(3000).fadeOut();
                                    
                                    },
                                    error: function (request, status, error) {
                                    console.log(request.responseText);
                                    $('.deleteError').show();
                                    $('.deleteError').delay(3000).fadeOut();
                                    }
                                    });
                                });

                 $('#update').on('click', function(e){
                                    var id= $('#id').val();
                                    var firstName= $('#firstName').val();
                                    var lastName= $('#lastName').val();
                                    var email= $('#email').val();
                                    var job_title= $('#jobTitle').val();
                                    //var department= $('#department').val();
                                    //var location= $('#locationName').val();
                                    $.ajax({
                                            url: "updateAll.php",
                                           type: "post",
                                           data: {"firstName":firstName,
                                           "id":id,
                                           "lastName":lastName,
                                            "email":email,
                                            "jobTitle":job_title,
                                              },
                                                      success: function(data) {
                                                          // console.log(data);
                                                          console.log("clicked");
                                                           console.log(data);
                                                           console.log(department);
                                                           console.log(firstName);
                                                       $('.updated').show();
                                                       $('.updated').delay(3000).fadeOut();
                                                       
                                                       },
                                                       error: function (request, status, error) {
                                                       console.log(request.responseText);
                                                       $('.deleteError').show();
                                                         $('.deleteError').delay(3000).fadeOut();
                                                       }
                                                       });
                                                   });
            
                                                   $('#updateDepartment').on('click', function(e){
        
                                                   // var firstName= $('#firstName').val();
                                                    //var lastName= $('#lastName').val();
                                                    //var email= $('#email').val();
                                                    //var job_title= $('#jobTitle').val();
                                                   // var department = document.getElementById("departmentName").value;
                                                    var oldDepartment = document.getElementById("oldDep").value;
                                                   //var department= $('#dep').val();
                                                   var department = document.getElementById("dep").value;
                                                    //var oldDepartment= $('#oldDepartment').val();
                                                   // var location= $('#loc').val();
                                                     
                                                    console.log(location);
                                                    console.log(department);
                                                    $.ajax({
                                                            url: "updateDepartment.php",
                                                           type: "post",
                                                           data: {"department":department,
                                                            "oldDepartment":oldDepartment,
                                                            //"jobTitle":job_title,
                                                              },
                                                                      success: function(data) {
                                                                          // console.log(data);
                                                                         // console.log("clicked");
                                                                           console.log(data);
                                                                           //console.log(department);
                                                                           //console.log(firstName);
                                                                       $('.updated').show();
                                                                       $('.updated').delay(3000).fadeOut();
                                                                       
                                                                       },
                                                                       error: function (request, status, error) {
                                                                       console.log(request.responseText);
                                                                       $('.deleteError').show();
                                                                         $('.deleteError').delay(3000).fadeOut();
                                                                       }
                                                                       });
                                                                   });

                                                                   $('#updateLoc').on('click', function(e){
        
                                                                    // var firstName= $('#firstName').val();
                                                                     //var lastName= $('#lastName').val();
                                                                     //var email= $('#email').val();
                                                                     //var job_title= $('#jobTitle').val();
                                                                    // var department = document.getElementById("departmentName").value;
                                                                     //var department = document.getElementById("depart").value;
                                                                     //var newLocation= $('#newLoc').val();
                                                                     var newLocation= document.getElementById("newLoc").value;
                                                                     var oldLocation= document.getElementById("oldLocation").value;
                                                                    // var location= $('#loc').val();
                                                                      
                                                                     console.log(location);
                                                                     console.log(department);
                                                                     $.ajax({
                                                                             url: "updateLocation.php",
                                                                            type: "post",
                                                                            data: {"newLocation":newLocation,
                                                                             "oldLocation":oldLocation,
                                                                             //"jobTitle":job_title,
                                                                               },
                                                                                       success: function(data) {
                                                                                           // console.log(data);
                                                                                          // console.log("clicked");
                                                                                            console.log(data);
                                                                                            //console.log(department);
                                                                                            //console.log(firstName);
                                                                                        $('.updated').show();
                                                                                        $('.updated').delay(3000).fadeOut();
                                                                                        
                                                                                        },
                                                                                        error: function (request, status, error) {
                                                                                        console.log(request.responseText);
                                                                                        $('.deleteError').show();
                                                                                          $('.deleteError').delay(3000).fadeOut();
                                                                                        }
                                                                                        });
                                                                                    });
                                            $('#deleteLocation').on('click', function(e){
                                                    //var department= $('#id').val()
                                                    var location = document.getElementById("locationName").value;
                                                    //var lName = document.getElementById("Lselect").value;
                                                    console.log(location);
                                                    
                                                    $.ajax({
                                                       url: "deleteLocation.php",
                                                       type: "post",
                                                        data: {"location":location},
                                                        success: function(data) {
                                                           console.log(data);
                                                           //console.log(department);
                                                        $('.deletedLocation').show();
                                                        $('.deletedLocation').delay(3000).fadeOut();
                                                        
                                                        },
                                                        error: function (request, status, error) {
                                                        console.log(request.responseText);
                                                        $('.deleteError').show();
                                                        $('.deleteError').delay(3000).fadeOut();
                                                        }
                                                        });
                                                    });
                                                    $('#addLocation').on('click', function(e){
        
    
                                                        var location= $('#LocationAdd').val();
                                                        $.ajax({
                                                                url: "insertLocation.php",
                                                               type: "post",
                                                               data: {"name":location},
                                                                           success: function(data) {
                                                                              // console.log(data);
                                                                               console.log(data);
                                                                               console.log(department);
                                                                           $('.addedLocation').show();
                                                                           $('.addedLocation').delay(3000).fadeOut();
                                                                           
                                                                           },
                                                                           error: function (request, status, error) {
                                                                           console.log(request.responseText);
                                                                           $('.deleteError').show();
                                                                           $('.deleteError').delay(3000).fadeOut();
                                                                           }
                                                                           });
                                                                       });
$('#searchBtn').on('click', function(e){
        
    
     var searchTxt= $('#searchTxt').val();
     
     $.ajax({
             url: "search.php",
            type: "post",
            data: {"searchTxt":searchTxt},
                        success: function(data) {
                           // console.log(data);
                            console.log(data);
                        $('.success').show();
                        $('.success').delay(3000).fadeOut();
                        $('#card').empty();
                        for(var i=0;i<data.data.length;i++){
                           
                            $('#card').append('<div class="card"><div class="card-header" id="cardTitle"> <i class="fas fa-user fa-fw"></i>&nbsp&nbsp&nbsp <span class="fn">'+ data.data[i].firstName+'</span>  <span class="ln">'+data.data[i].lastName+'</span></div><div class="card-body"><section id="cardContent"> <p class="card-text id">'+data.data[i].id+'</p> <p class="card-text job">'+data.data[i].jobTitle+'</p> <p class="card-text department"><i class="fas fa-building fa-fw"></i> '+data.data[i].department+'</p><p class="card-text"> <img src="locationIcon.svg"  style="width:1rem; height:1rem;" class="img-fluid"> '+data.data[i].location+'</p><p class="card-text email"><img src="email.svg" style="width:1rem; height:1rem;" class="img-fluid emailIcon"><a href="'+data.data[i].email+'">'+data.data[i].email+'</a></p></section> </div><div class="card-footer"><button type="button"data-toggle="modal" data-target="#exampleModal4" class="btn btn-primary btn-sm float-left editButton" id="edit1"><img src="edit.svg" style="width: 1.2rem; height:1.2rem;" class="img-fluid editCard"></button><button type="button" class="btn btn-danger btn-sm float-left binButton" data-toggle="modal" data-target="#exampleModal2"><img src="bin.svg"  style="width:1.2rem; height:1.2rem;" class="img-fluid binCard"></button> </div></div> </div></div></div>');
                        } 
                        $('.editButton').on('click', function(e){
               
                            
                            //$(this).closest('.card').slideUp();
                            console.log($(this).closest('.card').children('.card-header').text());
                            $('#firstName').val($(this).closest('.card').find('.fn').text());
                            $('#lastName').val($(this).closest('.card').find('.ln').text());
                            $('#jobTitle').val($(this).closest('.card').find('.job').text());
                            $('#email').val($(this).closest('.card').find('.email').text());
                            $('#id').val($(this).closest('.card').find('.id').text());
         
                            
                          
                       });    
                       $('.binButton').on('click', function(e){
               
                            
                        //$(this).closest('.card').slideUp();
                       // console.log($(this).closest('.card').children('.card-header').text());
                        //$('#firstName').val($(this).closest('.card').find('.fn').text());
                        //$('#lastName').val($(this).closest('.card').find('.ln').text());
                        //$('#jobTitle').val($(this).closest('.card').find('.job').text());
                        //$('#email').val($(this).closest('.card').find('.email').text());
                        $('#id').val($(this).closest('.card').find('.id').text());
     
                        
                      
                   });   
                        },
                        error: function (request, status, error) {
                        console.log(request.responseText);
                        $('.successError').show();
                        $('.successError').delay(3000).fadeOut();
                        }
                        });
                    });