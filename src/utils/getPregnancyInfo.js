const fs = require('fs')
const path = require('path')

module.exports = {
  getWeekInfo: () => {
      const pregnancyData = JSON.parse(fs.readFileSync(path.resolve(__dirname + `/../../assets/grossesse.json`), 'utf-8'))
      const conception = new Date('December 27, 2018');
      const now = new Date(Date.now());
      const diff = now - conception;
      const diffWeeks = Math.ceil(diff / (1000 * 60 * 60 * 24 * 7));
      return pregnancyData[diffWeeks - 1];
  }
}
