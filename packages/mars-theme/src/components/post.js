import { useState, useEffect } from 'react';
import { connect, styled } from 'frontity';
import { Text, Title, Group, Container, SimpleGrid, Image, Center } from '@mantine/core';
import List from './List';
import Item from './List/list-item';
import FeaturedMedia from './featured-media';
import noPosts from '../assets/images/blog-no-posts.png';
import fallback from '../assets/images/news-fallback.jpg';
import useStyles from './post.styles';

/**
 * The Post component that Mars uses to render any kind of "post type", like
 * posts, pages, attachments, etc.
 *
 * It doesn't receive any prop but the Frontity store, which it receives from
 * {@link connect}. The current Frontity state is used to know which post type
 * should be rendered.
 *
 * @param props - The Frontity store (state, actions, and libraries).
 *
 * @example
 * ```js
 * <Switch>
 *   <Post when={data.isPostType} />
 * </Switch>
 * ```
 *
 * @returns The {@link Post} element rendered.
 */
const Post = ({ state, actions, libraries }) => {
  const [otherPostsIndex, setOtherPostsIndex] = useState([]);

  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  // Mantine Styling
  const { classes } = useStyles();

  // Get previous and next post
  const postsData = state.source.get('/').items;

  useEffect(() => {
    if (postsData) {
      console.log(postsData);
      const postIndex = postsData.findIndex((i) => i.id === data.id);
      const totalNumOfPosts = postsData.length - 1;
      const prevPost = postIndex === 0 ? null : postsData[postIndex - 1].id;
      const nextPost = postIndex === totalNumOfPosts ? null : postsData[postIndex + 1].id;
      setOtherPostsIndex([prevPost, nextPost]);
    }
  }, [postsData]);

  const otherPosts = otherPostsIndex.map((item, index) => {
    if (item) {
      return <Item key={item} item={state.source[data.type][item]} />;
    }
    return (
      <Center key={index}>
        <div>
          <Image className={classes.otherPostsIcon} src={noPosts} height={80} fit="contain" />
          {otherPostsIndex[0] === null && (
            <Text className={classes.otherPostsNotification} size="xl">
              Looks live you've reached our latest post. Stay tuned for more!
            </Text>
          )}
          {otherPostsIndex[1] === null && (
            <Text className={classes.otherPostsNotification} size="xl">
              Looks live you've reached our first post. Stay tuned for more!
            </Text>
          )}
        </div>
      </Center>
    );
  });

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch('/');
    List.preload();
  }, [actions.source]);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container size={1000}>
      <article className={classes.section}>
        {state.source.attachment[post.featured_media] ? (
          <img className={classes.featuredImage} src={state.source.attachment[post.featured_media].source_url}></img>
        ) : (
          <Image className={classes.featuredImage} src={fallback} height={400} />
        )}

        <div className={classes.header}>
          <Title className={classes.title} order={2}>
            {post.title.rendered}
          </Title>

          {/* Hide author and date on pages */}
          {!data.isPage && (
            <Group position="apart">
              {author && <Text className={classes.author}>{author.name}</Text>}
              <Text>{date.toDateString()}</Text>
            </Group>
          )}
        </div>

        {/* Look at the settings to see if we should include the featured image */}
        {state.theme.featured.showOnPost && <FeaturedMedia id={post.featured_media} />}

        {data.isAttachment ? (
          // If the post is an attachment, just render the description property,
          // which already contains the thumbnail.
          <div dangerouslySetInnerHTML={{ __html: post.description.rendered }} />
        ) : (
          // Render the content using the Html2React component so the HTML is
          // processed by the processors we included in the
          // libraries.html2react.processors array.
          <Content>
            <Html2React html={post.content.rendered} />
          </Content>
        )}
      </article>

      <div className={classes.otherPosts}>
        <Title className={classes.otherPostsTitle} order={2}>
          Other Posts
        </Title>
        <SimpleGrid className={classes.posts} cols={2} spacing={40} breakpoints={[{ maxWidth: 1024, cols: 1, spacing: 60 }]}>
          {otherPosts}
        </SimpleGrid>
      </div>
    </Container>
  ) : null;
};

export default connect(Post);
/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    width: 100%;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type='text'],
  input[type='email'],
  input[type='url'],
  input[type='tel'],
  input[type='number'],
  input[type='date'],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type='submit'] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
