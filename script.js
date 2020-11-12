

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
                  
                    $('#card').append('<div class="card"><div class="card-header" id="cardTitle"> <i class="fas fa-user fa-fw"></i>&nbsp&nbsp&nbsp <span class="fn">'+ data.data[i].firstName+'</span>  <span class="ln">'+data.data[i].lastName+'</span></div><div class="card-body"><section id="cardContent"> <p class="card-text id">'+data.data[i].id+'</p> <p class="card-text job">'+data.data[i].jobTitle+'</p> <p class="card-text depart"><i class="fas fa-building fa-fw"></i> '+data.data[i].department+'</p><p class="dID">'+data.data[i].departmentID+'</p><p class="card-text Location"> <img src="locationIcon.svg"  style="width:1rem; height:1rem; color:red;" class="img-fluid locIcon"> '+data.data[i].location+'</p><p class="L_ID">'+data.data[i].locationID+'</p><p class="card-text email"><img src="email.svg" style="width:1rem; height:1rem;" class="img-fluid emailIcon"><a href="'+data.data[i].email+'">'+data.data[i].email+'</a></p></section> </div><div class="card-footer"><button type="button"data-toggle="modal" data-target="#exampleModal4" class="btn btn-primary btn-sm float-left editButton" id="edit1"><img src="edit.svg" style="width: 1.2rem; height:1.2rem;" class="img-fluid editCard"></button><button type="button" class="btn btn-danger btn-sm float-left binButton" data-toggle="modal" data-target="#exampleModal2"><img src="bin.svg"  style="width:1.2rem; height:1.2rem;" class="img-fluid binCard"></button> </div></div> </div></div>');
                   
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
                   //$('#DepartmentID').val();
                   $('#DepartmentID').val($(this).closest('.card').find('.dID').text());
                   $('#LOCID').val($(this).closest('.card').find('.L_ID').text());


              });    
              $('.binButton').on('click', function(e){
               
                            
                //$(this).closest('.card').slideUp();
               // console.log($(this).closest('.card').children('.card-header').text());
                $('#fiName').text($(this).closest('.card').find('.fn').text());
                $('#laName').text($(this).closest('.card').find('.ln').text());
                $('#JobTitle').text($(this).closest('.card').find('.job').text());
                $('#Email').text($(this).closest('.card').find('.email').text());
                $('#removeID').text($(this).closest('.card').find('.id').text());
                $('#DepartmenT').text($(this).closest('.card').find('.depart').text());
                $('#Lo').text($(this).closest('.card').find('.Location').text());

                
              
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
                            //console.log(department);
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
                            var id = $('#removeID').text();
                            var fName = $('#fiName').text();
                            var lName = $('#laName').text();
                         
                            $.ajax({
                               url: "deletePersonnel.php",
                               type: "post",
                                data: {"id":id,
                                "fName":fName,
                                "lName":lName
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
                                var id = document.getElementById("departmentName").value;
                                var department = document.getElementById("departmentName").value;
                                //var lName = document.getElementById("Lselect").value;
                                console.log(id);
                                $.ajax({
                                    url: "selectPersonnel.php",
                                    type: "post",
                                    data:{"id":id},
                                     success: function(data) {
                                        console.log(data);
                                        console.log(data.data)
                                       
                                        if(data.data[0]){
                                            console.log("hi")
                                            $('.deletedDepartmentError').show();
                                            $('.deletedDepartmentError').delay(3000).fadeOut();
                                            
                                           
                                        }else{
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
                                            console.log("no sorry")
                                         
                                        }
                                   
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
                                    var department= $('#DepartmentID').val();
                                    var location= $('#LOCID').val();
                                    $.ajax({
                                            url: "updateAll.php",
                                           type: "post",
                                           data: {"firstName":firstName,
                                           "id":id,
                                           "lastName":lastName,
                                            "email":email,
                                            "jobTitle":job_title,
                                            "department":department
                                              },
                                                      success: function(data) {
                                                          // console.log(data);
                                                          console.log("clicked");
                                                           console.log(data);
                                                           console.log(department);
                                                           console.log(firstName);
                                                       $('.updated').show();
                                                       $('.updated').delay(3000).fadeOut();
                                                       $.ajax({
                                                        url: "modifyLocation.php",
                                                       type: "post",
                                                       data: {"location":location,
                                                        "department":department
                                                          },
                                                                  success: function(data) {
                                                                      // console.log(data);
                                                                      console.log("clicked");
                                                                       console.log(data);
                                                                       console.log(location);
                                                               
                                                                   
                                                                   },
                                                                   error: function (request, status, error) {
                                                                   console.log(request.responseText);
                                                                  
                                                                   }
                                                                   });
                                                       },
                                                       error: function (request, status, error) {
                                                       console.log(request.responseText);
                                                       $('.deleteError').show();
                                                         $('.deleteError').delay(3000).fadeOut();
                                                       }
                                                       });
                                                       

                                                   });
                                                  
                                                  
                                                  
                                                   $('#updateDep').on('click', function(e){
                                                       
                                                    $.ajax({
                                                        url: "selectDepartment.php",
                                                       type: "post",
                                                       data: {
                                                          },
                                                                  success: function(data) {
                                                                    
                                                                       console.log(data);
                                                                   
                                                                        
                for(var i=0;i<data.data.length;i++){
                  
                    $('#table-body').append('<tr><th class="depID" scope="row">'+data.data[i].id+'</th><td class="Dname" data-id='+data.data[i].id+' contenteditable>'+data.data[i].name+'</td><td class="locationId">'+data.data[i].locationID+'</td></tr>');
                    
             }
             function edit_department(id, text, column_name){
                                       
                
                $.ajax({                       
                     url: "updateDepartment.php",
                       type: "post",
                       data: {"id":id,
                        "text":text,
                        "column_name": column_name 
                   
                          },
                                  success: function(data) {
                                  
                                       console.log(data);
                               
                                   
                                   },
                                   error: function (request, status, error) {
                                   console.log(request.responseText);
                               
                                   }
                                   });
                                }
                            $(document).on('blur', '.Dname', function(){
                                var id=$(this).data('id');
                                var text=$(this).text();
                                console.log(id);
                                console.log(text);
                                edit_department(id, text, "Dname");
                            })
                         
                                                                   
                                                                   },
                                                                   error: function (request, status, error) {
                                                                   console.log(request.responseText);
                                                                 
                                                                   }
                                                                   });
                                                    

                                                   })

                                                   $('#updateL').on('click', function(e){
                                                       
                                                    $.ajax({
                                                        url: "selectLocation.php",
                                                       type: "post",
                                                       data: {
                                                          },
                                                                  success: function(data) {
                                                                    
                                                                       console.log(data);
                                                                   
                                                                        
                for(var i=0;i<data.data.length;i++){
                  
                    $('#tableBody').append('<tr><th class="locID" scope="row">'+data.data[i].id+'</th><td class="Lname" data-id1='+data.data[i].id+' contenteditable>'+data.data[i].name+'</td></tr>');
                    
             }
             function edit_location(id, text, column_name){
                                       
                
                $.ajax({                       
                     url: "updateLocation.php",
                       type: "post",
                       data: {"id":id,
                        "text":text,
                        "column_name": column_name 
                   
                          },
                                  success: function(data) {
                                  
                                       console.log(data);
                               
                                   
                                   },
                                   error: function (request, status, error) {
                                   console.log(request.responseText);
                               
                                   }
                                   });
                                }
                            $(document).on('blur', '.Lname', function(){
                                var id=$(this).data('id1');
                                var text=$(this).text();
                                console.log(id);
                                console.log(text);
                                edit_location(id, text, "Lname");
                            })
                         
                                                                   
                                                                   },
                                                                   error: function (request, status, error) {
                                                                   console.log(request.responseText);
                                                                 
                                                                   }
                                                                   });
                                                    

                                                   })
            
                                                   $('#updateDepartment').on('click', function(e){
        
                                                   // var firstName= $('#firstName').val();
                                                    //var lastName= $('#lastName').val();
                                                    //var email= $('#email').val();
                                                    //var job_title= $('#jobTitle').val();
                                                   // var department = document.getElementById("departmentName").value;
                                                   // var oldDepartment = document.getElementById("oldDep").value;
                                                   //var department= $('#dep').val();
                                                   //var department = document.getElementById("dep").value;
                                                    //var oldDepartment= $('#oldDepartment').val();
                                                   // var location= $('#loc').val();
                                                   $('.updated').show();
                                                   $('.updated').delay(3000).fadeOut();

                                                   
                                                                   });

                                                                   $('#updateLoc').on('click', function(e){
        
                                                                    // var firstName= $('#firstName').val();
                                                                     //var lastName= $('#lastName').val();
                                                                     //var email= $('#email').val();
                                                                     //var job_title= $('#jobTitle').val();
                                                                    // var department = document.getElementById("departmentName").value;
                                                                     //var department = document.getElementById("depart").value;
                                                                     //var newLocation= $('#newLoc').val();
                                                                     //var newLocation= document.getElementById("newLoc").value;
                                                                     //var oldLocation= document.getElementById("oldLocation").value;
                                                                    // var location= $('#loc').val();
                                                                    $('.updated').show();
                                                                    $('.updated').delay(3000).fadeOut();
                                                                    
                                                                                    });
                                            $('#deleteLocation').on('click', function(e){
                                                    //var department= $('#id').val()
                                                    var locationID = document.getElementById("locationName").value;
                                                    //var lName = document.getElementById("Lselect").value;
                                                    //console.log(location);
                                                    $.ajax({
                                    url: "selectDepartmentByLocID.php",
                                    type: "post",
                                    data:{"locationID":locationID},
                                     success: function(data) {
                                        console.log(data);
                                        console.log(data.data)
                                       
                                        if(data.data[0]){
                                            console.log("hi")
                                            $('.deletedLocationError').show();
                                            $('.deletedLocationError').delay(3000).fadeOut();
                                            
                                           
                                        }else{
                                            $.ajax({
                                                url: "deleteLocation.php",
                                                type: "post",
                                                 data: {"locationID":locationID},
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
                                            console.log("no sorry")
                                         
                                        }
                                   
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
                  
                            $('#card').append('<div class="card"><div class="card-header" id="cardTitle"> <i class="fas fa-user fa-fw"></i>&nbsp&nbsp&nbsp <span class="fn">'+ data.data[i].firstName+'</span>  <span class="ln">'+data.data[i].lastName+'</span></div><div class="card-body"><section id="cardContent"> <p class="card-text id">'+data.data[i].id+'</p> <p class="card-text job">'+data.data[i].jobTitle+'</p> <p class="card-text depart"><i class="fas fa-building fa-fw"></i> '+data.data[i].department+'</p><p class="dID">'+data.data[i].departmentID+'</p><p class="card-text Location"> <img src="locationIcon.svg"  style="width:1rem; height:1rem;" class="img-fluid"> '+data.data[i].location+'</p><p class="L_ID">'+data.data[i].locationID+'</p><p class="card-text email"><img src="email.svg" style="width:1rem; height:1rem;" class="img-fluid emailIcon"><a href="'+data.data[i].email+'">'+data.data[i].email+'</a></p></section> </div><div class="card-footer"><button type="button"data-toggle="modal" data-target="#exampleModal4" class="btn btn-primary btn-sm float-left editButton" id="edit1"><img src="edit.svg" style="width: 1.2rem; height:1.2rem;" class="img-fluid editCard"></button><button type="button" class="btn btn-danger btn-sm float-left binButton" data-toggle="modal" data-target="#exampleModal2"><img src="bin.svg"  style="width:1.2rem; height:1.2rem;" class="img-fluid binCard"></button> </div></div> </div></div>');
                   
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
                              //$('#DepartmentID').val();
                              $('#DepartmentID').val($(this).closest('.card').find('.dID').text());
                              $('#LOCID').val($(this).closest('.card').find('.L_ID').text());
           
           
                         });    
                         $('.binButton').on('click', function(e){
                          
                                       
                           //$(this).closest('.card').slideUp();
                          // console.log($(this).closest('.card').children('.card-header').text());
                           $('#fiName').text($(this).closest('.card').find('.fn').text());
                           $('#laName').text($(this).closest('.card').find('.ln').text());
                           $('#JobTitle').text($(this).closest('.card').find('.job').text());
                           $('#Email').text($(this).closest('.card').find('.email').text());
                           $('#removeID').text($(this).closest('.card').find('.id').text());
                           $('#DepartmenT').text($(this).closest('.card').find('.depart').text());
                           $('#Lo').text($(this).closest('.card').find('.Location').text());
           
                           
                         
                          
                      
                   });          
          
                      
                        },
                        error: function (request, status, error) {
                        console.log(request.responseText);
                        }
                       
        
        
                  
                        });
                    });