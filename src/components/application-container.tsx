import {
    AppShell,
    Box,
    Container,
    Footer,
    Grid,
    Group,
    Header,
    Image,
    Text,
    useMantineTheme
} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import Link from "next/link";
import useStyles from "../styles/layout.styles";
import type {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

const ApplicationContainer = ({children}: Props): JSX.Element => {
    const theme = useMantineTheme();
    const {classes} = useStyles();
    const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.xl}px)`);
    const largeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.xl}px)`);

    return (
        <AppShell
            padding={0}
            fixed={false}
            header={
                <Header
                    className={classes.header}
                    height={64}>
                    <Group sx={{height: "100%", justifyContent: "inherit"}}>
                        <Link
                            href="/"
                            passHref>
                            <Image
                                width={smallScreen ? 300 : 323}
                                alt="BKK VBU logo"
                                fit="contain"
                                src="/static/assets/icons/bkk-vbu-light-logo.svg"
                            />
                        </Link>
                    </Group>
                </Header>
            }
            footer={
                <Footer
                    height="100%"
                    className={classes.footer}>
                    <Grid
                        mx={largeScreen ? 80 : 32}
                        mt="xl"
                        justify="space-between">
                        <Grid.Col
                            md={12}
                            xl={4}
                            mt={largeScreen ? 0 : "xl"}>
                            <Text
                                opacity={0.7}
                                mb="md"
                                tt="uppercase"
                                weight={600}>
                                Auszeichnungen
                            </Text>
                            <Box>
                                <Image
                                    width={283}
                                    height={58}
                                    src="/static/assets/icons/footer.png"
                                    alt=""></Image>
                            </Box>
                        </Grid.Col>
                        <Grid.Col
                            md={12}
                            xl={2}
                            mt={largeScreen ? 0 : "xl"}>
                            <Text
                                opacity={0.7}
                                tt="uppercase"
                                weight={600}>
                                Unternehmen
                            </Text>
                            <Box
                                className={classes.link}
                                component="a"
                                href="https://www.meine-krankenkasse.de/ueber-die-bkk-vbu/"
                                target="_blank">
                                <Text my="md">Über uns</Text>
                            </Box>
                        </Grid.Col>
                        <Grid.Col
                            md={12}
                            xl={2}
                            mt={largeScreen ? 0 : "xl"}>
                            <Text
                                opacity={0.7}
                                tt="uppercase"
                                weight={600}>
                                Rechtliches
                            </Text>
                            <Box
                                className={classes.link}
                                component="a"
                                href="https://www.meine-krankenkasse.de/impressum/"
                                target="_blank">
                                <Text my="md">Impressum</Text>
                            </Box>
                            <Box
                                className={classes.link}
                                component="a"
                                href="https://www.meine-krankenkasse.de/datenschutz"
                                target="_blank">
                                <Text my="md">Datenschutz</Text>
                            </Box>
                        </Grid.Col>
                        <Grid.Col
                            md={12}
                            xl={4}
                            mt={largeScreen ? 0 : "xl"}>
                            <Text
                                opacity={0.7}
                                tt="uppercase"
                                weight={600}>
                                Laden Sie unsere App
                            </Text>
                            <Text py="md">
                                Macht Ihr Smartphone zum mobilen Begleiter in Sachen Gesundheit.
                            </Text>
                            <Group position="left">
                                <Box
                                    component="a"
                                    href="https://play.google.com/store/apps/details?id=de.meine_krankenkasse.vhoenixapp&pli=1"
                                    target="_blank">
                                    <Image
                                        alt=""
                                        fit="contain"
                                        height={51}
                                        src="/static/assets/icons/google-play-white.svg"
                                    />
                                </Box>
                                <Box
                                    component="a"
                                    href="https://apps.apple.com/de/app/bkk-vbu-meine-krankenkasse/id1488743521?l=de"
                                    target="_blank">
                                    <Image
                                        fit="contain"
                                        alt=""
                                        height={51}
                                        src="/static/assets/icons/app-store-white.svg"
                                    />
                                </Box>
                            </Group>
                        </Grid.Col>
                        <Grid.Col
                            md={12}
                            mt={30}>
                            <Container
                                size={250}
                                px={0}
                                mx={0}>
                                {socialIcons()}
                                <Text
                                    my="md"
                                    opacity={0.7}>
                                    &copy; {new Date().getFullYear()} BKK VBU{" "}
                                </Text>
                            </Container>
                        </Grid.Col>
                    </Grid>
                </Footer>
            }>
            <Box sx={{maxWidth: 1440, margin: "auto"}}>{children}</Box>
        </AppShell>
    );
};

const socialIcons = (): JSX.Element => (
    <Group position="apart">
        <Box
            component="a"
            href="https://www.facebook.com/bkk.vbu/"
            target="_blank">
            <Image
                alt=""
                height={24}
                width={24}
                src="/static/assets/icons/social/facebook.svg"
            />
        </Box>
        <Box
            component="a"
            href="https://www.instagram.com/lebe.bewusst/"
            target="_blank">
            <Image
                alt=""
                height={24}
                width={24}
                src="/static/assets/icons/social/instagram.svg"
            />
        </Box>
        <Box
            component="a"
            href="https://twitter.com/bkk_vbu"
            target="_blank">
            <Image
                alt=""
                height={24}
                width={24}
                src="/static/assets/icons/social/twitter.svg"
            />
        </Box>
        <Box
            component="a"
            href="https://www.youtube.com/c/BKKVBUbewegt"
            target="_blank">
            <Image
                alt=""
                height={24}
                width={24}
                src="/static/assets/icons/social/youtube.svg"
            />
        </Box>
        <Box
            component="a"
            href="https://www.linkedin.com/company/bkk-vbu/"
            target="_blank">
            <Image
                alt=""
                height={24}
                width={24}
                src="/static/assets/icons/social/linkedin.svg"
            />
        </Box>
    </Group>
);

export default ApplicationContainer;
