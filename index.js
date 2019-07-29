class Driver{
    constructor(name, date){
        this.name = name
        this.date = date
    }

    startDate(){
        return new Date(this.date)
    }

    yearsExperienceFromBeginningOf(endDate){
        console.log(startDate())
        // return endDate - this.startDate().year
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

  let begArr
  let endArr

class Route{
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }

    blocksTraveled(){
        begArr = beginningLocation.split(" and ")
        endArr = endingLocation.split(" and ")
        console.log(begArr)
    console.log(endArr)
    }

    estimatedTime(){

    }    

}