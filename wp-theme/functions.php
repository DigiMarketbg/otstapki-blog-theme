
<?php
// Функции и настройки за темата OtstapkiBG Custom Theme

// Деактивиране на директен достъп
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Тема информация
define('OTSTAPKI_THEME_VERSION', '1.0.0');
define('OTSTAPKI_THEME_DIR', get_template_directory());
define('OTSTAPKI_THEME_URI', get_template_directory_uri());

/**
 * Регистриране на стилове и скриптове
 */
function otstapkibg_enqueue_scripts() {
    // Основен стил на темата
    wp_enqueue_style('otstapkibg-style', get_stylesheet_uri(), array(), OTSTAPKI_THEME_VERSION);
    
    // Допълнителни CSS файлове
    wp_enqueue_style('otstapkibg-custom-css', OTSTAPKI_THEME_URI . '/assets/css/style.css', array(), OTSTAPKI_THEME_VERSION);
    
    // Основни скриптове
    wp_enqueue_script('otstapkibg-custom-js', OTSTAPKI_THEME_URI . '/assets/js/main.js', array('jquery'), OTSTAPKI_THEME_VERSION, true);

    // Добавяне на tailwind класове и анимации
    wp_add_inline_style('otstapkibg-style', '
        @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-15px) translateX(10px); }
            50% { transform: translateY(0) translateX(25px); }
            75% { transform: translateY(15px) translateX(10px); }
        }
        @keyframes float-slow {
            0%, 100% { transform: translateY(0) rotate(30deg); opacity: 0.3; }
            50% { transform: translateY(100px) rotate(30deg); opacity: 0.7; }
        }
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.05); opacity: 0.8; }
        }
    ');
}
add_action('wp_enqueue_scripts', 'otstapkibg_enqueue_scripts');

/**
 * Добавяне на поддръжка за Elementor
 */
function otstapkibg_elementor_support() {
    // Активиране на поддръжка за елементи на темата
    add_theme_support('elementor');
    add_theme_support('elementor-pro');
    
    // Регистриране на местоположения за Elementor
    if (function_exists('elementor_theme_do_location')) {
        register_nav_menus(array(
            'header' => esc_html__('Header Menu', 'otstapkibg'),
            'footer' => esc_html__('Footer Menu', 'otstapkibg'),
        ));
    }
}
add_action('after_setup_theme', 'otstapkibg_elementor_support');

/**
 * Настройка на основни функции на темата
 */
function otstapkibg_theme_setup() {
    // Основни настройки на темата
    add_theme_support('post-thumbnails'); // Поддръжка на featured images
    add_theme_support('title-tag'); // Автоматично генериране на title тагове
    add_theme_support('automatic-feed-links'); // Автоматични feed връзки
    add_theme_support('html5', array(
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'
    ));
    
    // Регистриране на менюта
    register_nav_menus(array(
        'primary' => __('Основно меню', 'otstapkibg'),
        'footer'  => __('Футър меню', 'otstapkibg'),
    ));
    
    // Зададени размери на изображения
    add_image_size('blog-thumb', 600, 400, true);
    add_image_size('featured-large', 1200, 800, true);
}
add_action('after_setup_theme', 'otstapkibg_theme_setup');

/**
 * Регистриране на странични ленти (sidebars)
 */
function otstapkibg_widgets_init() {
    register_sidebar(array(
        'name'          => __('Основна странична лента', 'otstapkibg'),
        'id'            => 'sidebar-1',
        'description'   => __('Добавяне на джаджи в страничната лента', 'otstapkibg'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => __('Футър джаджи', 'otstapkibg'),
        'id'            => 'footer-widgets',
        'description'   => __('Джаджи, които ще се показват в футъра', 'otstapkibg'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="footer-widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'otstapkibg_widgets_init');

/**
 * Добави Tailwind класове към WordPress
 */
function otstapkibg_add_tailwind_classes($content) {
    // Добавяне на Tailwind класове към таблици
    $content = str_replace('<table', '<table class="min-w-full bg-gray-900/60 border border-gray-800"', $content);
    $content = str_replace('<th', '<th class="px-4 py-2 border-b border-gray-800 text-green-500 font-bold"', $content);
    $content = str_replace('<td', '<td class="px-4 py-2 border-b border-gray-800 text-gray-300"', $content);
    
    // Добавяне на Tailwind класове към изображения
    $content = str_replace('<img', '<img class="rounded max-w-full my-4"', $content);
    
    return $content;
}
add_filter('the_content', 'otstapkibg_add_tailwind_classes');

/**
 * Персонализиране на REST API за React интеграция
 */
function otstapkibg_rest_api_init() {
    // Разрешаване на CORS за локална разработка
    add_action('rest_api_init', function () {
        remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
        add_filter('rest_pre_serve_request', function ($value) {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
            header('Access-Control-Allow-Credentials: true');
            return $value;
        });
    });
    
    // Добавяне на допълнителни полета към REST API
    register_rest_field('post', 'featured_image_url', array(
        'get_callback' => function($post) {
            if (has_post_thumbnail($post['id'])) {
                $image = wp_get_attachment_image_src(get_post_thumbnail_id($post['id']), 'full');
                return $image[0];
            }
            return null;
        }
    ));
}
add_action('rest_api_init', 'otstapkibg_rest_api_init');
