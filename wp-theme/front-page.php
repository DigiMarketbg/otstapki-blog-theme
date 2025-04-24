
<?php get_header(); ?>

<main id="site-content" role="main" class="relative z-10">
  <!-- Hero Section -->
  <section class="py-16 md:py-24 text-center">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">
        <span class="text-white">Намери </span>
        <span class="text-green-500">най-добрите</span>
        <span class="text-white"> оферти</span>
      </h1>
      <p class="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
        <?php _e('Спести от покупките си с най-добрите отстъпки, промоции и оферти, събрани на едно място.', 'otstapkibg'); ?>
      </p>
      <div class="flex flex-col md:flex-row gap-4 justify-center">
        <a href="https://www.otstapki.bg" target="_blank" rel="noopener noreferrer" class="button bg-green-500">
          <?php _e('Разгледай офертите', 'otstapkibg'); ?>
        </a>
        <a href="<?php echo home_url('/blog/'); ?>" class="button button-outline">
          <?php _e('Посети блога', 'otstapkibg'); ?>
        </a>
      </div>
    </div>
  </section>

  <!-- Feature Section -->
  <section class="py-16 bg-gradient-to-t from-black via-green-950/5 to-black">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="text-white"><?php _e('Защо да изберете', 'otstapkibg'); ?> </span>
          <span class="text-green-500">otstapki.bg</span>
        </h2>
        <p class="text-gray-300 max-w-2xl mx-auto">
          <?php _e('Ние правим пазаруването по-умно и по-изгодно за вас.', 'otstapkibg'); ?>
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-gray-900/60 border border-gray-800 p-6 rounded-lg">
          <div class="flex items-center justify-center h-12 w-12 bg-green-500/20 text-green-500 rounded-lg mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2 text-center"><?php _e('Винаги актуални оферти', 'otstapkibg'); ?></h3>
          <p class="text-gray-400 text-center"><?php _e('Нашият екип постоянно търси и актуализира най-добрите оферти на българския пазар.', 'otstapkibg'); ?></p>
        </div>

        <div class="bg-gray-900/60 border border-gray-800 p-6 rounded-lg">
          <div class="flex items-center justify-center h-12 w-12 bg-green-500/20 text-green-500 rounded-lg mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2 text-center"><?php _e('Проверени продукти', 'otstapkibg'); ?></h3>
          <p class="text-gray-400 text-center"><?php _e('Предлагаме само оферти от надеждни търговци с доказано качество на продуктите и услугите.', 'otstapkibg'); ?></p>
        </div>

        <div class="bg-gray-900/60 border border-gray-800 p-6 rounded-lg">
          <div class="flex items-center justify-center h-12 w-12 bg-green-500/20 text-green-500 rounded-lg mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2 text-center"><?php _e('Експертни съвети', 'otstapkibg'); ?></h3>
          <p class="text-gray-400 text-center"><?php _e('В нашия блог споделяме полезни съвети за пазаруване, спестяване и намиране на най-добрите сделки.', 'otstapkibg'); ?></p>
        </div>
      </div>
    </div>
  </section>

  <!-- Latest Posts Section -->
  <section class="py-16 bg-gradient-to-t from-black via-green-950/5 to-black">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="text-white"><?php _e('Последни', 'otstapkibg'); ?> </span>
          <span class="text-green-500"><?php _e('статии', 'otstapkibg'); ?></span>
        </h2>
        <p class="text-gray-300 max-w-2xl mx-auto">
          <?php _e('Открийте полезна информация, съвети и стратегии за намиране на най-добрите оферти и спестяване на пари', 'otstapkibg'); ?>
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <?php
        $recent_posts = new WP_Query(array(
          'post_type' => 'post',
          'posts_per_page' => 3,
          'ignore_sticky_posts' => 1
        ));

        if ($recent_posts->have_posts()) :
          while ($recent_posts->have_posts()) : $recent_posts->the_post();
        ?>
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
              <h3 class="card-title">
                <a href="<?php the_permalink(); ?>">
                  <?php the_title(); ?>
                </a>
              </h3>
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
        <?php
          endwhile;
          wp_reset_postdata();
        else :
        ?>
          <div class="col-span-3 text-center py-12">
            <p class="text-gray-400"><?php _e('Все още няма публикувани статии.', 'otstapkibg'); ?></p>
          </div>
        <?php endif; ?>
      </div>

      <div class="text-center mt-8">
        <a href="<?php echo home_url('/blog/'); ?>" class="button bg-green-500">
          <?php _e('Всички статии', 'otstapkibg'); ?>
        </a>
      </div>
    </div>
  </section>

  <?php if (is_active_sidebar('front-page-widgets')) : ?>
  <section class="py-16 bg-black">
    <div class="container mx-auto px-4">
      <?php dynamic_sidebar('front-page-widgets'); ?>
    </div>
  </section>
  <?php endif; ?>

  <!-- CTA Section -->
  <section class="py-16 bg-gradient-to-b from-black via-green-950/10 to-black">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        <span class="text-white"><?php _e('Готови ли сте да', 'otstapkibg'); ?> </span>
        <span class="text-green-500"><?php _e('спестявате', 'otstapkibg'); ?></span>
        <span class="text-white"> <?php _e('от всяка покупка?', 'otstapkibg'); ?></span>
      </h2>
      <p class="text-gray-300 max-w-2xl mx-auto mb-8">
        <?php _e('Присъединете се към хиляди потребители, които вече пазаруват по-умно с otstapki.bg', 'otstapkibg'); ?>
      </p>
      <a href="https://www.otstapki.bg" target="_blank" rel="noopener noreferrer" class="button bg-green-500 text-lg px-8 py-3">
        <?php _e('Разгледай офертите сега', 'otstapkibg'); ?>
      </a>
    </div>
  </section>
</main>

<?php get_footer(); ?>
