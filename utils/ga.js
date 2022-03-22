export const pageview = (url) => {
  window.gtag("config", 'G-PX8ZB89E9G', {
    page_path: url,
  });
};

export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
