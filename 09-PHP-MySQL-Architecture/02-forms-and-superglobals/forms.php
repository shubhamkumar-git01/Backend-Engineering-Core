<?php
// Topic: Superglobals and Form Handling
// Notes: Superglobals are built-in variables that are always available in all scopes.
// Examples: $_GET, $_POST, $_SESSION, $_COOKIE, $_SERVER

session_start(); // Must be called before any HTML output to use $_SESSION

// 1. Handling Form Submission securely
$message = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // ALWAYS sanitize user input to prevent XSS (Cross-Site Scripting)
    $username = htmlspecialchars(trim($_POST["username"]));
    
    if (!empty($username)) {
        $_SESSION["logged_in_user"] = $username;
        $message = "Welcome, $username! Your session has started.";
    } else {
        $message = "Username cannot be empty.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP Forms & Sessions</title>
</head>
<body>
    <h2>Login Form</h2>
    <p style="color: green;"><?php echo $message; ?></p>
    
    <!-- POST method sends data securely in the HTTP body, not the URL -->
    <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <button type="submit">Login</button>
    </form>
</body>
</html>
