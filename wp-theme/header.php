
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php
// Hook for Elementor header template or fallback
if ( function_exists( 'elementor_theme_do_location' ) && elementor_theme_do_location( 'header' ) ) :
    // Elementor header location renders automatically
else :
?>
<header id="site-header" role="banner">
    <div class="site-branding">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
    </div>
    <nav id="primary-navigation" role="navigation">
        <?php
        wp_nav_menu( array(
            'theme_location' => 'primary',
            'menu_id'        => 'primary-menu',
        ) );
        ?>
    </nav>
</header>
<?php endif; ?>

