<?php
// Topic: MySQL CRUD using PDO (PHP Data Objects)
// Notes: NEVER use the deprecated `mysql_` functions. Always use PDO or MySQLi.
// PDO is preferred because it supports 12 different databases, not just MySQL.
// It also provides a robust way to prevent SQL Injection using Prepared Statements.

$host = '127.0.0.1';
$db   = 'test_db';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

// 1. The DSN (Data Source Name)
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

// 2. PDO Options for better error handling and fetching
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Throw exceptions on error
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,       // Fetch associative arrays
    PDO::ATTR_EMULATE_PREPARES   => false,                  // Use real prepared statements
];

try {
    // 3. Connect to Database
    $pdo = new PDO($dsn, $user, $pass, $options);
    // echo "Connected successfully!";

    /* --- CRUD OPERATIONS --- */

    // A. CREATE (Insert) using Prepared Statements (Prevents SQL Injection)
    $sql = "INSERT INTO users (name, email) VALUES (:name, :email)";
    $stmt = $pdo->prepare($sql);
    // $stmt->execute(['name' => 'Shubham', 'email' => 'shubham@lpu.in']);

    // B. READ (Select)
    $sql = "SELECT * FROM users WHERE status = :status";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['status' => 'active']);
    $users = $stmt->fetchAll(); // Gets all rows

    // C. UPDATE
    $sql = "UPDATE users SET status = :status WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    // $stmt->execute(['status' => 'inactive', 'id' => 1]);

    // D. DELETE
    $sql = "DELETE FROM users WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    // $stmt->execute(['id' => 1]);

} catch (\PDOException $e) {
    // Catch connection or query errors gracefully
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
