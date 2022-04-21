import { useState, useEffect } from 'react';
import { connect } from 'frontity';
import { Group, Image, Text, Anchor, Container, Divider, Burger } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import logo from '../../assets/images/header-logo.png';
import useStyles from './Header.styles';

const linksData = [
  { link: 'https://debank.com/profile/0xed56a7f78b830518ff00808e2baff0f4bdc722ed', label: 'Treasury' },
  { link: 'https://drive.google.com/file/d/1fYlN-1r6wv4ISwSV7-lw7gETFzPDk4Ac/view', label: 'Whitepaper' },
  { link: 'https://medium.com/@nodac.official', label: 'Resources' },
  { link: 'https://linktr.ee/nodacofficial', label: 'Socials' },
  { link: '#', label: 'Launch Dashboard', isBtn: true },
];

const Header = () => {
  const [opened, setOpened] = useState();
  const [isScrolled, setIsScrolled] = useState(false);
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const { classes, cx } = useStyles();

  const links = linksData.map((item) => (
    <Anchor key={item.label} className={cx(classes.link, { [classes.linkBtn]: item.isBtn })} href={item.link} target="_blank" rel="noreferrer">
      {item.label}
    </Anchor>
  ));

  const desktopNav = <Group spacing={48}>{links}</Group>;
  const mobileNav = (
    <Group className={classes.mobileLinks} direction="column" spacing={12}>
      {links}
    </Group>
  );

  useEffect(() => {
    const setScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolled(false);
        return;
      }
      setIsScrolled(true);
    };
    window.addEventListener('scroll', setScroll);
    return () => {
      window.removeEventListener('scroll', setScroll);
    };
  }, []);

  return (
    <header className={cx(classes.header, { [classes.stickyHeader]: isScrolled })}>
      <Container size={1352}>
        <Group position="apart">
          <Group>
            <Anchor href="https://nodac.io/">
              <Image src={logo} width={120} />
            </Anchor>

            <span>|</span>
            <Text size="md">Node Aggregator Capital</Text>
          </Group>
          <nav className={classes.nav}>
            {isTablet && <Burger className={classes.burger} opened={opened} onClick={() => setOpened((o) => !o)} />}
            {isTablet ? opened && mobileNav : desktopNav}
          </nav>
        </Group>
        <Divider className={classes.divider} />
      </Container>
    </header>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);
