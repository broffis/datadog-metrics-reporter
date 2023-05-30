"use strict";
/**
 * Submit metrics returns "Payload accepted" response
 */
Object.defineProperty(exports, "__esModule", { value: true });
const datadog_api_client_1 = require("@datadog/datadog-api-client");
const configuration = datadog_api_client_1.client.createConfiguration();
const apiInstance = new datadog_api_client_1.v2.MetricsApi(configuration);
const params = {
    body: {
        series: [
            {
                metric: "cwv.nightly.largestContentfulPaint",
                type: 0,
                points: [
                    {
                        timestamp: Math.round(new Date().getDate() / 1000),
                        value: 10418.11,
                    },
                ],
                resources: [
                    {
                        name: "wpt",
                        type: "host",
                    },
                ],
                tags: [
                    "env:dev",
                    "cwv:proof",
                    "wpt:github",
                    "page:product-summary",
                    "device:mobile",
                ],
            },
        ],
    },
};
apiInstance
    .submitMetrics(params)
    .then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
})
    .catch((error) => console.error(error));
