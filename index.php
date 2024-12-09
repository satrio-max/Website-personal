<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Surat Cinta untuk Kamu</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Hai, Sayangku!</h1>
        <p>
            <?php
            // Pesan cinta yang akan ditampilkan
            $messages = [
                "Kamu adalah alasan aku tersenyum setiap hari 😊",
                "Terima kasih sudah selalu ada untukku ❤",
                "Aku akan selalu mencintaimu, apa pun yang terjadi!",
                "Hari ini indah karena ada kamu di hidupku 🌸",
                "Aku sayang kamu lebih dari kata-kata bisa ungkapkan."
            ];
            
            // Memilih pesan secara acak
            $random_message = $messages[array_rand($messages)];
            echo $random_message;
            ?>
        </p>
        <div class="image-container">
            <img src="https://via.placeholder.com/300" alt="Foto Kenangan">
        </div>
        <p class="closing">Dari aku yang selalu sayang kamu, <br> [Namamu]</p>
    </div>
</body>
</html>