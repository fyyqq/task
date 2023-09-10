<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Training</title>
</head>
<body>
    <?php
        $name = $age = "";
    
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $name = validate($_POST['name']);
            $age = validate($_POST['age']);
        }
    
        function validate($data) {
            $val = htmlspecialchars($data);
            return $val;
        }

        $validateName = '';
        $validateNameAction = '';
        $validateAge = '';
        $validateAgeAction = '';

        if (empty($name)) {
            $validateName = 'Name is required!';
            $validateNameAction = true;
        } else {
            $validateNameAction = false;
        }

        if (empty($age) || !is_numeric($age)) {
            if (empty($age)) {
                $validateAge = 'Age is required!';
            } elseif (!is_int($name)) {
                $validateAge = 'Age must be a number';
            }
            $validateAgeAction = true;
        } else {
            $validateAgeAction = false;
        }

    ?>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
        <input type="text" name="name" id="" placeholder="Nickname" value="<?php echo $name ?>">
        <span style="color: red; <?php echo $validateNameAction == 1 ? 'display: block;' : 'display: none;'; ?>">* <?php echo $validateName; ?></span>
        <br>
        <br>
        <input type="text" name="age" id="" placeholder="Ages" value="<?php echo $age; ?>">
        <span style="color: red; <?php echo $validateAgeAction == 1 ? 'display: block;' : 'display: none;'?>">* <?php echo $validateAge; ?></span>
        <br>
        <br>
        <button type="submit">Submit</button>
    </form>
    <br>
    <span>Name : <?php echo $name; ?></span><br>
    <span>Age : <?php echo $age; ?></span>
    <br>
    <hr>
    <br>
    <?php
        // echo readfile('./index.json');
        // echo include('./index.json')

        $str = "<h1>Hello World<h1>";
        // echo filter_var($str, FILTER_SANITIZE_STRING);

        // $email = "afiqakimy123@gmail.com";
        // $email = filter_var($email, FILTER_SANITIZE_EMAIL);

        // if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        //     echo "$email is a valid email address";
        // } else {
        //     echo "$email isn't valid email address";
        // }
    ?>
</body>
</html>