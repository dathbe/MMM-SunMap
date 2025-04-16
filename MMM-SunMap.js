Module.register('MMM-SunMap', {
  // Default module config.
  defaults: {
    updateInterval: 15 * 60, // every 15 minutes
    fadeSpeed: 500,
    maxWidth: 450,
  },

/*   // Define required styles.
  getStyles: function () {
    return ['MMM-MyStandings.css']
  }, */

/*   // Start the module.
  start: function () {
    
  }, */

  firstLoad: function () {

    // Schedule the UI load based on normal interval
    var self = this
    setInterval(function () {
      self.updateDom(this.config.fadeSpeed)
    }, this.config.updateInterval * 1000)
  },


  notificationReceived: function (notification) {
    if (notification === 'DOM_OBJECTS_CREATED') {
      this.firstLoad()
    }
  },
  
  getDom() {
    const self = this
    const wrapper = document.createElement('div')
    wrapper.className = 'SunMapDiv'
    var SunMapImage = new Image()
    SunMapImage.width = this.config.maxWidth
    currTime = new Date()
    //Log.error(currTime.getFullYear())
    SunMapImage.src = `https://www.timeanddate.com/scripts/sunmap.php?iso=${currTime.getFullYear()}${currTime.getMonth()}${currTime.getDate()}T${currTime.getHours()}${currTime.getMinutes()}`
    Log.error(SunMapImage.src)
    wrapper.appendChild(SunMapImage)
    return wrapper
  }
})