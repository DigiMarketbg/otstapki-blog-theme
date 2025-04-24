
<?php get_header(); ?>

<main id="site-content" role="main" class="relative z-10 py-12 md:py-24">
  <div class="container mx-auto px-4 max-w-5xl">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="page-header text-center mb-8">
          <h1 class="text-3xl md:text-5xl font-bold mb-4"><?php the_title(); ?></h1>
        </header>

        <div class="entry-content prose prose-lg prose-invert prose-green max-w-none">
          <?php the_content(); ?>
        </div>
      </article>

    <?php endwhile; else : ?>
      <div class="text-center text-gray-400">
        <?php _e('Страницата не е намерена.', 'otstapkibg'); ?>
        <div class="mt-6">
          <a href="<?php echo home_url(); ?>" class="button">
            <?php _e('Към началната страница', 'otstapkibg'); ?>
          </a>
        </div>
      </div>
    <?php endif; ?>
  </div>
</main>

<?php get_footer(); ?>
