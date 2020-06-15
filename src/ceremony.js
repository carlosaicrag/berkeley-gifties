class Ceremony {
    constructor(ctx, graduates, currentStudent = 0) {
        this.ctx = ctx;
        this.graduates = graduates;
        this.currentStudent = currentStudent;
        this.bearSpriteSheet = new Image();
        this.stage = new Image();
        this.audienceChairs = new Image();
        this.trophy = new Image();
        this.aalogo = new Image();
        this.canvas = document.querySelector("canvas")

        this.bearSpriteSheet.src = "./dist/assets/PixelArt.png";
        this.stage.src = './dist/assets/gifties-stage.png';
        this.audienceChairs.src = "./dist/assets/theatre_chairs.png";
        this.trophy.src = "./dist/assets/trophy.png";
        // this.aalogo.src = "./dist/assets/logo.png";
    }

    constructStage() {
        let waitingSprite = [40, 10];
        // let waitingSprite = [0, 550];
        let spriteSize = [270, 270]

        this.interval = setInterval(() => {
            this.ctx.drawImage(this.stage, 0, 0, this.canvas.width, 600);
            this.ctx.drawImage(this.audienceChairs,0, 600, this.canvas.width, 70)
            this.ctx.drawImage(this.audienceChairs,0, 670, this.canvas.width, 70)
            // this.ctx.drawImage(this.audienceChairs,0, 620, 1000, 70)
            this.ctx.drawImage(this.bearSpriteSheet,
                waitingSprite[0], waitingSprite[1],
                spriteSize[0], spriteSize[1],
                80, 445,
                // spriteSize[0], spriteSize[1])
                80, 80)
                // clearInterval(this.interval)
        },100)
    }

    nextStudentMoves(button) {
        button.disabled = true
        this.graduates[this.currentStudent].moveAcrossScreen(this, button)
        this.currentStudent += 1
    }


}

export default Ceremony