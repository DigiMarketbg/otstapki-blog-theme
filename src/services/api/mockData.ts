
import { WordPressPost, WordPressSiteSettings, WordPressCategory } from './types';

// Default category list for development
export const defaultCategories: WordPressCategory[] = [
  { id: 1, name: "Отстъпки", slug: "discounts" },
  { id: 2, name: "Финанси", slug: "finance" },
  { id: 3, name: "Технологии", slug: "technology" },
  { id: 4, name: "Лайфстайл", slug: "lifestyle" }
];

// Default site settings for development
export const defaultSiteSettings: WordPressSiteSettings = {
  title: "Отстъпки БГ",
  description: "Открий най-добрите намаления",
  logo: "/lovable-uploads/6cbb2d8a-6ad4-48cf-bdd4-443bd16a25c8.png",
  favicon: "/favicon.ico"
};

// Mock data generation for development
export function generateMockPost(id: number): WordPressPost {
  const categoryId = Math.floor(Math.random() * 4) + 1;
  const category = defaultCategories.find(cat => cat.id === categoryId) || defaultCategories[0];
  
  return {
    id,
    date: new Date().toISOString(),
    title: {
      rendered: `Примерна статия ${id}: Как да спестите пари с нашите промоции`
    },
    excerpt: {
      rendered: '<p>Това е кратко резюме на статията, което описва основните точки и цели да привлече читателите...</p>'
    },
    content: {
      rendered: `
        <h2>Въведение</h2>
        <p>Това е подробно съдържание на статията, което включва полезни съвети за спестяване на пари и намиране на най-добрите промоции.</p>
        <h3>Първи съвет</h3>
        <p>Следете редовно нашия сайт за най-новите отстъпки и промоции от водещи магазини и брандове.</p>
        <h3>Втори съвет</h3>
        <p>Абонирайте се за нашия бюлетин, за да получавате известия за ексклузивни оферти директно във вашата поща.</p>
        <p>Използвайте промо код: <strong>SAVE20</strong> за допълнителна отстъпка от 20% при първа поръчка.</p>
      `
    },
    slug: `primerna-statiya-${id}-kak-da-spestite-pari`,
    featured_media: id,
    categories: [categoryId],
    _embedded: {
      'wp:featuredmedia': [
        {
          source_url: '/placeholder.svg'
        }
      ],
      'wp:term': [
        [
          {
            id: categoryId,
            name: category.name,
            slug: category.slug
          }
        ]
      ]
    }
  };
}

export function generateMockPosts(count: number, categoryId?: number): WordPressPost[] {
  return Array.from({ length: count }).map((_, index) => {
    const post = generateMockPost(index + 1);
    
    if (categoryId) {
      post.categories = [categoryId];
      const category = defaultCategories.find(cat => cat.id === categoryId);
      if (category && post._embedded && post._embedded['wp:term']) {
        post._embedded['wp:term'][0] = [{
          id: categoryId,
          name: category.name,
          slug: category.slug
        }];
      }
    }
    
    return post;
  });
}
