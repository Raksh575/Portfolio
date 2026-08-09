import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "../data/portfolioData";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white border border-sand-300/60 p-6 md:p-8 rounded-2xl flex flex-col justify-between h-full hover:shadow-md transition-shadow"
    >
      <div>
        {/* Category & meta */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-brown-accent bg-sand-100 border border-sand-300 px-2.5 py-1 rounded-full">
            {post.category}
          </span>
          <div className="flex items-center gap-3 text-[10px] text-neutral-gray">
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

        {/* Title & Excerpt */}
        <Link to={`/blog/${post.id}`} className="group block mb-4">
          <h3 className="text-lg md:text-xl font-bold text-charcoal leading-snug group-hover:text-brown-accent transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-sm text-charcoal-muted leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      {/* Footer link */}
      <div className="pt-4 border-t border-sand-100 mt-auto flex items-center justify-between">
        <Link
          to={`/blog/${post.id}`}
          className="text-xs font-bold text-brown-accent hover:text-brown-accent-hover transition-colors flex items-center gap-1.5 group/link"
        >
          <span>Read Article</span>
          <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
};
