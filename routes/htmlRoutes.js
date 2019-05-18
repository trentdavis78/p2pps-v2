module.exports = function (app) {
  // Load index page
  
  app.get("/", function (req, res) {
    res.locals.metaTags = {
      title: "Process Server in Austin, TX",
      description: "Pole to Pole Process Servers, LLC is a full service process serving company located in Austin, TX",
      keywords: "process server austin, process server texas, legal services austin"
    };
    if(req.query.lang === "en") {
      res.render('index');
    } else if(req.query.lang === "es") {
      res.render('es-index');
    } else {
      res.render('index');
    } 
  });

  app.get("/about-us", function (req, res) {
    res.locals.metaTags = {
      title: "About Pole to Pole Process Servers, LLC",
      description: "Pole to Pole Process Servers, LLC is a full service process serving company located in Austin, TX",
      keywords: "process server austin, process server texas, legal services austin"
    };
    if(req.query.lang === "en") {
      res.render('about-us');
    } else if(req.query.lang === "es") {
      res.render('es-about-us');
    } else {
      res.render('about-us');
    } 
  });

  app.get("/service-of-process", function (req, res) {
    res.locals.metaTags = {
      title: "About Pole to Pole Process Servers, LLC",
      description: "Pole to Pole Process Servers, LLC is a full service process serving company located in Austin, TX",
      keywords: "process server austin, process server texas, legal services austin"
    };
    if(req.query.lang === "en") {
      res.render('service-of-process');
    } else if(req.query.lang === "es") {
      res.render('es-service-of-process');
    } else {
      res.render('service-of-process');
    } 
  });
  app.get("/other-services", function (req, res) {
    res.locals.metaTags = {
      title: "About Pole to Pole Process Servers, LLC",
      description: "Pole to Pole Process Servers, LLC is a full service process serving company located in Austin, TX",
      keywords: "process server austin, process server texas, legal services austin"
    };
    if(req.query.lang === "en") {
      res.render('other-services');
    } else if(req.query.lang === "es") {
      res.render('es-other-services');
    } else {
      res.render('other-services');
    } 
  });
  app.get("/contact-us", function (req, res) {
    res.locals.metaTags = {
      title: "About Pole to Pole Process Servers, LLC",
      description: "Pole to Pole Process Servers, LLC is a full service process serving company located in Austin, TX",
      keywords: "process server austin, process server texas, legal services austin"
    };
    if(req.query.lang === "en") {
      res.render('contact-us');
    } else if(req.query.lang === "es") {
      res.render('es-contact-us');
    } else {
      res.render('contact-us');
    } 
  });
};