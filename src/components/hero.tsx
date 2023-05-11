import {Container, createStyles, Grid, Group, Image, useMantineTheme} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import type {MantineTheme} from "@mantine/core";

interface HeroProps {
    imageUrl: string;
    title: JSX.Element;
    description?: JSX.Element;
}

const useStyles = createStyles((theme: MantineTheme) => ({
    title: {
        textAlign: "center",

        [theme.fn.largerThan("xl")]: {
            textAlign: "start"
        }
    }
}));

const Hero = ({description, imageUrl, title}: HeroProps): JSX.Element => {
    const theme = useMantineTheme();
    const largeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.xl}px)`);
    const {classes} = useStyles();

    return (
        <Grid
            align="center"
            m={0}
            p={{base: 30, 1000: 55, 1440: 70}}>
            <Grid.Col
                md={12}
                xl={6}
                p={0}
                m={0}>
                <Container
                    fluid
                    pr="xl">
                    <Group
                        py="xl"
                        position={largeScreen ? "left" : "center"}>
                        <div className={classes.title}>{title}</div>
                        {description}
                    </Group>
                </Container>
            </Grid.Col>
            <Grid.Col
                md={12}
                xl={6}
                p={0}>
                <Image
                    src={imageUrl}
                    alt=""
                />
            </Grid.Col>
        </Grid>
    );
};

export {Hero};
export type {HeroProps};
