<?php
require '../../conexao.php';
header('Content-Type: application/json');

$response = array('success' => false, 'message' => '');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $genero = $_POST['genero'];

    // Upload da imagem
    $uploadDir = '../../uploads/imagens/';
    $imagemName = $_FILES['imagem']['name'];
    $imagemPath = $uploadDir . $imagemName;
    move_uploaded_file($_FILES['imagem']['tmp_name'], $imagemPath);

    
    // Upload do vídeo
    $uploadDir = '../../uploads/videos/';
    $videoName = $_FILES['video']['name'];
    $videoPath = $uploadDir . $videoName;
    move_uploaded_file($_FILES['video']['tmp_name'], $videoPath);

    try {
        $pdo->beginTransaction();

        $query = $pdo->prepare("INSERT INTO filmes (nome, imagem, genero, video) VALUES (:nome, :imagem, :genero, :video)");
        $query->execute([
            'nome' => $nome,
            'imagem' => $imagemPath,
            'genero' => $genero,
            'video' => $videoPath
        ]);

        $pdo->commit();

        $response['success'] = true;
        $response['message'] = 'Filme inserido com sucesso!';
    } catch (PDOException $e) {
        $pdo->rollBack();
        $response['message'] = 'Erro ao inserir filme: ' . $e->getMessage();
    }
} else {
    $response['message'] = 'Método de requisição inválido.';
}

echo json_encode($response);
?>
