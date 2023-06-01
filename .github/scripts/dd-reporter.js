// import { client, v2 } from "@datadog/datadog-api-client";

module.exports = (metric) => {
  const { name, value, tags } = metric;

  // const configuration = client.createConfiguration();
  // const apiInstance = new v2.MetricsApi(configuration);
  const params = {
    body: {
      series: [
        {
          // metric: "cwv.nightly.largestContentfulPaint",
          metric: name,
          type: 0,
          points: [
            {
              timestamp: Math.round(new Date().getTime() / 1000),
              value,
            },
          ],
          resources: [
            {
              name: "wpt",
              type: "host",
            },
          ],
          tags,
        },
      ],
    },
  };

  console.log({ metric });
  // apiInstance
  //   .submitMetrics(params)
  //   .then((data) => {
  //     console.log(
  //       "API called successfully. Returned data: " + JSON.stringify(data)
  //     );
  //   })
  //   .catch((error) => console.error(error));
};
