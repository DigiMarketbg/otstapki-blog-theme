
<?php get_header(); ?>

<main id="site-content" role="main" class="relative z-10 py-12 md:py-24">
  <div class="container mx-auto px-4 max-w-5xl">
    <?php if (have_posts()) : ?>
      <header class="page-header text-center mb-8">
        <h1 class="text-3xl md:text-5xl font-bold mb-4">
          <span class="text-white"><?php _e('Блог', 'otstapkibg'); ?> | </span>
          <span class="text-green-500"><?php _e('Всички статии', 'otstapkibg'); ?></span>
        </h1>
        <p class="text-gray-300 max-w-2xl mx-auto">
          <?php _e('Открийте полезна информация, съвети и стратегии за намиране на най-добрите оферти', 'otstapkibg'); ?>
        </p>
      </header>

      <!-- Categories Navigation -->
      <div class="categories-nav py-6 bg-gray-900/60 mb-8 rounded">
        <div class="flex items-center justify-center gap-2 md:gap-4 flex-wrap px-4">
          <a href="<?php echo get_permalink(get_option('page_for_posts')); ?>" class="button <?php echo !is_category() ? 'bg-green-500' : 'button-outline'; ?>">
            <?php _e('Всички', 'otstapkibg'); ?>
          </a>
          
          <?php 
          $categories = get_categories(array('hide_empty' => true));
          foreach ($categories as $category) :
          ?>
            <a href="<?php echo get_category_link($category->term_id); ?>" class="button <?php echo is_category($category->term_id) ? 'bg-green-500' : 'button-outline'; ?>">
              <?php echo $category->name; ?>
            </a>
          <?php endforeach; ?>
        </div>
      </div>

      <!-- Posts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <?php while (have_posts()) : the_post(); ?>
          <article id="post-<?php the_ID(); ?>" <?php post_class('card'); ?>>
            <?php if (has_post_thumbnail()) : ?>
              <div class="relative overflow-hidden h-48">
                <a href="<?php the_permalink(); ?>">
                  <?php the_post_thumbnail('blog-thumb', array('class' => 'w-full h-full object-cover transition-transform duration-500 hover:scale-105')); ?>
                </a>
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-70"></div>
                <?php
                $category = get_the_category();
                if ($category) :
                ?>
                <span class="absolute top-3 left-3 bg-green-500/90 text-white text-xs px-2 py-1 rounded border-none">
                  <?php echo esc_html($category[0]->name); ?>
                </span>
                <?php endif; ?>
                <div class="absolute bottom-3 left-3 flex items-center gap-2 text-xs text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span><?php echo get_the_date(); ?></span>
                </div>
              </div>
            <?php endif; ?>
            <div class="card-header">
              <h2 class="card-title">
                <a href="<?php the_permalink(); ?>">
                  <?php the_title(); ?>
                </a>
              </h2>
            </div>
            <div class="card-content">
              <div class="card-description">
                <?php the_excerpt(); ?>
              </div>
            </div>
            <div class="card-footer">
              <a href="<?php the_permalink(); ?>" class="text-green-500 hover:text-green-400 transition-colors flex items-center gap-1 text-sm font-medium">
                <?php _e('Прочети повече', 'otstapkibg'); ?>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover:translate-x-1 transition-transform"><polyline points="9 18 15 12 9 6"/></svg>
              </a>
            </div>
          </article>
        <?php endwhile; ?>
      </div>

      <div class="pagination text-center mt-10">
        <?php the_posts_pagination(array(
          'mid_size'  => 2,
          'prev_text' => __('&laquo; Предишни', 'otstapkibg'),
          'next_text' => __('Следващи &raquo;', 'otstapkibg'),
        )); ?>
      </div>

    <?php else : ?>
      <!-- No Posts Found -->
      <div class="text-center py-12">
        <h3 class="text-2xl text-gray-400 mb-4"><?php _e('Няма намерени статии', 'otstapkibg'); ?></h3>
        <p class="text-gray-500 mb-6">
          <?php _e('В момента няма публикувани статии. Моля, проверете по-късно за нови публикации.', 'otstapkibg'); ?>
        </p>
      </div>
    <?php endif; ?>
  </div>
</main>

<?php get_footer(); ?>
