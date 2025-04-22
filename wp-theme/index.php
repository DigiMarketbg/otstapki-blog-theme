
<?php get_header(); ?>

<main id="site-content" role="main">
    <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header">
                    <h2 class="entry-title">
                        <a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a>
                    </h2>
                </header>
                <div class="entry-summary">
                    <?php the_excerpt(); ?>
                </div>
                <footer class="entry-footer">
                    <a href="<?php the_permalink(); ?>"><?php esc_html_e( 'Read More', 'otstapkibg' ); ?></a>
                </footer>
            </article>
        <?php endwhile; ?>

        <nav class="pagination">
            <?php
            the_posts_pagination( array(
                'mid_size'  => 2,
                'prev_text' => __( '&laquo; Previous', 'otstapkibg' ),
                'next_text' => __( 'Next &raquo;', 'otstapkibg' ),
            ) );
            ?>
        </nav>

    <?php else : ?>
        <p><?php esc_html_e( 'No posts found.', 'otstapkibg' ); ?></p>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
