module objects {
  console.log("Enemy loaded");

  export class Cyborg extends objects.GameObject {
    // private instance variables
    private pattern:number = 0;
    private interval:number = 0;
    // public properties
    private _lives:number;


    get Lives():number {
    return this.x;
    
    }
 

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager, "cyborg");
      this.Start();
    }

    public Start():void {
      this.Reset();
    }
    public Update():void {
      this.Move();
      this.CheckBounds();
    }

    public Reset():void {
      this.x = Math.floor((Math.random() * 100)) + 1300;
       
      this.y = Math.floor(Math.random() * Math.floor(this.height)) + 80;
      this._dx = Math.floor((Math.random() * 4) - 2);
      
      this._dy = Math.floor((Math.random() * 5) + 5);
    
    }

    // move the object to some new location
    public Move():void {
      this.x -= this._dx + 8;
      if (this.interval % 5 == 0){
        this.y -= (this._dy  - Math.floor(Math.random() * 10)) - 3;


      }
      else{
        this.y += (this._dy  - Math.floor(Math.random() * 10));

      }
   
    
    }

    // check to see if some boundary has been passed
    public CheckBounds():void {
      // check lower bounds
      if(this.y >= 480 + this.height) {
        this.Reset(); 

      }

      if(this.x <= 0 + this.width) {
        this.Reset();
      }

      
    }
  }
}