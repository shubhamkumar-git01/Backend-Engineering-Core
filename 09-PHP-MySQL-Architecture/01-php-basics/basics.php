<?php
// Topic: Deep Dive into PHP Basics
// Notes: PHP is a server-side scripting language deeply embedded with HTML.
// A beginner should understand variables, data types, arrays, and functions before jumping into MVC.

// 1. Strict Typing (Modern PHP Practice)
declare(strict_types=1);

// 2. Variables and Data Types
$name = "Shubham"; // String
$age = 22; // Integer
$isDeveloper = true; // Boolean
$skills = ["HTML", "CSS", "PHP", "React"]; // Array

// 3. Associative Arrays (Like JSON Objects/Dictionaries)
$user = [
    "username" => "shubham_dev",
    "role" => "Admin",
    "active" => true
];

// 4. Functions with Type Hinting (Advanced Beginner)
// Type hinting prevents passing a string when an integer is expected.
function calculateAge(int $birthYear): int {
    $currentYear = date("Y");
    return $currentYear - $birthYear;
}

// 5. Outputting Data
echo "Hello, " . $name . "! You are " . calculateAge(2002) . " years old.<br>";

// 6. Foreach Loop
echo "<ul>";
foreach ($skills as $skill) {
    echo "<li>$skill</li>";
}
echo "</ul>";

// Best Practice: When a file contains ONLY PHP code, do NOT include the closing ?> tag 
// to prevent accidental whitespace output which breaks headers.
