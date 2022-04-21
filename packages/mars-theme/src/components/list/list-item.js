import { connect, styled } from 'frontity';
import { Anchor, Image, Title, Divider, Text, Group, Button } from '@mantine/core';
import Link from '../link';
import WindowCard from '../Card/WindowCard';
import fallback from '../../assets/images/news-fallback.jpg';
import useStyles from './list-item.styles';

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const date = new Date(item.date);
  const { classes } = useStyles();
  const media = state.source.attachment[item.featured_media];

  return (
    <WindowCard>
      <article className={classes.content}>
        {/*
         * If the want to show featured media in the
         * list of featured posts, we render the media.
         * {state.theme.featured.showOnList && <FeaturedMedia id={item.featured_media} />}
         */}

        <Anchor component={Link} link={item.link}>
          {media ? (
            <img className={classes.media} src={state.source.attachment[item.featured_media].source_url}></img>
          ) : (
            <Image className={classes.media} src={fallback} height={200} withPlaceholder />
          )}
        </Anchor>

        {/*
         *  <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
         */}
        <Anchor component={Link} link={item.link}>
          <Title className={classes.title} order={5}>
            {item.title.rendered}
          </Title>
        </Anchor>

        <Divider />

        {/* If the post has an excerpt (short summary text), we render it */}
        {item.excerpt && <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />}

        <Group position="apart">
          <Text>{date.toDateString()}</Text>
          <Button component={Link} className={classes.btn} link={item.link}>
            Read Full Article
          </Button>
        </Group>
      </article>
    </WindowCard>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Excerpt = styled.div`
  line-height: 1.6em;
  color: #0a0a0d;
`;
