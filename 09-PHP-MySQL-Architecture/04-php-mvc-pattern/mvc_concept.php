<?php
// Topic: MVC Architecture in Vanilla PHP
// Notes: Before using Laravel or CodeIgniter, understanding how to structure raw PHP is crucial.
// MVC = Model (Data/DB), View (HTML/UI), Controller (Logic/Routing)

/*
DIRECTORY STRUCTURE:
/app
  /controllers
    - UserController.php
  /models
    - User.php
  /views
    - userList.php
/public
  - index.php (The Front Controller - routes all traffic)
*/

// Example: Front Controller (public/index.php)
/*
require_once '../app/controllers/UserController.php';

$url = $_GET['url'] ?? 'home';

if ($url === 'users') {
    $controller = new UserController();
    $controller->index();
} else {
    echo "404 Not Found";
}
*/

// Example: Controller (app/controllers/UserController.php)
/*
require_once '../app/models/User.php';

class UserController {
    public function index() {
        $userModel = new User();
        $users = $userModel->getAllUsers(); // Fetch data from Model
        
        // Pass data to View
        require_once '../app/views/userList.php';
    }
}
*/

echo "Check comments for the exact folder structure and implementation of a custom PHP MVC Framework.";
