// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url, ANALYTICS_GOOGLE_ID) => {
  window.gtag('config', ANALYTICS_GOOGLE_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
