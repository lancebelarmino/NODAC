import { css, connect, styled, Head } from 'frontity';
import Switch from '@frontity/components/switch';
import { MantineProvider, Global } from '@mantine/core';
import Header from './Header/header';
// import List from './List';
import Post from './post';
import Loading from './loading';
import Title from './title';
import PageError from './page-error';
import theme from '../styles/theme';
import components from '../styles/components';
import global from '../styles/global';
import Home from '../pages/Home';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <MantineProvider theme={theme} styles={components} withNormalizeCSS>
        <Title />
        <Head>
          <meta name="description" content={state.frontity.description} />
          <html lang="en" />
        </Head>

        {/* Add the header of the site. */}
        <Header />

        {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}

        <Global styles={global} />
        <Switch>
          <Home when={data.isHome} />
          <Loading when={data.isFetching} />
          {/* <List when={data.isArchive} /> */}
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </MantineProvider>
    </>
  );
};

export default connect(Theme);
