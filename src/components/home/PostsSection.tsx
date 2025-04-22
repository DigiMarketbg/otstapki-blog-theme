
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const PostsSection = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://blog.otstapki.bg/wp-json/wp/v2/posts?per_page=5&status=publish&_embed");
        if (!res.ok) {
          throw new Error(`Failed to fetch posts: ${res.status}`);
        }
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Грешка при зареждане на статиите",
          description: "Моля, опитайте по-късно или свържете се с администратора."
        });
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [toast]);

  return (
    <section className="py-16 bg-gradient-to-t from-black via-green-950/5 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Последни </span>
            <span className="text-green-500">статии</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Открийте полезна информация, съвети и стратегии за намиране на най-добрите оферти и спестяване на пари
          </p>
        </div>

        {loading && (
          <div role="status" aria-live="polite" className="text-white text-center">Зареждане на статии...</div>
        )}

        {!loading && posts.length === 0 && (
          <p className="text-gray-400 text-center">Няма намерени статии.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-gray-900/60 border border-gray-800 rounded-lg p-6 flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-white mb-2">{post.title.rendered}</h3>
              <div 
                className="text-gray-400 mb-4 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
              />
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block mt-auto"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  Прочети
                </Button>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsSection;
