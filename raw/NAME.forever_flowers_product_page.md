<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eternal Love – Forever Flowers</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f8f8;
        }
        .container {
            width: 90%;
            max-width: 1200px;
            margin: auto;
            padding: 20px;
        }
        .product-header {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            background: white;
            padding: 20px;
            border-radius: 10px;
        }
        .product-images {
            flex: 1;
            text-align: center;
        }
        .product-images img {
            width: 100%;
            max-width: 500px;
            border-radius: 10px;
        }
        .product-info {
            flex: 1;
            padding: 20px;
        }
        .product-info h1 {
            font-size: 32px;
            margin-bottom: 10px;
        }
        .price {
            font-size: 24px;
            color: #d32f2f;
            margin-bottom: 20px;
        }
        .limited-stock {
            font-size: 16px;
            color: #ff6f00;
            margin-bottom: 20px;
        }
        .cta-button {
            background: #d32f2f;
            color: white;
            padding: 15px 30px;
            font-size: 18px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: block;
            text-align: center;
            width: 100%;
        }
        .story-section, .details-section {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
        }
        .story-section h2, .details-section h2 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .upsell-section {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
        }
        .upsell-item {
            flex: 1;
            text-align: center;
            padding: 10px;
        }
        .upsell-item img {
            width: 100%;
            max-width: 150px;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="product-header">
            <div class="product-images">
                <img src="bouquet-image.jpg" alt="Eternal Love Bouquet">
            </div>
            <div class="product-info">
                <h1>Eternal Love – Limited Edition</h1>
                <p class="price">₪350</p>
                <p class="limited-stock">🌹 Only 20 left – Order before February 29th! 🌹</p>
                <button class="cta-button">Order Now</button>
            </div>
        </div>

        <div class="story-section">
            <h2>The Story Behind This Bouquet</h2>
            <p>Love, like flowers, is meant to last. The 'Eternal Love' bouquet captures passion and devotion, featuring hand-selected preserved roses that stay as vibrant as your feelings. Each bloom tells a story of love that never fades.</p>
        </div>

        <div class="details-section">
            <h2>Why You'll Love It</h2>
            <ul>
                <li>🌹 Red Roses – Symbol of eternal passion & love.</li>
                <li>💫 Dried Baby’s Breath – Represents purity and connection.</li>
                <li>🍃 Preserved Greens – Adds depth and elegance.</li>
                <li>📦 Luxury packaging included.</li>
            </ul>
        </div>

        <div class="upsell-section">
            <div class="upsell-item">
                <img src="vase-image.jpg" alt="Luxury Vase">
                <p>✨ Add a Luxury Vase – ₪50</p>
            </div>
            <div class="upsell-item">
                <img src="fuller-bouquet.jpg" alt="Fuller Bouquet">
                <p>💐 Make It Fuller – ₪50</p>
            </div>
        </div>
    </div>
</body>
</html>