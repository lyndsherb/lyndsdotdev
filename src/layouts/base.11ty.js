module.exports = (data) => {
    console.log('debug', data);
    const date = new Date();
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>${data.site.title} | ${data.site.subtitle}</title>
                <meta charset="UTF-8"/>
                ${data.site.meta.reduce((acc, meta) => (`${acc}\n<meta name="${meta.name}" content="${meta.content}" />`, ''))}
                <link rel="stylesheet" href="/css/layout.css" />
                <link rel="stylesheet" href="/css/utility.css" />
                <link rel="stylesheet" href="/css/light.css" />
                <link rel="stylesheet" href="/css/dark.css" media="(prefers-color-scheme: dark)" />
                <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32-dark.png" media="(prefers-color-scheme: dark)" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16-dark.png" media="(prefers-color-scheme: dark)" />
            </head>

            <body>
                <header class="page-header">
                    <h1 class="title">
                        <a href="/" class="title-link">${data.site.title}</a>
                    </h1>
                </header>
                <main class="content">
                    ${data.content}
                </main>
                <footer class="page-footer">
                    <p class="no-print">Icons from <a href="https://icomoon.io/app/" target="_blank" rel="noreferrer noopener">IcoMoon</a> and <a href="https://material.io/icons/" target="_blank" rel="noreferrer noopener">Material Design</a>.</p>
                    <p class="no-print">Powered by <a href="https://www.11ty.dev" target="_blank" rel="noopener noreferrer">11ty</a>.</p>
                    <p>&copy; Lyndsey Herbert ${date.getFullYear()}, all rights reserved.</p>
                </footer>
                <div class="no-display">
                </div>
            </body>
        </html>
    `;
}
