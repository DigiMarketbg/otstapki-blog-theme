
<?php
/**
 * WordPress Theme Screenshot Generator
 * 
 * This file generates a screenshot.png for the WordPress theme.
 * Upload theme without this file or delete it after installation.
 * 
 * Note: This file should be executed by a PHP CLI, not through a web browser.
 * 
 * @package OtstapkiBG
 */

// Define the dimensions of the screenshot
$width = 1200;
$height = 900;

// Create an image
$image = imagecreate($width, $height);

// Allocate colors
$bg_color = imagecolorallocate($image, 0, 0, 0); // Black background
$accent_color = imagecolorallocate($image, 16, 185, 129); // Green accent (#10B981)
$text_color = imagecolorallocate($image, 255, 255, 255); // White text

// Draw a diagonal styled background
for ($i = 0; $i < $width * 2; $i += 40) {
    imagefilledrectangle($image, $i, 0, $i + 20, $height, imagecolorallocate($image, 10, 10, 10));
}

// Draw some circles for styling
$circle_positions = [
    ['x' => 200, 'y' => 200, 'r' => 100],
    ['x' => 950, 'y' => 350, 'r' => 150],
    ['x' => 500, 'y' => 700, 'r' => 120],
];

foreach ($circle_positions as $circle) {
    imagefilledellipse(
        $image, 
        $circle['x'], 
        $circle['y'], 
        $circle['r'], 
        $circle['r'],
        imagecolorallocatetransparent($image, 16, 185, 129, 80)
    );
}

// Draw theme name
$theme_name = "OtstapkiBG Theme";
$font_size = 5;
imagettftext($image, 40, 0, $width/2 - 180, $height/2 - 40, $text_color, "arial.ttf", $theme_name);

// Draw theme description
$theme_description = "Modern WordPress Theme";
imagettftext($image, 20, 0, $width/2 - 140, $height/2 + 20, $text_color, "arial.ttf", $theme_description);

// Draw a horizontal accent bar
imagefilledrectangle($image, $width/2 - 200, $height/2 + 40, $width/2 + 200, $height/2 + 45, $accent_color);

// Save the image
$save_path = __DIR__ . '/screenshot.png';
imagepng($image, $save_path);
imagedestroy($image);

echo "Screenshot generated at: $save_path\n";

/**
 * Helper function to create transparent colors
 */
function imagecolorallocatetransparent($image, $red, $green, $blue, $alpha = 127) {
    $color = imagecolorallocatealpha($image, $red, $green, $blue, $alpha);
    return $color;
}

// Note: This script won't work correctly in many environments due to the absence of TTF fonts
// It's just a placeholder to indicate that a screenshot should be created manually
?>
