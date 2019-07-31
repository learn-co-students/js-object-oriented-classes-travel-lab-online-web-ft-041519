let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ];

class Driver {
    constructor(name, startDate) {
        this.name = name
        this.startDate = new Date(startDate);
    };

    yearsExperienceFromBeginningOf(year) {
        let currentYear = new Date(year, 1, 1);
        let yearsExp = (currentYear - this.startDate) / (1000*60*60*24*365);
        return parseInt(yearsExp);
    };
};

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    };

    blocksTravelled() {
        const verticalBlocks = (this.beginningLocation.vertical - this.endingLocation.vertical);
        const horizontalBlocks = (eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
        return Math.abs(verticalBlocks) + Math.abs(horizontalBlocks);
    };

    estimatedTime(peak) {
        if(peak) {
            return this.blocksTravelled() / 2;
        } else {
            return this.blocksTravelled() / 3;
        };
    };
};