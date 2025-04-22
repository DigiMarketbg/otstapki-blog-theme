
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('bg-BG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const PostBySlug = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(`https://blog.otstapki.bg/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`);
        if (!response.ok) {
          throw new Error(`Error fetching post: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setPost(data[0]);
        } else {
          setPost(null);
        }
      } catch (err) {
        setError(true);
        toast({
          variant: "destructive",
          title: "Грешка при зареждане на статията",
          description: "Моля, опитайте по-късно или свържете се с администратора."
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, toast]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow max-w-4xl">
        {loading ? (
          <div role="status" aria-live="polite" className="text-white text-center">Зареждане на статия...</div>
        ) : error ? (
          <div className="text-center text-red-500">Възникна грешка при зареждане.</div>
        ) : post ? (
          <>
            <h1 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
            <p className="text-gray-400 mb-6">{formatDate(post.date)}</p>
            <div 
              className="prose prose-lg prose-invert prose-green max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
            ></div>
            <Link to="/blog">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Назад към блога
              </Button>
            </Link>
          </>
        ) : (
          <div className="text-center text-gray-400">
            Статията не е намерена.
            <div className="mt-6">
              <Link to="/blog">
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  Назад към блога
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostBySlug;
