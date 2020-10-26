
var html ='<div class="col-md-12">';
html +='<div class="card">';
html +='<div class="row">';
html +='<div class="col-md-4" id="userimg"> </div>';
html +='<div class="col-md-8 px-3">';
html +='<div class="card-block px-3">';
html +='<h4 class="card-title">sometitle</h4>';
html +='</div>';
html +='</div>';
html +='</div>';
html +='</div>';
html +='</div>';

$('#searchBtn').on('click', function(e){
        
            var searchText= $('#searchTxt').val();
            $.ajax({
                url: "selectAll.php",
                type: "post",
                data: {"searchText":searchText},
                success: function(data) {
                    console.log(data);
                    console.log(searchText);
                $('.success').show();
                $('.success').delay(3000).fadeOut();
               
                for(var i=0;i<data.data.length;i++){
                    //$('#card').empty();
                    $('#card').append('<div class="card"><div class="card-body"><div class="container"><div class="row"><div class="col-12"><h5 class="card-title" id="cardTitle">'+data.data[i].firstName+' '+data.data[i].lastName+'</h5><section class="card-text" id="cardContent">'+data.data[i].jobTitle+'<br>'+data.data[i].department+'<br>'+data.data[i].location+'<br> Email: <a href="'+data.data[i].email+'">'+data.data[i].email+'</a> </section> </div><div class="col-2"> </div> </div> </div>  </div> </div>');
                }

                },
                error: function (request, status, error) {
                console.log(request.responseText);
                }
                });
                
                
                e.preventDefault();
                });
            
                $('#save').on('click', function(e){
        
    
                    var department= $('#department').val();
                    var locationID= $('#locationID').val();
                    $.ajax({
                        url: "insertDepartment.php",
                        type: "post",
                        data: {"name":department,
                                "locationID":locationID},
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
                        var department= $('#id').val();
                        
                        $.ajax({
                            url: "deleteDepartmentByID.php",
                            type: "post",
                            data: {"id":department},
                            success: function(data) {
                                console.log(data);
                               // console.log(department);

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
    

