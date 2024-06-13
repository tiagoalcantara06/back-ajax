<?php

require 'conexao.php'; // Arquivo com a conexão ao banco de dados
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $name = $_POST['name'];
    $cpf = $_POST['cpf'];
    $senha = password_hash($_POST['senha'], PASSWORD_BCRYPT);
    
    $insert = $pdo->prepare("INSERT INTO usuario (email, name, cpf, senha, dados_enviados) VALUES (:email, :name, :cpf, :senha, true)");

    $insert->execute([
        'email' => $email,
        'name' => $name,
        'cpf' => $cpf,
        'senha' => $senha
    ]);

    if($insert -> rowCount() > 0) {
        echo true;
    } else {
        echo false;
    }

    
}
?>
