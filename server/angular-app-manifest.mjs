
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Ecommerce/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Ecommerce"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 506, hash: 'e65b41a47f49067ebfff19e1192905aad6eafbf8c63b2ec1f565987967501f57', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: 'e240a4e4e85632198a300471c6efb40a8d0a3687ec3840bb542e00d145481513', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20851, hash: '36d95c62a28c67d7ef5192273a7a122181647f63deb0638aa09e47a09156186e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
