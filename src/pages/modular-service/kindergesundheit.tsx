import {jsonToHtml} from "@contentstack/json-rte-serializer";
import {Box, Container, Image, SimpleGrid, Title} from "@mantine/core";
import parse from "html-react-parser";
import Head from "next/head";
import {Stack} from "../../client/contentstack";
import {AccordionBlock} from "../../components/accordion-block";
import {FormFrame} from "../../components/form-frame";
import {Hero} from "../../components/hero";
import type {ModularService} from "../../types/generated";
import type {GetStaticProps, InferGetStaticPropsType} from "next";

interface ModularServiceProps {
    modularService: ModularService;
}

const KindergesundheitPage: InferGetStaticPropsType<typeof getStaticProps> = ({
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
            <Hero
                imageUrl={modularService.featured_image.url}
                title={HeroTitle(modularService.title)}
                description={<></>}
            />
            <Container>
                {modularService.modular_blocks?.map((service, index) => {
                    // Render an accordion.
                    if (service.accordion) {
                        return (
                            <AccordionBlock
                                key={`Accordion-${index.toString()}`}
                                element={service.accordion.element}
                            />
                        );
                    }

                    // Render a paragraph.
                    if (service.paragraph) {
                        return (
                            <Box key={`Paragraph-${index.toString()}`}>
                                {parse(jsonToHtml(service.paragraph.paragraph))}
                            </Box>
                        );
                    }

                    // Render an image.
                    if (service.image) {
                        return (
                            <Box key={`Paragraph-${index.toString()}`}>
                                <Image
                                    alt="Image"
                                    src={service.image.file?.url}
                                />
                            </Box>
                        );
                    }

                    // Render a form from Formcycle.
                    if (service.formcycle?.form_id !== undefined) {
                        return (
                            <Box key={`Paragraph-${index.toString()}`}>
                                <FormFrame id={service.formcycle.form_id} />
                            </Box>
                        );
                    }

                    return (
                        <Box
                            key={`Empty-${index.toString()}`}
                            pb={20}>
                            Missing render template for &quot;{Object.keys(service)}&quot;.
                        </Box>
                    );
                })}
            </Container>
        </SimpleGrid>
    </Box>
);

const HeroTitle = (title: string): JSX.Element => (
    <Title
        className="responsive-heading"
        order={1}
        color="blue.3">
        {title}
    </Title>
);

const fetchKindergesundheitPage = async (): Promise<ModularService> => {
    /* Disable cSpell for UIDs - cspell:disable-next-line */
    const query = Stack.ContentType("modular-service").Entry("blt3ec2bacf7e82d728");

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

export default KindergesundheitPage;
export {getStaticProps};
