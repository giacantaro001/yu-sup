# YÜ SUP — GitHub Pages website

## Upload and publish (no build or installation required)

1. Extract this ZIP on your computer. Do not upload the ZIP itself.
2. Create a new GitHub repository named `yu-sup`. Choose Public if using GitHub Free.
3. Open the repository, choose Add file → Upload files (or the upload link in an empty repository).
4. Upload the contents of this extracted folder, including the entire assets folder. index.html must appear at the repository root, not inside another yu-sup-github-pages folder. Commit the files to main.
5. Open Settings → Pages. Under Build and deployment choose Deploy from a branch.
6. Select main and /(root), then Save.
7. Wait for deployment to complete. Settings → Pages will show the website link, normally https://YOUR-USERNAME.github.io/yu-sup/.

The optional .nojekyll file skips Jekyll processing. If your file picker hides it, this simple site also works without it.

## What is included

- index.html: page content and Italian translations
- style.css: layout, typography and relative asset paths
- app.js: menu and language switch
- assets/: local images and font
- .nojekyll: static hosting marker

Relative paths work at a GitHub project URL or a custom-domain root. There are no API keys, server dependencies or payment integrations. Email and WhatsApp buttons open the existing contact channels; they do not send messages automatically.

## Editing

Edit text in index.html; data-it attributes contain Italian text. Edit style.css for design changes. Commit changes to main to republish. The language switch translates the main content; some decorative slogans remain in English.

## Domain

First check the GitHub Pages address. Connecting yusup.co.uk is a separate step involving Pages custom-domain settings and DNS. No domain settings have been changed and no CNAME file has been added. Keep existing email DNS records when making future changes.

## Scope and checks

This is a static marketing website, not a rental booking/payment system. The source version was visually checked on desktop, and its language switch and internal links were tested. The export was checked for missing local assets and root-relative paths. This ZIP has not been deployed to your GitHub account.

GitHub guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
