/**
 * Submit metrics returns "Payload accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiSubmitMetricsRequest = {
  body: {
    series: [
      {
        metric: "cwv.nightly.largestContentfulPaint",
        type: 0,
        points: [
          {
            timestamp: Math.round(new Date().getTime() / 1000),
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
  .then((data: v2.IntakePayloadAccepted) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
