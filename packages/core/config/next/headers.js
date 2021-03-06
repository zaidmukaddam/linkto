export default [
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
   */
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
   */
  {
    key: "Strict-Transport-Security",
    // 'max-age' of 2 years
    value: "max-age=63072000; includeSubDomains; preload",
  },
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
   */
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
   */
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  /**
   * @see https://scotthelme.co.uk/a-new-security-header-referrer-policy/
   */
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
];
