<html>
  <head>
    <meta http-equiv="Access-Control-Allow-Origin" content="*" />
    <title>Test</title>
    <header name = "Access-Control-Allow-Origin" value = "*" />

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <!-- <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>

    <script type="text/javascript" src="https://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js"></script>
    <script type="text/x-jquery-tmpl" id="myTempl">
      <tr><td>${Name}</td><td>${Id}</td></tr>
    </script>
    <script type="text/x-jquery-tmpl" id="navItemTmpl">
      <li class="nav-item">
        <a class="nav-link" href="#${Id}">${Name}</a>
      </li>
    </script>
    <script type="text/x-jquery-tmpl" id="navDropdownMenuTmpl">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#4" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#41">Action</a>
          <a class="dropdown-item" href="#42">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#43">Something else here</a>
        </div>
      </li>
    </script>
    

    <script type="text/javascript">
      var data = [
        {
          Name: "AAA",
          Id:1
        },
        {
          Name: "BBB",
          Id:2
        }
      ]
    $(document).ready(function () {
      $('#listview').hide();


      $.get('http://172.20.10.4:3000/',function(data){
        console.log(data);
      })
      // $("#myTempl").tmpl(data).appendTo("#listview");
      // if (data.length > 0) {
      //   $('#listview').show();
      // }
      
      $("#navItemTmpl").tmpl(data).appendTo("#navbar");


    });

    </script>
  </head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto" id="navbar">

        <!-- <li class="nav-item active">
          <a class="nav-link" href="#1">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#2">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#3">Disabled</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#4" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#41">Action</a>
            <a class="dropdown-item" href="#42">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#43">Something else here</a>
          </div>
        </li> -->
      </ul>
      <!-- <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> -->
    </div>
  </nav>



    <table id="listview" border="1">
      <tr>
        <th>Name</th>
        <th>Id</th>
      </tr>
    </table>
</body>
</html>