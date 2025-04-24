
<form role="search" method="get" class="search-form" action="<?php echo esc_url(home_url('/')); ?>">
    <div class="flex gap-2">
        <input type="search" class="search-field w-full px-4 py-2 rounded border border-gray-700 bg-gray-900 text-white" 
            placeholder="<?php echo esc_attr_x('Търси в блога...', 'placeholder', 'otstapkibg'); ?>"
            value="<?php echo get_search_query(); ?>" name="s" />
        <button type="submit" class="search-submit button bg-green-500">
            <?php echo esc_attr_x('Търси', 'submit button', 'otstapkibg'); ?>
        </button>
    </div>
</form>
