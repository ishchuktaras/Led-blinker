<!DOCTYPE html>
<html>

<body>

  <?php
  if (isset($_POST["submit"])) {
    $object = $_POST["object"];

    if($object) {
      echo $object;
    } else {
      echo "Něco chybí";
    }

    $connection = mysqli_connect("localhost:3306","admin","_?Margarita29","Led_blinker");

    if ($connection) {
      echo ("Jsme propojení k databází");
    } else {
      die("Ou, něco se pokázilo");
    }

    $query = "INSERT INTO LedState(State) VALUES('object')";

    $result = mysqli_query($connection, $query);

    if (!$result) {
      die("Dotaz do databáze selhal");
    }
  }
  ?>
</body>

</html>