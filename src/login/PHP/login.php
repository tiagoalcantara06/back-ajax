<?php

require '../../conexao.php'; // Arquivo com a conexão ao banco de dados
session_start();

header('Content-Type: application/json');

$response = array('success' => false, 'message' => '');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['nome'];
    $senha = $_POST['senha'];
    
    $query = $pdo->prepare("SELECT * FROM usuario WHERE email = :email or nome = :email");

    $query->execute(['email' => $email]);

    if ($query->rowCount() > 0) {
        $user = $query->fetch(PDO::FETCH_ASSOC);
        if (password_verify($senha, $user['senha'])) {
            $_SESSION['user'] = $user;
            $response['success'] = true;
            $response['message'] = 'Login successful';
        } else {
            $response['message'] = 'Invalid password';
        }
    } else {
        $response['message'] = 'User not found';
    }
} else {
    $response['message'] = 'Invalid request method';
}

echo json_encode($response);
?>
