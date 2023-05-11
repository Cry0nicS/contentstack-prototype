import {jsonToHtml} from "@contentstack/json-rte-serializer";
import {Accordion, Text} from "@mantine/core";
import parse from "html-react-parser";
import type {Accordion as AccordionProps} from "../types/generated";

const AccordionBlock = (data: AccordionProps): JSX.Element => {
    if (!data.element || data.element.length === 0) {
        return <></>;
    }

    return (
        <Accordion>
            {data.element.map((entry) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const [title, slug, description] = [entry.title, entry.slug, entry.description];

                return (
                    <Accordion.Item
                        key={slug}
                        value={slug}>
                        <Accordion.Control>
                            <Text
                                sx={{
                                    fontSize: 18,
                                    lineHeight: "28px",
                                    fontWeight: 700,
                                    padding: 0
                                }}>
                                {title}
                            </Text>
                        </Accordion.Control>
                        <Accordion.Panel sx={{textAlign: "left"}}>
                            {parse(jsonToHtml(description))}
                        </Accordion.Panel>
                    </Accordion.Item>
                );
            })}
        </Accordion>
    );
};

export {AccordionBlock};
