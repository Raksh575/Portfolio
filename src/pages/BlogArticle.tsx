import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogData } from "../data/portfolioData";
import type { BlogPost } from "../data/portfolioData";
import { PageTransition } from "../components/PageTransition";

export const BlogArticle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find((p: BlogPost) => p.id === id);

  if (!post) {
    return (
      <PageTransition>
        <section className="py-24 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-extrabold text-charcoal mb-4">Article Not Found</h2>
          <p className="text-sm text-neutral-gray mb-8">The blog article you are looking for does not exist or has been moved.</p>
          <Link
            to="/blog"
            className="px-6 py-2.5 rounded-xl bg-brown-accent hover:bg-brown-accent-hover text-white font-bold text-xs transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </section>
      </PageTransition>
    );
  }

  // Light text custom parser to render headers, lists, code, etc.
  const parseArticleContent = (text: string) => {
    return text.split("\n\n").map((block, idx) => {
      const trimmedBlock = block.trim();
      
      if (trimmedBlock.startsWith("### ")) {
        return (
          <h3 key={idx} className="text-lg md:text-xl font-bold text-charcoal mt-8 mb-4 tracking-tight">
            {trimmedBlock.replace("### ", "")}
          </h3>
        );
      }
      
      if (trimmedBlock.startsWith("## ")) {
        return (
          <h2 key={idx} className="text-xl md:text-2xl font-bold text-charcoal mt-10 mb-5 tracking-tight border-b border-sand-200 pb-2">
            {trimmedBlock.replace("## ", "")}
          </h2>
        );
      }

      if (trimmedBlock.startsWith("- ")) {
        return (
          <ul key={idx} className="list-disc pl-6 my-4 space-y-2 text-sm md:text-base text-charcoal-muted leading-relaxed">
            {trimmedBlock.split("\n").map((li, lIdx) => (
              <li key={lIdx} className="pl-1">
                {parseInlineCode(li.replace("- ", ""))}
              </li>
            ))}
          </ul>
        );
      }

      if (/^\d+\.\s+/.test(trimmedBlock)) {
        return (
          <ol key={idx} className="list-decimal pl-6 my-4 space-y-2 text-sm md:text-base text-charcoal-muted leading-relaxed">
            {trimmedBlock.split("\n").map((li, lIdx) => (
              <li key={lIdx} className="pl-1">
                {parseInlineCode(li.replace(/^\d+\.\s+/, ""))}
              </li>
            ))}
          </ol>
        );
      }

      return (
        <p key={idx} className="text-sm md:text-base text-charcoal-muted leading-relaxed mb-5 font-medium">
          {parseInlineCode(trimmedBlock)}
        </p>
      );
    });
  };

  // Utility to split backticks into inline code components
  const parseInlineCode = (text: string) => {
    if (!text.includes("`")) return text;
    
    const parts = text.split("`");
    return parts.map((part, index) => {
      // Odd indices represent wrapped code: `code`
      if (index % 2 !== 0) {
        return (
          <code
            key={index}
            className="px-1.5 py-0.5 bg-sand-200 text-charcoal font-mono rounded text-xs md:text-sm font-semibold"
          >
            {part}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <PageTransition>
      <article className="py-24 max-w-3xl mx-auto px-6 md:px-12 w-full text-left">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-neutral-gray hover:text-brown-accent transition-colors mb-8 group"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Blog</span>
        </Link>

        {/* Article Meta */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-brown-accent bg-sand-100 border border-sand-300 px-2.5 py-1 rounded-full">
            {post.category}
          </span>
          <div className="flex items-center gap-3 text-[10px] text-neutral-gray font-semibold">
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-tight mb-8">
          {post.title}
        </h1>

        {/* Splash Image / Divider */}
        <div className="h-1 bg-gradient-to-r from-brown-accent/50 to-sand-300 rounded-full mb-10" />

        {/* Content Body */}
        <div className="prose prose-sand max-w-none">
          {parseArticleContent(post.content)}
        </div>

        {/* Ending block */}
        <div className="border-t border-sand-300 mt-16 pt-8 flex items-center justify-between">
          <span className="text-xs text-neutral-gray font-semibold">
            © 2026 Rakshit Vijayavarthanan
          </span>
          
          <Link
            to="/blog"
            className="px-5 py-2 rounded-xl border border-sand-300 hover:bg-sand-200 text-charcoal-muted text-xs font-bold transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft size={13} />
            <span>More Articles</span>
          </Link>
        </div>
      </article>
    </PageTransition>
  );
};
export default BlogArticle;
