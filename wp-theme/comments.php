
<?php
/**
 * The template for displaying comments
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Don't load comments on password protected posts
if (post_password_required()) {
    return;
}
?>

<div id="comments" class="comments-area mt-10 border-t border-gray-800 pt-8">
    <?php if (have_comments()) : ?>
        <h3 class="comments-title text-xl font-bold mb-6 text-white">
            <?php
            $comments_number = get_comments_number();
            if ('1' === $comments_number) {
                printf(_x('1 коментар', 'comments title', 'otstapkibg'));
            } else {
                printf(
                    _nx(
                        '%1$s коментар',
                        '%1$s коментара',
                        $comments_number,
                        'comments title',
                        'otstapkibg'
                    ),
                    number_format_i18n($comments_number)
                );
            }
            ?>
        </h3>

        <ol class="comment-list">
            <?php
            wp_list_comments(array(
                'style'       => 'ol',
                'short_ping'  => true,
                'avatar_size' => 50,
                'reply_text'  => __('Отговори', 'otstapkibg'),
            ));
            ?>
        </ol>

        <?php the_comments_pagination(array(
            'prev_text' => '&larr; ' . __('Предишни коментари', 'otstapkibg'),
            'next_text' => __('Следващи коментари', 'otstapkibg') . ' &rarr;',
        )); ?>
    <?php endif; ?>

    <?php if (!comments_open() && get_comments_number() && post_type_supports(get_post_type(), 'comments')) : ?>
        <p class="no-comments text-gray-400"><?php _e('Коментарите са затворени.', 'otstapkibg'); ?></p>
    <?php endif; ?>

    <?php
    comment_form(array(
        'title_reply'          => __('Оставете коментар', 'otstapkibg'),
        'title_reply_to'       => __('Отговор на %s', 'otstapkibg'),
        'title_reply_before'   => '<h3 id="reply-title" class="comment-reply-title text-xl font-bold mb-4 text-white">',
        'title_reply_after'    => '</h3>',
        'comment_notes_before' => '<p class="comment-notes text-gray-400 mb-4">' . __('Вашият имейл адрес няма да бъде публикуван.', 'otstapkibg') . '</p>',
        'class_submit'         => 'button bg-green-500',
        'submit_button'        => '<input name="%1$s" type="submit" id="%2$s" class="%3$s" value="%4$s" />',
        'label_submit'         => __('Публикувай коментар', 'otstapkibg'),
    ));
    ?>
</div>
