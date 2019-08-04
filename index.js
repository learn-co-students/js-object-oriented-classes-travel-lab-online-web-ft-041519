class Driver {
    constructor(name, date) {
      this.name = name;
      this.date = date;
    }

    yearsExperienceFromBeginningOf(current) {
        let dates = this.date; 
        return current - dates.slice(-4) ; 
    }
   
  }

class Route {
    constructor(beglocation, endinglocation) {
        this.beglocation = beglocation;
        this.endinglocation = endinglocation;
      } 

      blocksTravelled () {
        
        let eastWest = [
            '1st Avenue',
            '2nd Avenue',
            '3rd Avenue',
            'Lexington Avenue',
            'Park',
            'Madison Avenue',
            '5th Avenue'
          ];
        
        const horizontal_distance = Math.abs(eastWest.indexOf(this.beglocation.horizontal) - eastWest.indexOf(this.endinglocation.horizontal));  
        const vertical_distance = Math.abs(this.beglocation.vertical - this.endinglocation.vertical);    
        
        return horizontal_distance + vertical_distance; 

      }

      estimatedTime (input) {
          if (input === true) 
            return this.blocksTravelled() / 2
          else 
            return this.blocksTravelled() / 3 
      }
      
} 