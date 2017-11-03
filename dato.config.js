module.exports = (dato, root, i18n) => {
  // console.log(dato.manuals)
  root.directory("content/manuals", (articlesDir) => {
        dato.manuals.forEach((article) => {
          // console.log(article.relatedManual);
          articlesDir.createPost(
            `${article.url}.md`, "yaml", {
              frontmatter: {
                title: article.manualTitle,
                previewpdf: article.previewPdf.toMap(),
                manualspec: article.manualSpec.toMap(),
                imagecover: article.imageCover,
                carspec: article.manualSpec.toMap(),
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
                type: "product",
                manual: article.manualMake,
                pccon: article.blockProCon.pcCon,
                pcpro: article.blockProCon.pcPro,
                partialaddtocart: article.blockAddToCart.addToCartItem,
                series: article.manualSerie,
                subseries: article.manualSubSerie,
                platform: article.manualPlatform,
                bodytype: article.manualBodyType,
                fueltype: article.manualFuelType,
                downloadspecs: article.downloadSpecs.toMap(),
                relatedmanual: article.relatedManual.toMap()
              },
              content: article.manualDescription
            }
          );
        });
  });

  // root.directory("content/pages", (articlesDir) => {
  //       dato.pages.forEach((article, i) => {
  //         articlesDir.createPost(
  //           `${article.slugurl}.md`, "yaml", {
  //             frontmatter: {
  //               title: article.pageTitle,
  //               weight: i,
  //               type: "pages",
  //               id: article.slugurl
  //             },
  //             content: article.pageDescription
  //           }
  //         );
  //   });
  // });

  // console.log(dato.headerMenu);
  root.directory("content/headermenu", (articlesDir) => {
    articlesDir.createPost(
      `headermenu.md`, "yaml", {
        frontmatter: {
          title: "Header Menu",
          type: "sub-menu",
          id: "sub-menu",
          menuitem: dato.headerMenu.menu.toMap()
        },
        content: "Header Menu"
      });
  });

  // console.log(dato.menuTops);
  root.directory("content/", (articlesDir) => {
        dato.menuTops.forEach((article, i) => {
          // console.log(article.topMenuLink);
          articlesDir.createPost(
            `${article.slugUrl}.md`, "yaml", {
              frontmatter: {
                title: article.topMenuName,
                weight: i,
                type: "topmenu",
                id: article.slugUrl,
                pageicon: article.topMenuLink.pageIcon,
                slugurl: article.topMenuLink.slugurl,
                description: article.topMenuLink.pageDescription,
                pagetitle: article.topMenuLink.pageTitle,
                menu: true
              },
              content: article.topMenuName
            }
          );
    });
  });
  // console.log(dato.footer.footerDescription);
  root.directory("content/", (articlesDir) => {
    articlesDir.createPost(
      `footer.md`, "yaml", {
        frontmatter: {
          title: "footer",
          type: "footer",
          id: "footer",
          menuitem: dato.footer.footerDescription
        },
        content: dato.footer.footerDescription
      });
  });

};
