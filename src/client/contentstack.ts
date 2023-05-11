import Contentstack from "contentstack";
import {from} from "env-var";

// Necessary due to how NextJs handles process.env.
// Read more: https://github.com/evanshortiss/env-var/issues/162.
const envVars = from({
    CONTENTSTACK_API_KEY: process.env.CONTENTSTACK_API_KEY,
    CONTENTSTACK_DELIVERY_TOKEN: process.env.CONTENTSTACK_DELIVERY_TOKEN,
    CONTENTSTACK_ENVIRONMENT: process.env.CONTENTSTACK_ENVIRONMENT,
    CONTENTSTACK_LIVE_PREVIEW: process.env.CONTENTSTACK_LIVE_PREVIEW
});

const Stack = Contentstack.Stack({
    api_key: envVars.get("CONTENTSTACK_API_KEY").required().asString(),
    delivery_token: envVars.get("CONTENTSTACK_DELIVERY_TOKEN").required().asString(),
    environment: envVars.get("CONTENTSTACK_ENVIRONMENT").required().asString()
});

export {Stack};
