
// export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-L9YFBCXFC1';
export const GA_TRACKING_ID = 'GTM-MMHJWSQ'


// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ( action, label, category, value ) => {
  window.gtag("event", action, {
    event_label: label,
    event_category: category,
    value: value,
  });
};