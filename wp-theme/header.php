
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-black text-white'); ?>>
<?php wp_body_open(); ?>

<?php
// Hook for Elementor header template or fallback
if (function_exists('elementor_theme_do_location') && elementor_theme_do_location('header')) :
    // Elementor header location renders automatically
else :
?>
<header id="site-header" role="banner" class="bg-black border-b border-green-400/20 py-2">
    <div class="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-4">
        <div class="site-branding">
            <?php if (has_custom_logo()) : ?>
                <div class="mb-4 md:mb-0 flex items-center gap-2">
                    <?php the_custom_logo(); ?>
                </div>
            <?php else : ?>
                <a href="<?php echo esc_url(home_url('/')); ?>" rel="home" class="text-white text-xl font-bold">
                    <?php bloginfo('name'); ?>
                </a>
                <p class="site-description text-gray-400">
                    <?php bloginfo('description'); ?>
                </p>
            <?php endif; ?>
        </div>

        <nav id="primary-navigation" role="navigation" class="hidden md:flex items-center gap-6 mx-auto">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_id'        => 'primary-menu',
                'container'      => false,
                'menu_class'     => 'flex items-center gap-6',
                'fallback_cb'    => false,
            ));
            ?>
            <!-- External button with icon -->
            <a href="https://www.otstapki.bg" target="_blank" rel="noopener noreferrer" class="text-white hover:text-green-500 transition border border-green-500 rounded px-3 py-1.5 ml-4 flex items-center gap-2" aria-label="Отстъпки Бг">
                <?php if (file_exists(get_template_directory() . '/assets/images/logo-small.png')) : ?>
                <img
                    src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo-small.png'); ?>"
                    alt="Отстъпки Бг"
                    class="w-6 h-6 object-contain"
                />
                <?php endif; ?>
                <span class="hidden md:inline">Отстъпки Бг</span>
            </a>
        </nav>
    </div>
</header>

<!-- Mobile Bottom Navigation -->
<nav id="mobile-navigation" class="fixed bottom-0 left-0 right-0 bg-black border-t border-green-400/20 flex justify-around items-center py-1 md:hidden z-50 px-4">
    <a href="<?php echo esc_url(home_url('/')); ?>" class="flex flex-col items-center text-xs text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        <?php _e('Начало', 'otstapkibg'); ?>
    </a>
    <a href="<?php echo esc_url(home_url('/blog/')); ?>" class="flex flex-col items-center text-xs text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
        <?php _e('Блог', 'otstapkibg'); ?>
    </a>
    <a href="https://www.otstapki.bg" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center text-xs text-white" aria-label="Отстъпки Бг">
        <?php if (file_exists(get_template_directory() . '/assets/images/logo-small.png')) : ?>
        <img
            src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo-small.png'); ?>"
            alt="Отстъпки Бг"
            class="mb-1 w-6 h-6 object-contain"
        />
        <?php else: ?>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 9-6 6v4h4l6-6"></path><path d="m16 10 2-2"></path><path d="M14 4 4 14"></path><path d="M10.5 17.5 17 11"></path><path d="M16 18h4v-4"></path><path d="M18 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></svg>
        <?php endif; ?>
        <?php _e('Отстъпки Бг', 'otstapkibg'); ?>
    </a>
</nav>
<?php endif; ?>

<!-- Background Animation Elements -->
<div class="absolute inset-0 overflow-hidden pointer-events-none bg-black/90">
    <div class="absolute w-32 h-32 rounded-full bg-green-100/5 top-10 left-[10%] animate-pulse flex items-center justify-center">
        <svg class="h-12 w-12 text-green-300/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6m5-10h-6m-4 0H7m6-4V2m-2 0v4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <div class="absolute w-48 h-48 rounded-full bg-green-100/3 bottom-10 right-[15%] animate-pulse flex items-center justify-center">
        <svg class="h-16 w-16 text-green-300/15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 10h-6m-4 0H3m9-4V2m-2 0v4m5 6v6m2-6h6m-4 4v-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <div class="absolute w-24 h-24 rounded-full bg-green-100/5 bottom-32 left-[20%] animate-pulse flex items-center justify-center">
        <svg class="h-8 w-8 text-green-300/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>

    <div class="absolute top-[35%] left-[15%] animate-float">
        <div class="text-green-300/5 text-2xl font-bold rotate-[-15deg]">-30%</div>
    </div>
    <div class="absolute top-[20%] right-[20%] animate-float">
        <div class="text-green-300/7 text-3xl font-bold rotate-[10deg]">-50%</div>
    </div>
    <div class="absolute bottom-[30%] right-[30%] animate-float">
        <div class="text-green-300/5 text-2xl font-bold rotate-[5deg]">-20%</div>
    </div>

    <div class="absolute bottom-[25%] left-[10%] animate-float">
        <div class="text-green-300/10 text-4xl font-bold">otstapki.bg</div>
    </div>

    <div class="absolute w-[150px] h-[500px] bg-gradient-to-t from-green-300/0 to-green-300/10 rotate-[30deg] top-[-100px] left-[20%] animate-float-slow"></div>
    <div class="absolute w-[150px] h-[500px] bg-gradient-to-t from-green-300/0 to-green-300/10 rotate-[-30deg] top-[-200px] right-[30%] animate-float-slow"></div>
</div>
