
<aside id="secondary" class="widget-area" role="complementary">
    <?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
        <?php dynamic_sidebar( 'sidebar-1' ); ?>
    <?php else : ?>
        <section class="widget">
            <h3 class="widget-title"><?php esc_html_e( 'Sidebar Widget Area', 'otstapkibg' ); ?></h3>
            <p><?php esc_html_e( 'Add widgets to the sidebar here.', 'otstapkibg' ); ?></p>
        </section>
    <?php endif; ?>
</aside>
