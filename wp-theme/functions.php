
<?php
// Функции и настройки за темата OtstapkiBG Custom Theme

// Деактивиране на директен достъп
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Регистриране на стилове и скриптове
function otstapkibg_enqueue_scripts() {
    wp_enqueue_style( 'otstapkibg-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version') );
    // Можете да добавяте и допълнителни CSS или JS файлове тук
}
add_action( 'wp_enqueue_scripts', 'otstapkibg_enqueue_scripts' );

// Добавяне на поддръжка за Elementor
function otstapkibg_elementor_support() {
    // Активиране на поддръжка за елменти на темата
    add_theme_support( 'elementor' );
    add_theme_support( 'elementor-pro' );
}
add_action( 'after_setup_theme', 'otstapkibg_elementor_support' );

// Регистриране на менюта
function otstapkibg_register_menus() {
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'otstapkibg' ),
        'footer'  => __( 'Footer Menu', 'otstapkibg' ),
    ) );
}
add_action( 'after_setup_theme', 'otstapkibg_register_menus' );

// Поддръжка на featured images
add_theme_support( 'post-thumbnails' );

?>
