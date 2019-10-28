import React from 'react';
import { withRouter } from 'next/router';
import _ from 'lodash';
import Link from 'next/link';
import pagination from 'pagination';
import Layout from '../../style/layouts/Main';
import PostPreview from '../../services/blog/components/Preview/Card';
import blogposts from '../../services/blog/data/posts';
import { siteMeta } from '../../../site.config';

const Blog = ({ router, page = 1 }) => {
  const paginator = new pagination.SearchPaginator({
    prelink: '/',
    current: page,
    rowsPerPage: siteMeta.postsPerPage,
    totalResult: blogposts.length
  });

  const {
    previous,
    range,
    next,
    fromResult,
    toResult
  } = paginator.getPaginationData();
  const results = _.range(fromResult - 1, toResult);

  return (
    <Layout pageTitle="Blog" path={router.pathname}>
      <header>
        <h1>Blog</h1>
      </header>

      {blogposts
        .filter((_post, index) => results.indexOf(index) > -1)
        .map((post, index) => (
          <PostPreview
            key={index}
            title={post.title}
            summary={post.summary}
            date={post.publishedAt}
            path={post.path}
          />
        ))}

      <ul>
        {previous && (
          <li>
            <Link href={`/blog?page=${previous}`} as={`/blog/${previous}`}>
              <a>Previous</a>
            </Link>
          </li>
        )}
        {range.map((page, index) => (
          <li key={index}>
            <Link key={index} href={`/blog?page=${page}`} as={`/blog/${page}`}>
              <a>{page}</a>
            </Link>
          </li>
        ))}
        {next && (
          <li>
            <Link href={`/blog?page=${next}`} as={`/blog/${next}`}>
              <a>Next</a>
            </Link>
          </li>
        )}
      </ul>
      <style jsx>{`
        header {
          margin-bottom: 3em;
        }
      `}</style>
    </Layout>
  );
};

Blog.getInitialProps = async ({ query }) => {
  return query ? { page: query.page } : {};
};

export default withRouter(Blog);
