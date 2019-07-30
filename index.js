class Driver{
    constructor(name, date){
        this.name = name
        this.date = date
    }

    startDate(){
        return new Date(this.date)
    }

    yearsExperienceFromBeginningOf(endDate){
        return endDate - this.startDate().getFullYear()
    }
}

const eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ]


class Route{
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }

    blocksTravelled(){
        let vertical = this.endingLocation.vertical - this.beginningLocation.vertical
        let horizontal = (eastWest).indexOf(this.endingLocation.horizontal) - (eastWest).indexOf(this.beginningLocation.horizontal)
        return vertical + horizontal
    }

    estimatedTime(peak){
        let time
        if (peak === true) {
            time = this.blocksTravelled() / 2
        } else {
            time = this.blocksTravelled() / 3
        }
        return time
    }    

}