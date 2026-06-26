import React, { useEffect } from 'react';

const setMeta = (name, content, attr = 'name') => {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content || '');
};

const SEO = ({ title = 'Food Del', description = 'Delicious meals delivered fast.', url = '/', image = '' }) => {
  useEffect(() => {
    if (title) document.title = title;
    setMeta('description', description);
    setMeta('keywords', 'food, delivery, restaurant, online order');
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:image', image, 'property');
    setMeta('twitter:card', 'summary_large_image');
  }, [title, description, url, image]);

  return null;
};

export default SEO;
