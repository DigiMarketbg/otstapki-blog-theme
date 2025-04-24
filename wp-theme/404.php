
<?php get_header(); ?>

<main id="site-content" role="main" class="relative z-10 py-16 md:py-24">
  <div class="container mx-auto px-4 text-center">
    <div class="flex flex-col items-center justify-center max-w-md mx-auto">
      <h1 class="text-6xl md:text-9xl font-bold text-green-500 mb-4">404</h1>
      <h2 class="text-2xl md:text-4xl font-bold text-white mb-6"><?php _e('Страницата не е намерена', 'otstapkibg'); ?></h2>
      <p class="text-gray-400 mb-8">
        <?php _e('Страницата, която търсите, не съществува или е преместена.', 'otstapkibg'); ?>
      </p>
      <div class="flex flex-col md:flex-row gap-4">
        <a href="<?php echo home_url(); ?>" class="button bg-green-500">
          <?php _e('Към началната страница', 'otstapkibg'); ?>
        </a>
        <a href="<?php echo home_url('/blog/'); ?>" class="button button-outline">
          <?php _e('Разгледай блога', 'otstapkibg'); ?>
        </a>
      </div>
    </div>
  </div>
</main>

<?php get_footer(); ?>
