
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

    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="manifest" href="site.webmanifest">
  
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
<div class="deletedDepartmentError message" style="display:none">
ERROR! This department has existing employees, transer employees to another department.  
</div>
<div class="deletedLocation message" style="display:none">
Location deleted successfully!
</div>
<div class="deletedLocationError message" style="display:none">
ERROR! Departments exist at this location, allocate departments to new location first.   
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

<div class="container" id="buttons">
  <div class="row">
    <div>
    <button type="button" class="btn btn-primary add" data-toggle="modal" data-target="#exampleModal">
     Add Department
     &nbsp&nbsp<img src="bootstrap.svg" style="width: 1.5rem; height:1.5rem;" class="img-fluid addIcon">
    </button>
</div>
<div>
    <button type="button" class="btn btn-primary addLocation" data-toggle="modal" data-target="#exampleModal5">
     Add Location
     &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<img src="bootstrap.svg" style="width: 1.5rem; height:1.5rem;" class="img-fluid addIcon">
    </button>
    </div>
   
    <div>
    <button type="button" id="updateDep" class="btn btn-primary updateDepartment" data-toggle="modal" data-target="#exampleModal7">
      Update Department
    <img src="edit.svg"  style="width:1.5rem; height:1.5rem;" class="img-fluid updateIcon">
    </button>
</div>
    <div>
    <button type="button" id="updateL" class="btn btn-primary updateL" data-toggle="modal" data-target="#exampleModal8">
    Update Location
    &nbsp&nbsp&nbsp<img src="edit.svg"  style="width:1.5rem; height:1.5rem;" class="img-fluid updateIcon">
    </button>
    </div>
   
    <div>
    <button type="button" id="del" class="btn btn-primary del" data-toggle="modal" data-target="#exampleModal3">
    Delete Department
    <img src="bin.svg"  style="width:1.5rem; height:1.5rem;" class="img-fluid deleteIcon">
    </button>
</div>
    <div>
    <button type="button" id="del" class="btn btn-primary delLocation" data-toggle="modal" data-target="#exampleModal6">
    Delete Location
    &nbsp&nbsp&nbsp&nbsp&nbsp<img src="bin.svg"  style="width:1.5rem; height:1.5rem;" class="img-fluid deleteIcon">
    </button>
    </div>
  </div>
</div> 


<!-- Modal Add Department -->
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
        <input type="text" id="department" placeholder="Enter department" class="form-control" required>
</div>
<div class="form-group">
        <label> Location </label>
        <input type="text" id="location" placeholder="Enter your location" class="form-control" required>
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

<!-- Modal2 Delete Department -->
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
      
      
        <p id="removeID"></p>

        <label> First Name </label>
        <p id="fiName"></p>


        <label> Last Name </label>
        <p id="laName"></p>


        <label> Email Address </label>
        <p id="Email"></p>



        <label> Job Title </label>
        <p id="JobTitle"></p>


        <label> Department </label>
        <p id="DepartmenT"></p>

        <label> Location </label>
        <p id="Lo"></p>


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
                $sql = mysqli_query($conn, "SELECT * FROM department");
                while ($row = $sql->fetch_assoc()){
                    echo "<option value=\"".$row['id']."\">" . $row['name'] . "</option>";
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
        <input type="text" id="firstName"  placeholder="Enter First Name" value="" class="form-control" required />
</div>
<div class="form-group">
        <label> Last Name </label>
        <input type="text" id="lastName" placeholder="Enter Last Name" class="form-control" required />
</div>
<div class="form-group">
        <label> Email Address </label>
        <input type="text" id="email" placeholder="Enter Email Address" class="form-control">
</div>

<div class="form-group">
        <label> Job Title </label>
        <input type="text" id="jobTitle" placeholder="Enter Job Title" class="form-control">
</div>
<div class="form-group">
        <label> Department </label>
        <select class="form-control" id="DepartmentID" name="name" required>

            <option selected>Select Department</option>
            <?php
                $sql = mysqli_query($conn, "SELECT * FROM department");
                while ($row = $sql->fetch_assoc()){
                  echo "<option value=".$row['id'].">" . $row['name'] . "</option>";
                   // echo "<option value=" . $row['id'].">".$row['name']."</option>";
                }
            ?>
</select>
       
</div>
<div class="form-group">
        <label> Location </label>
        <select class="form-control" id="LOCID" name="name" required>

            <option selected>Select Location</option>
            <?php
                $sql = mysqli_query($conn, "SELECT * FROM location");
                while ($row = $sql->fetch_assoc()){
                  echo "<option value=".$row['id'].">" . $row['name'] . "</option>";
                   // echo "<option value=" . $row['id'].">".$row['name']."</option>";
                }
            ?>
</select>
       
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
        <input type="text" id="LocationAdd" placeholder="Enter location" class="form-control" required>
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
                $sql = mysqli_query($conn, "SELECT * FROM location");
                while ($row = $sql->fetch_assoc()){
                    echo "<option value=\"".$row['id']."\">" . $row['name'] . "</option>";
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
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Department</th>
      <th scope="col">LocationID</th>
      
    </tr>
  </thead>
  <tbody id="table-body">
   
  </tbody>
</table>
     
<!--
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
               // $sql = mysqli_query($conn, "SELECT name FROM location");
                //while ($row = $sql->fetch_assoc()){
                  //  echo "<option value=\"".$row['name']."\">" . $row['name'] . "</option>";
                //}
            ?>
</select>
</div>
-->


<button type="button" class="btn btn-primary" id="updateDepartment" name="updateDepartment">Update</button>
      
        
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

      
<!--
      <div class="form-group">
        <label> Location </label>
        <input type="text" id="oldLocation" value="Enter location" class="form-control" required>
</div>
-->
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Location</th>
      
    </tr>
  </thead>
  <tbody id="tableBody">
   
  </tbody>
</table>
     





<button type="button" class="btn btn-primary" id="updateLoc" name="updateLoc">Update</button>
      </form>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>


<div class="container cardsContainer">
<div class="row-cols-8 justify-content-md-center" id="card">

<div id="editForm">
              </div>






    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="Bootstrap/bootstrap-4.5.2-dist/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/f3aca67fdb.js" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    
    </body>
    </html>
    





