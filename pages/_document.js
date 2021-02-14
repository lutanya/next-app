import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <style jsx global>{`
              body{
                background-color: #555555;
                margin: 0px;
                font-family: system-ui;
              }
            `}
          </style>
          <Main />
          {/* Here we will mount our modal portal */}
          <div id="modal-root" />
          <NextScript />
        </body>
      </Html>
    )
  }
}