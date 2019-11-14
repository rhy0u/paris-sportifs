import React from 'react'

/* eslint-disable react/no-danger */

const Html = ({ user, assets, polyfill = true }) => (
  <html lang="fr">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <div id="root" />
      {polyfill && (
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.fr" />
      )}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.user = ${JSON.stringify(user)}; `
        }}
      />
      <script src={assets.main.js} />
    </body>
  </html>
)

export default Html
