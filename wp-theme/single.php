
<?php get_header(); ?>

<main id="site-content" role="main" class="relative z-10 py-12">
  <div class="container mx-auto px-4 max-w-4xl">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="entry-header mb-8">
          <h1 class="text-3xl font-bold mb-4"><?php the_title(); ?></h1>
          <div class="text-gray-400 flex items-center gap-4 mb-6">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span><?php echo get_the_date(); ?></span>
            </div>
            <?php 
            $category = get_the_category(); 
            if ($category) : 
            ?>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
              <a href="<?php echo get_category_link($category[0]->term_id); ?>" class="text-green-500 hover:underline">
                <?php echo esc_html($category[0]->name); ?>
              </a>
            </div>
            <?php endif; ?>
          </div>
        </header>

        <?php if (has_post_thumbnail()) : ?>
        <div class="post-thumbnail mb-8">
          <?php the_post_thumbnail('featured-large', array('class' => 'w-full h-auto rounded')); ?>
        </div>
        <?php endif; ?>

        <div class="entry-content prose prose-lg prose-invert prose-green max-w-none mb-8">
          <?php the_content(); ?>
        </div>

        <footer class="entry-footer">
          <?php if (has_tag()) : ?>
          <div class="post-tags flex flex-wrap gap-2 mb-6">
            <?php the_tags('<div class="text-gray-400 mr-2">' . __('Тагове:', 'otstapkibg') . '</div>', ''); ?>
          </div>
          <?php endif; ?>
          
          <div class="post-navigation flex justify-between items-center border-t border-gray-800 pt-6 mt-8">
            <div>
              <?php previous_post_link('%link', '<span class="text-gray-400 text-sm block mb-1">' . __('Предишна статия', 'otstapkibg') . '</span> &laquo; %title'); ?>
            </div>
            <div class="text-right">
              <?php next_post_link('%link', '<span class="text-gray-400 text-sm block mb-1">' . __('Следваща статия', 'otstapkibg') . '</span>%title &raquo;'); ?>
            </div>
          </div>
        </footer>
      </article>

      <?php
      // If comments are open or we have at least one comment, load up the comment template.
      if (comments_open() || get_comments_number()) :
        comments_template();
      endif;
      ?>

    <?php endwhile; ?>
    <?php else : ?>
      <div class="text-center text-gray-400">
        <?php _e('Статията не е намерена.', 'otstapkibg'); ?>
        <div class="mt-6">
          <a href="<?php echo home_url('/blog/'); ?>" class="button">
            <?php _e('Назад към блога', 'otstapkibg'); ?>
          </a>
        </div>
      </div>
    <?php endif; ?>
  </div>
</main>

<?php get_footer(); ?>
