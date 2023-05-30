# datadog-metrics-reporter

Datadog Metrics API Reporter

## About

This is a PoC for sending metrics to datadog from a node script. The final intent is for this data to come from [WebPageTest](https://www.webpagetest.org/) runs that are executed nightly in a github action

This script makes use of the [API Reporter](https://docs.datadoghq.com/api/latest/metrics/#submit-metrics) from Datadog, specifically version 2.

## Use

Before running the script, you'll need your site id, in this instance `us3.datadoghq.com` and an API key which can be created in the datadog ui (just hit cmd+k and search for API Keys)

To run the script, you'll need to run

```
DD_SITE="<your.site.link>" DD_API_KEY="<YOUR_API_KEY>" npm run report"
```

This will send the passed in data to datadog, which can be viewed in the metrics explorer. There is a delay with data being visible in the explorer, typically in range of 2-5 minutes

## Notes

- Make sure you use proper tagging to make sure you can group and filter your data correctly
- [Read the docs](https://docs.datadoghq.com/metrics/) on metrics and maybe take the [tagging best practices](https://learn.datadoghq.com/courses/take/tagging-best-practices/texts/35802134-introduction) course to make sure you're doing it right
