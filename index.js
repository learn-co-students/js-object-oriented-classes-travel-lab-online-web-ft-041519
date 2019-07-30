
class Driver {
  constructor(name, startDate) {
  this.name = name
  this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(start){
        return start - this.startDate.getFullYear();
    }
}


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
    this.eastWest = [
          '1st Avenue',
          '2nd Avenue',
          '3rd Avenue',
          'Lexington Avenue',
          'Park',
          'Madison Avenue',
          '5th Avenue'
        ];
  }

  blocksTravelled() {
    const vert = Math.abs(this.endingLocation["vertical"] - this.beginningLocation["vertical"])
    const horiz = Math.abs(this.eastWest.indexOf(this.endingLocation["horizontal"]) - this.eastWest.indexOf(this.beginningLocation["horizontal"]))
    return vert + horiz;
  }
  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else{
      return this.blocksTravelled() / 3;
    }
  }
}
