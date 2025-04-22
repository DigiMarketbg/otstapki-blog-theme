
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

// Регистриране на sidebar
function otstapkibg_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Sidebar', 'otstapkibg' ),
        'id'            => 'sidebar-1',
        'description'   => __( 'Добавяне на джаджи в страничната лента', 'otstapkibg' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
}
add_action( 'widgets_init', 'otstapkibg_widgets_init' );


// Допълнителни регистрации (функции за CSS и JS от assets и менюта)

function spasi_theme_setup() {
  add_theme_support('menus');
  add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'spasi_theme_setup');

function spasi_enqueue_styles() {
  wp_enqueue_style('main-style', get_stylesheet_uri());
  wp_enqueue_style('custom-css', get_template_directory_uri() . '/assets/css/style.css');
  wp_enqueue_script('custom-js', get_template_directory_uri() . '/assets/js/main.js', array(), false, true);
}
add_action('wp_enqueue_scripts', 'spasi_enqueue_styles');

?>
