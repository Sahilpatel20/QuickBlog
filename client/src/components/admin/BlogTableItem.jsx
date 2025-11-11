import React from 'react';
import { assets } from '../../assets/assets';

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  if (!blog) return null;

  const { title = 'Untitled Blog', createdAt = '', isPublished = false } = blog || {};
  const BlogDate = createdAt ? new Date(createdAt) : null;

  return (
    <tr className="border-y border-gray-300">
      <th className="px-2 py-4">{index}</th>
      <td className="px-2 py-4">{title}</td>
      <td className="px-2 py-4 max-sm:hidden">
        {BlogDate ? BlogDate.toDateString() : 'No Date'}
      </td>
      <td className="px-2 py-4 max-sm:hidden">
        <p className={`${isPublished ? 'text-green-600' : 'text-orange-700'}`}>
          {isPublished ? 'Published' : 'Unpublished'}
        </p>
      </td>
      <td className="px-2 py-4 flex text-xs gap-3">
        <button className="border px-2 py-0.5 mt-1 rounded cursor-pointer">
          {isPublished ? 'Unpublish' : 'Publish'}
        </button>
        <img
          src={assets.cross_icon}
          className="w-8 hover:scale-110 transition-all cursor-pointer"
          alt="delete"
        />
      </td>
    </tr>
  );
};

export default BlogTableItem;
