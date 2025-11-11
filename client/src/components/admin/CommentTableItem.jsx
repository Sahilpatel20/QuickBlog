import React from 'react';
import { assets } from '../../assets/assets';

const CommentTableItem = ({ comment, fetchComments, index }) => {
  if (!comment) return null;

  const {
    blog = {},
    createdAt = '',
    _id = '',
    name = 'Anonymous',
    content = 'No content',
    isApproved = false,
  } = comment || {};

  const blogTitle = blog?.title || 'Untitled Blog';
  const BlogDate = createdAt ? new Date(createdAt) : null;

  return (
    <tr className="border-y border-gray-300">
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b> : {blogTitle}
        <br />
        <br />
        <b className="font-medium text-gray-600">Name</b> : {name}
        <br />
        <b className="font-medium text-gray-600">Comment</b> : {content}
      </td>

      <td className="px-6 py-4">
        <p className="text-sm text-gray-500">
          {BlogDate ? BlogDate.toLocaleDateString() : 'No Date'}
        </p>
      </td>

      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!isApproved ? (
            <img
              src={assets.tick_icon}
              alt="approve"
              className="w-5 hover:scale-110 transition-all cursor-pointer"
              onClick={() => console.log(`Approve comment ${_id}`)}
            />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}

          <img
            src={assets.bin_icon}
            alt="delete"
            className="w-5 hover:scale-110 transition-all cursor-pointer"
            onClick={() => console.log(`Delete comment ${_id}`)}
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
