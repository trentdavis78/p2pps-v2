module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.locals.metaTags = {
      title: "Process Server in Austin, TX",
      description: "Pole to Pole Process Servers, LLC is a full service process serving company located in Austin, TX",
      keywords: "process server austin, process server texas, legal services austin"
    };
    res.render('index');
  });

  app.get("/about-us", function (req, res) {
    res.locals.metaTags = {
      title: "About Pole to Pole Process Servers, LLC",
      description: "Pole to Pole Process Servers, LLC is a full service process serving company located in Austin, TX",
      keywords: "process server austin, process server texas, legal services austin"
    };
    res.render("about-us");
  });

  app.get("/service-of-process", function (req, res) {
    res.locals.metaTags = {
      title: "About Pole to Pole Process Servers, LLC",
      description: "Pole to Pole Process Servers, LLC is a full service process serving company located in Austin, TX",
      keywords: "process server austin, process server texas, legal services austin"
    };
    res.render("service-of-process");
  });
  app.get("/other-services", function (req, res) {
    res.locals.metaTags = {
      title: "About Pole to Pole Process Servers, LLC",
      description: "Pole to Pole Process Servers, LLC is a full service process serving company located in Austin, TX",
      keywords: "process server austin, process server texas, legal services austin"
    };
    res.render("other-services");
  });
  app.get("/contact-us", function (req, res) {
    res.locals.metaTags = {
      title: "About Pole to Pole Process Servers, LLC",
      description: "Pole to Pole Process Servers, LLC is a full service process serving company located in Austin, TX",
      keywords: "process server austin, process server texas, legal services austin"
    };
    res.render("contact-us");
  });
};