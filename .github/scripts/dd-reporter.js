// import { client, v2 } from "@datadog/datadog-api-client";

module.exports = ({ core }) => {
  const inputData = core.getInput("data");
  console.log({ inputData });

  // const envData = process.env.data;
  // console.log({ envData });

  // const configuration = client.createConfiguration();
  // const apiInstance = new v2.MetricsApi(configuration);
  // const params = {
  //   body: {
  //     series: [
  //       {
  //         metric: "cwv.nightly.largestContentfulPaint",
  //         type: 0,
  //         points: [
  //           {
  //             timestamp: Math.round(new Date().getTime() / 1000),
  //             value: 10418.11,
  //           },
  //         ],
  //         resources: [
  //           {
  //             name: "wpt",
  //             type: "host",
  //           },
  //         ],
  //         tags: [
  //           "env:dev",
  //           "cwv:proof",
  //           "wpt:github",
  //           "page:product-summary",
  //           "device:mobile",
  //         ],
  //       },
  //     ],
  //   },
  // };
  // apiInstance
  //   .submitMetrics(params)
  //   .then((data) => {
  //     console.log(
  //       "API called successfully. Returned data: " + JSON.stringify(data)
  //     );
  //   })
  //   .catch((error) => console.error(error));
};
