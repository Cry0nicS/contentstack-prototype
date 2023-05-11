import {jsonToHtml} from "@contentstack/json-rte-serializer";
import {Box, SimpleGrid, Title} from "@mantine/core";
import parse from "html-react-parser";
import Head from "next/head";
import {Stack} from "../client/contentstack";
import {Hero} from "../components/hero";
import type {Service} from "../types/generated";
import type {GetStaticProps, InferGetStaticPropsType} from "next";

interface ServiceProps {
    service: Service;
}

const IndexPage: InferGetStaticPropsType<typeof getStaticProps> = ({service}: ServiceProps) => (
    <Box>
        <Head>
            <title>Contentstack prototype - page 1</title>
            <meta
                name="description"
                content="First page demo for Contentstack prototype"
            />
            <meta
                property="og:image"
                content={service.featured_image.url}
                key="ogimage"
            />
        </Head>
        <SimpleGrid
            cols={1}
            verticalSpacing={0}>
            {/* Hero */}
            <Hero
                title={HeroTitle({title: service.title})}
                description={HeroDescription({description: jsonToHtml(service.teaser)})}
                imageUrl={service.featured_image.url}
            />
            <Box>{parse(jsonToHtml(service.body))}</Box>
        </SimpleGrid>
    </Box>
);

const HeroTitle = ({title}: {title: string}): JSX.Element => (
    <Title
        className="responsive-heading"
        order={1}
        color="blue.3">
        {title}
    </Title>
);

const HeroDescription = ({description}: {description: string}): JSX.Element => (
    <Box>{parse(description)}</Box>
);

const fetchKindergesundheitPage = async (): Promise<Service> => {
    /* Disable cSpell for UIDs - cspell:disable-next-line */
    const query = Stack.ContentType("service").Entry("bltdce5b0f7d117c8f1");

    return (await query.includeReferenceContentTypeUID().toJSON().fetch()) as Service;
};

const getStaticProps: GetStaticProps = async () => {
    const response = await fetchKindergesundheitPage();

    return {
        props: {
            service: response
        }
    };
};

export default IndexPage;
export {getStaticProps};
