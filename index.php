
<?php
include("server.php");
?>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <title>Employee Directory</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />

    <link
      rel="stylesheet"
      href="Bootstrap/bootstrap-4.5.2-dist/css/bootstrap.min.css"
    />

    <link
      rel="stylesheet"
      href="Bootstrap/bootstrap-4.5.2-dist/css/style.css"
    />
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

   
  
  </head>

  <body>
    

    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: black">
      <a class="navbar-brand" href="#">
        <img src="redLogo.png" width="30" height="30" class="d-inline-block align-top" alt="">
    Employee Directory
  </a>
      
     
    </nav>
<div class="success message" style="display:none">
Search complete!
</div>
<div class="successError message" style="display:none">
Data not found!
</div>

<div class="added message" style="display:none">
Department added.
</div>

<div class="addedLocation message" style="display:none">
Location added.
</div>

<div class="deletedDepartment message" style="display:none">
Department deleted successfully!
</div>
<div class="deletedLocation message" style="display:none">
Location deleted successfully!
</div>
<div class="deleted message" style="display:none">
Data deleted successfully!
</div>

<div class="deleteError message" style="display:none">
Error! Something went wrong...
</div>
<div class="updated message" style="display:none">
Data updated successfully!
</div>
    
    <div class="header">
      <form id="searches" method="POST" action="">
        <div class="form-box container">
    
          <input type="text"  class="search-field business" name="search-field" id="searchTxt" placeholder="Search">
          <input class="search-btn" type="button" id="searchBtn" name="search"  value="Search">
          
        </div>
      </form>
    </div>
<main>
<div class="container" id="buttons">
  <div class="row justify-content-sm-center">
    <div class="col-sm">
    <button type="button" class="btn btn-primary add" data-toggle="modal" data-target="#exampleModal">
     Add Department
     &nbsp&nbsp<img src="bootstrap.svg" style="width: 2rem; height:2rem;" class="img-fluid">
    </button>
    <button type="button" class="btn btn-primary addLocation" data-toggle="modal" data-target="#exampleModal5">
     Add Location
     &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<img src="bootstrap.svg" style="width: 2rem; height:2rem;" class="img-fluid">
    </button>
    </div>
   
    <div class="col-sm">
    <button type="button" id="updateDep" class="btn btn-success updateDepartment" data-toggle="modal" data-target="#exampleModal7">
      Update Department
    <img src="edit.svg"  style="width:2rem; height:2rem;" class="img-fluid">
    </button>
    <button type="button" id="updateL" class="btn btn-success updateL" data-toggle="modal" data-target="#exampleModal8">
    Update Location
    &nbsp&nbsp&nbsp<img src="edit.svg"  style="width:2rem; height:2rem;" class="img-fluid">
    </button>
    </div>
   
    <div class="col-sm">
    <button type="button" id="del" class="btn btn-danger del" data-toggle="modal" data-target="#exampleModal3">
    Delete Department
    <img src="bin.svg"  style="width:2rem; height:2rem;" class="img-fluid">
    </button>
    <button type="button" id="del" class="btn btn-danger delLocation" data-toggle="modal" data-target="#exampleModal6">
    Delete Location
    &nbsp&nbsp&nbsp&nbsp&nbsp<img src="bin.svg"  style="width:2rem; height:2rem;" class="img-fluid">
    </button>
    </div>
     
    
  </div>
</div> 


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Department</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form action="" method="POST">

        <div class="form-group">
        <label> Department </label>
        <input type="text" id="department" value="Enter department" class="form-control" required>
</div>
<div class="form-group">
        <label> Location </label>
        <input type="text" id="location" value="Enter your location" class="form-control" required>
</div>


<button type="button" class="btn btn-primary" id="save" name="save">Save changes</button>
      </form>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>

<!-- Modal2 -->
<div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete Department</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
      <form class="form-inline my-2 my-lg-0" id="form" method="POST">
        
         
<select class="custom-select" id="Fselect" name="name" required>
            <option selected>Select First Name</option>
            <?php
                $sql = mysqli_query($conn, "SELECT firstName FROM personnel");
                while ($row = $sql->fetch_assoc()){
                    echo "<option value=\"".$row['firstName']."\">" . $row['firstName'] . "</option>";
                }
            ?>
</select>
<select class="custom-select" id="Lselect" name="name" required>
            <option selected>Select Last Name</option>
            <?php
                $sql = mysqli_query($conn, "SELECT lastName FROM personnel");
                while ($row = $sql->fetch_assoc()){
                    echo "<option value=\"".$row['lastName']."\">" . $row['lastName'] . "</option>";
                }
            ?>
</select>

</form>  
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-primary" id="remove">Delete</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>
<!-- Modal3 Delete department -->
<div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete Department</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
      <div class="form-group">
  <label for="departmentName">Department</label>
<select class="form-control" id="departmentName" name="name" required>

            <option selected>Select Department</option>
            <?php
                $sql = mysqli_query($conn, "SELECT name FROM department");
                while ($row = $sql->fetch_assoc()){
                    echo "<option value=\"".$row['name']."\">" . $row['name'] . "</option>";
                }
            ?>
</select>
</div>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-primary" id="delete">Delete</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>

<!-- Modal4 Update -->

<div class="modal fade" id="exampleModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Information</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form action="" method="POST">

      <div class="form-group">
        <label> ID </label>
        <input type="text" id="id" value="" class="form-control" required />
</div>

        <div class="form-group">
        <label> First Name </label>
        <input type="text" id="firstName" value="" class="form-control" required />
</div>
<div class="form-group">
        <label> Last Name </label>
        <input type="text" id="lastName" value="Enter Last Name" class="form-control" required />
</div>
<div class="form-group">
        <label> Email Address </label>
        <input type="text" id="email" value="Enter Email Address" class="form-control">
</div>

<div class="form-group">
        <label> Job Title </label>
        <input type="text" id="jobTitle" value="Enter Job Title" class="form-control">
</div>


<button type="button" class="btn btn-primary" id="update" name="update">Update</button>
      </form>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>

<!-- Modal 5 add location-->
<div class="modal fade" id="exampleModal5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Location</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form action="" method="POST">

        <div class="form-group">
        <label> Location </label>
        <input type="text" id="LocationAdd" value="Enter location" class="form-control" required>
</div>
<button type="button" class="btn btn-primary" id="addLocation" name="save">Save changes</button>
      </form>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>

<!-- Modal 6 delete location-->

<div class="modal fade" id="exampleModal6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete Location</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
      <div class="form-group">
  <label for="departmentName">Location</label>
<select class="form-control" id="locationName" name="name" required>

            <option selected>Select Location</option>
            <?php
                $sql = mysqli_query($conn, "SELECT name FROM location");
                while ($row = $sql->fetch_assoc()){
                    echo "<option value=\"".$row['name']."\">" . $row['name'] . "</option>";
                }
            ?>
</select>
</div>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-primary" id="deleteLocation">Delete</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>

<!-- Modal7 Update Department -->

<div class="modal fade" id="exampleModal7" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Department</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form action="" method="POST">

      <div class="form-group">
        <label> Department </label>
        <input type="text" id="oldDepartment" value="Enter department" class="form-control" required>
</div>

        <div class="form-group">
        <label> New Department </label>
        <input type="text" id="dep" value="Enter new department" class="form-control" required>
</div>

<div class="form-group">
  <label for="loc">Location</label>
<select class="form-control" id="loc" name="name" required>

            <option selected>Select Location</option>
            <?php
                $sql = mysqli_query($conn, "SELECT name FROM location");
                while ($row = $sql->fetch_assoc()){
                    echo "<option value=\"".$row['name']."\">" . $row['name'] . "</option>";
                }
            ?>
</select>
</div>



<button type="button" class="btn btn-primary" id="updateDepartment" name="updateDepartment">Update</button>
      </form>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>

<!-- Modal8 Update Location -->

<div class="modal fade" id="exampleModal8" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Location</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form action="" method="POST">

      <div class="form-group">
        <label> Location </label>
        <input type="text" id="oldLocation" value="Enter location" class="form-control" required>
</div>

        <div class="form-group">
        <label> New Location </label>
        <input type="text" id="newLoc" value="Enter new location" class="form-control" required>
</div>





<button type="button" class="btn btn-primary" id="updateLoc" name="updateLoc">Update</button>
      </form>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>


<div class="container">
<div class="row justify-content-center" id="card">

<div id="editForm">
              </div>



</main>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="Bootstrap/bootstrap-4.5.2-dist/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/f3aca67fdb.js" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    </body>
    </html>
    





