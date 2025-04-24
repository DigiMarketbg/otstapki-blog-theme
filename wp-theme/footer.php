
<footer id="site-footer" role="contentinfo" class="bg-black/95 border-t border-gray-800 py-6">
    <div class="container mx-auto px-4 text-center text-gray-400 text-sm">
        <p>
            &copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. 
            <?php _e('Всички права запазени.', 'otstapkibg'); ?>
            <?php _e('Изработено от', 'otstapkibg'); ?> 
            <a href="https://webuslugi.bg" target="_blank" rel="noopener noreferrer" class="text-green-400 underline hover:text-green-600">
                webuslugi.bg
            </a>
        </p>
        
        <?php if (is_active_sidebar('footer-widgets')) : ?>
        <div class="footer-widgets-container mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <?php dynamic_sidebar('footer-widgets'); ?>
        </div>
        <?php endif; ?>
        
        <?php
        // Footer Menu
        wp_nav_menu(array(
            'theme_location' => 'footer',
            'menu_id'        => 'footer-menu',
            'container'      => 'nav',
            'container_class' => 'mt-4',
            'menu_class'     => 'flex flex-wrap justify-center gap-4 text-gray-500',
            'fallback_cb'    => false,
            'depth'          => 1,
        ));
        ?>
    </div>
    <?php wp_footer(); ?>
</footer>
</body>
</html>
