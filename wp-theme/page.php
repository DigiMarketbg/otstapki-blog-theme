
<?php get_header(); ?>

<main id="site-content" role="main" class="relative overflow-hidden bg-black">
  <!-- Добавяме dark overlay и плаващ фон, както при началната страница -->

  <div class="absolute inset-0 bg-black/90 pointer-events-none"></div>

  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute w-32 h-32 rounded-full bg-green-100/5 top-10 left-[10%] animate-[pulse_6s_ease-in-out_infinite] flex items-center justify-center">
      <svg class="h-12 w-12 text-green-300/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6m5-10h-6m-4 0H7m6-4V2m-2 0v4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <div class="absolute w-48 h-48 rounded-full bg-green-100/3 bottom-10 right-[15%] animate-[pulse_8s_ease-in-out_infinite_1s] flex items-center justify-center">
      <svg class="h-16 w-16 text-green-300/15" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 10h-6m-4 0H3m9-4V2m-2 0v4m5 6v6m2-6h6m-4 4v-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <div class="absolute w-24 h-24 rounded-full bg-green-100/5 bottom-32 left-[20%] animate-[pulse_7s_ease-in-out_infinite_0.5s] flex items-center justify-center">
      <svg class="h-8 w-8 text-green-300/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>

    <div class="absolute top-[35%] left-[15%] animate-[float_20s_ease-in-out_infinite_2s]">
      <div class="text-green-300/5 text-2xl font-bold rotate-[-15deg]">-30%</div>
    </div>
    <div class="absolute top-[20%] right-[20%] animate-[float_25s_ease-in-out_infinite]">
      <div class="text-green-300/7 text-3xl font-bold rotate-[10deg]">-50%</div>
    </div>
    <div class="absolute bottom-[30%] right-[30%] animate-[float_18s_ease-in-out_infinite_3s]">
      <div class="text-green-300/5 text-2xl font-bold rotate-[5deg]">-20%</div>
    </div>

    <div class="absolute bottom-[25%] left-[10%] animate-[float_22s_ease-in-out_infinite_1s]">
      <div class="text-green-300/10 text-4xl font-bold">otstapki.bg</div>
    </div>

    <div class="absolute w-2 h-2 rounded-full bg-green-300/10 top-[30%] left-[25%] animate-[float_15s_ease-in-out_infinite]"></div>
    <div class="absolute w-3 h-3 rounded-full bg-green-300/8 top-[20%] right-[35%] animate-[float_18s_ease-in-out_infinite_2s]"></div>
    <div class="absolute w-2 h-2 rounded-full bg-green-300/10 bottom-[35%] right-[15%] animate-[float_20s_ease-in-out_infinite_1s]"></div>
    <div class="absolute w-2 h-2 rounded-full bg-green-300/10 bottom-[25%] left-[40%] animate-[float_12s_ease-in-out_infinite_3s]"></div>

    <div class="absolute w-[150px] h-[500px] bg-gradient-to-t from-green-300/0 to-green-300/10 rotate-[30deg] top-[-100px] left-[20%] animate-[float-slow_30s_ease-in-out_infinite]"></div>
    <div class="absolute w-[150px] h-[500px] bg-gradient-to-t from-green-300/0 to-green-300/10 rotate-[-30deg] top-[-200px] right-[30%] animate-[float-slow_25s_ease-in-out_infinite_5s]"></div>
  </div>

  <div class="container mx-auto px-4 text-center relative z-10 py-24 prose max-w-5xl">
    <?php
    if ( have_posts() ) :
      while ( have_posts() ) : the_post();
        the_content();
      endwhile;
    endif;
    ?>
  </div>
</main>

<?php get_footer(); ?>
