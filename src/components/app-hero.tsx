import {Grid} from "@mantine/core";

interface AppHeroProps {
    title: JSX.Element;
    description?: JSX.Element;
}

const AppHero = ({description, title}: AppHeroProps): JSX.Element => (
    <Grid
        align="center"
        m={0}
        px={{base: 32, 1000: 55, 1440: 395}}>
        <Grid.Col
            p={0}
            m={0}>
            {title}
        </Grid.Col>
        <Grid.Col
            p={0}
            m={0}>
            {description}
        </Grid.Col>
    </Grid>
);

export {AppHero};
export type {AppHeroProps};
