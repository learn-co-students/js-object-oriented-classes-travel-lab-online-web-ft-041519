class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
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
        const verticalDist = Math.abs(this.endingLocation["vertical"] - this.beginningLocation["vertical"]);
        const horizDist = Math.abs(this.eastWest.indexOf(this.endingLocation["horizontal"]) - this.eastWest.indexOf(this.beginningLocation["horizontal"]));
        return verticalDist + horizDist;
    }
  estimatedTime(timeofDay){
    let time = this.blocksTravelled()
    if (timeofDay === peak)
      return (time / 2)
    else
    return (time / 3)
  }
}
