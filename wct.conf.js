module.exports = {
  suites: ['./www/elements/apps-main/test/',
           './www/elements/c2m-video-playlist/test/'],
  sauce: {
    browsers: [
      {
        "browserName": "internet explorer",
        "platform":    "Windows 8.1",
        "version":     "11"
      },
      {
        "browserName": "internet explorer",
        "platform":    "Windows 7",
        "version":     "11"
      },

      {
        "browserName": "chrome",
        "platform":    "Windows 8.1",
        "version":     "beta"
      },
      {
        "browserName": "chrome",
        "platform":    "Windows 8.1",
        "version":     ""
      },
      {
        "browserName": "chrome",
        "platform":    "OS X 10.10",
        "version":     ""
      },
      {
        "browserName": "chrome",
        "platform":    "Linux",
        "version":     ""
      },

      {
        "browserName": "firefox",
        "platform":    "Windows 8.1",
        "version":     ""
      },
      {
        "browserName": "firefox",
        "platform":    "OS X 10.10",
        "version":     ""
      },
      {
        "browserName": "firefox",
        "platform":    "Linux",
        "version":     ""
      },

      {
        "browserName": "safari",
        "platform":    "OS X 10.9",
        "version":     "7"
      }
    ]
  }
};
