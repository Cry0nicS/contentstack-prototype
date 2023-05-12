import {jsonToHtml} from "@contentstack/json-rte-serializer";
import {Box, Container, Grid, Image, SimpleGrid, Text, Title} from "@mantine/core";
import parse from "html-react-parser";
import Head from "next/head";
import {Stack} from "../../client/contentstack";
import {AccordionBlock} from "../../components/accordion-block";
import {AppHero} from "../../components/app-hero";
import {FormFrame} from "../../components/form-frame";
import type {ModularService} from "../../types/generated";
import type {GetStaticProps, InferGetStaticPropsType} from "next";

interface ModularServiceProps {
    modularService: ModularService;
}

const AppPage: InferGetStaticPropsType<typeof getStaticProps> = ({
    modularService
}: ModularServiceProps) => (
    <Box>
        <Head>
            <title>Contentstack prototype - page 1</title>
            <meta
                name="description"
                content="First page demo for Contentstack prototype"
            />
            <meta
                property="og:image"
                content="Hello world"
                key="ogimage"
            />
        </Head>
        <SimpleGrid
            cols={1}
            verticalSpacing={0}>
            <Container
                m="auto"
                size={1440}
                p={0}>
                <AppHero
                    title={HeroTitle(modularService.title)}
                    description={HeroDescription(modularService.teaser)}
                />
                <Box mt="xl">
                    <Image
                        mx="auto"
                        maw={1000}
                        alt=""
                        src={modularService.featured_image.url}
                    />
                </Box>
                <Grid
                    align="center"
                    m={0}
                    px={{base: 32, 1000: 55, 1440: 395}}>
                    {modularService.modular_blocks?.map((service, index) => {
                        // Render an accordion.
                        if (service.accordion) {
                            return (
                                <Grid.Col
                                    p={0}
                                    m={0}
                                    key={`Paragraph-${index.toString()}`}>
                                    <AccordionBlock
                                        key={`Accordion-${index.toString()}`}
                                        element={service.accordion.element}
                                    />
                                </Grid.Col>
                            );
                        }

                        // Render a paragraph.
                        if (service.paragraph) {
                            return (
                                <Grid.Col
                                    p={0}
                                    m={0}
                                    key={`Paragraph-${index.toString()}`}>
                                    {parse(jsonToHtml(service.paragraph.paragraph))}
                                </Grid.Col>
                            );
                        }

                        // Render a sub0title.
                        if (service.sub_title) {
                            return (
                                <Grid.Col
                                    p={0}
                                    m={0}
                                    key={`Paragraph-${index.toString()}`}>
                                    <Title
                                        py={20}
                                        className="responsive-heading"
                                        order={3}>
                                        {service.sub_title.sub_title}
                                    </Title>
                                </Grid.Col>
                            );
                        }

                        // Render an image.
                        if (service.image) {
                            return (
                                <Grid.Col
                                    p={0}
                                    m={0}
                                    key={`Paragraph-${index.toString()}`}>
                                    <Image
                                        alt="Image"
                                        src={service.image.file?.url}
                                    />
                                </Grid.Col>
                            );
                        }

                        // Render a form from Formcycle.
                        if (service.formcycle.form_id !== undefined) {
                            return (
                                <Grid.Col
                                    p={0}
                                    m={0}
                                    key={`Paragraph-${index.toString()}`}>
                                    <FormFrame id={service.formcycle.form_id} />
                                </Grid.Col>
                            );
                        }

                        return (
                            <Grid.Col
                                p={0}
                                m={0}
                                key={`Paragraph-${index.toString()}`}>
                                <Box pb={20}>
                                    Missing render template for &quot;{Object.keys(service)}&quot;.
                                </Box>
                            </Grid.Col>
                        );
                    })}
                </Grid>
            </Container>
        </SimpleGrid>
    </Box>
);

const HeroTitle = (title: string): JSX.Element => (
    <Title
        pt={80}
        pb={24}
        align="center"
        className="responsive-heading"
        order={2}>
        {title}
    </Title>
);

const HeroDescription = (description: string): JSX.Element => (
    <Text
        align="center"
        className="responsive-text">
        {description}
    </Text>
);

const fetchKindergesundheitPage = async (): Promise<ModularService> => {
    /* Disable cSpell for UIDs - cspell:disable-next-line */
    const query = Stack.ContentType("modular-service").Entry("bltd4948ce674c43112");

    return (await query.toJSON().fetch()) as ModularService;
};

const getStaticProps: GetStaticProps = async () => {
    const response = await fetchKindergesundheitPage();

    return {
        props: {
            modularService: response
        }
    };
};

export default AppPage;
export {getStaticProps};
