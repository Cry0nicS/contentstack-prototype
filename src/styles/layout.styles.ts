import {createStyles} from "@mantine/core";
import type {MantineTheme, MantineThemeOverride} from "@mantine/core";

const themeConfig = (): MantineThemeOverride => ({
    breakpoints: {
        sm: "320",
        xl: "1200"
    },
    colors: {
        blue: [
            "#031C2F",
            "#002B49",
            "#004679",
            "#005491",
            "#216CA3",
            "#4D93C6",
            "#83B5D9",
            "#A7CCE8",
            "#D1E4F2",
            "#E6EFFB"
        ],
        red: [
            "#2C020C",
            "#3C000F",
            "#9B0329",
            "#E4013A",
            "#F34671",
            "#F2698B",
            "#FB8BA7",
            "#FFB5C8",
            "#FFCFDB",
            "#FFEFF3"
        ]
    },
    components: {
        Button: {
            defaultProps: {radius: 0}
        }
    },
    fontFamily: "Inter, sans-serif",
    fontSizes: {
        xs: "10",
        sm: "12",
        md: "14",
        lg: "16",
        xl: "18"
    },
    globalStyles: (theme: MantineTheme) => ({
        "body": {
            color: "#343A40"
        },
        ".responsive-heading": {
            [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
                "h1&": {
                    fontSize: 40
                },
                "h2&": {
                    fontSize: 32
                },
                "h3&": {
                    fontSize: 20
                },
                "h4&": {
                    fontSize: 18
                }
            },
            [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
                "h1&": {
                    fontSize: 60
                },
                "h2&": {
                    fontSize: 40
                },
                "h3&": {
                    fontSize: 32
                },
                "h4&": {
                    fontSize: 18
                }
            }
        },
        ".responsive-text": {
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                fontSize: 16
            },
            [`@media (min-width: ${theme.breakpoints.md}px) and (max-width: ${theme.breakpoints.xl}px)`]:
                {
                    fontSize: 18
                },
            [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
                fontSize: 22
            }
        }
    }),
    headings: {
        fontFamily: "Absolut Standard, sans-serif",
        fontWeight: 700,
        sizes: {
            h1: {fontSize: "56"},
            h2: {fontSize: "40"},
            h3: {fontSize: "32"},
            h4: {fontSize: "24"}
        }
    },
    primaryColor: "red",
    primaryShade: 3
});

export default createStyles((theme) => ({
    header: {
        maxWidth: 1440,
        margin: "0 auto",
        border: "none",
        height: 74,
        maxHeight: 74,
        justifyContent: "center",

        [theme.fn.largerThan("xl")]: {
            justifyContent: "start",
            paddingLeft: 80,
            paddingRight: 80,
            height: 92,
            maxHeight: 92
        }
    },
    link: {
        color: "#fff",
        textTransform: "none",
        textDecoration: "none",
        justifyContent: "start"
    },
    logo: {
        justifyContent: "center"
    },
    footer: {
        padding: 0,
        backgroundColor: "#005491",
        color: "#fff",
        position: "relative",
        h2: {
            color: "#fff"
        },
        maxWidth: 1440,
        margin: "0 auto"
    },
    verticalCenter: {
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)"
    }
}));

export {themeConfig};
