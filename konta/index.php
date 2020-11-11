<?php

	session_start();
	
	if ((isset($_SESSION['zalogowany'])) && ($_SESSION['zalogowany']==true))
	{
		header('Location: gra.php');
		exit();
	}

?>

<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<link rel="stylesheet" href="style.css">
	<title>Logowanie</title>
</head>

<body>
	
	
	
	
	
	

    <div class="login">
	<h1>Login</h1>

		<?php
		if(isset($_SESSION['blad']))	echo "<h4>".$_SESSION['blad']."</h4>";
		?>

    <form action="zaloguj.php" method="post">
    	<input type="text" name="login" placeholder="Login" />
        <input type="password" name="haslo" placeholder="Hasło" />
		<button type="submit" class="btn btn-primary btn-block btn-large">Zaloguj</button>
		<br />
		<a href="rejestracja.php" class="btn btn-primary btn-block btn-large" id="link">Zarejestruj się!</a>
	</form>
	</div>
	
	<br />
	


</body>
</html>