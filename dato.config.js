module.exports = (dato, root, i18n) => {

  root.directory("content/manuals", (articlesDir) => {
    i18n.availableLocales.forEach((locale) => {
      i18n.withLocale(locale, () => {
        dato.manuals.forEach((article) => {
          articlesDir.createPost(
            `${article.url}.${locale}.md`, "yaml", {
              frontmatter: {
                title: article.manualTitle,
                previewpdf: article.previewPdf.toMap(),
                manualspec: article.manualSpec.toMap(),
                imagecover: article.imageCover,
                blockcarspec: article.blockCarSpec.toMap(),
                url: article.url,
                downloadid: article.downloadId,
                sendowlmd: article.sendowlMd,
                manualprice: article.manualPrice,
                isbn: article.isbn,
                sku: article.sku,
                manualtoc: article.manualToc,
                manualcover: article.manualCover,
                manualdescription: article.manualDescription,
                manualyear: article.manualYear,
                gsTitle: article.gsTitle,
                type: "product"
              },
              content: article.manualDescription
            }
          );
        });
      });
    });
  });

  console.log(dato.pages);
  root.directory("content/pages", (articlesDir) => {
    i18n.availableLocales.forEach((locale) => {
      i18n.withLocale(locale, () => {
        dato.pages.forEach((article, i) => {
          articlesDir.createPost(
            `${article.slugurl}.${locale}.md`, "yaml", {
              frontmatter: {
                title: article.pageTitle,
                weight: i,
                type: "pages",
                id: article.slugurl
              },
              content: article.pageDescription
            }
          );
        });
      });
    });
  });

};
