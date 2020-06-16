class Graduate {
    constructor(ctx, name, img_url) {
        this.ctx = ctx
        this.name = name
        this.img_url = new Image()
        this.img_url.src = img_url
        this.canvas = document.querySelector("canvas")
    }

    drawGraduate(ceremony, i, startingPosition, jumpHeight) {
        let spriteSize = [270, 270]
        let runningSprites = [[340, 270], [640, 270], [940, 270]];
        // let dashSprites = [[350, 250], [400, 250], [450, 250]];
        let jumpSprite = [0, 550]

        this.ctx.clearRect(0, 0, 1000, 1000)

        this.ctx.drawImage(ceremony.stage, 0, 0, this.canvas.width, 600);
        this.ctx.drawImage(ceremony.audienceChairs, 0, 600, this.canvas.width, 70)
        this.ctx.drawImage(ceremony.audienceChairs, 0, 670, this.canvas.width, 70)

        this.scaleGraduateImg();
        if (startingPosition[0] >= 600 && startingPosition[0] <= 810) {
            if (startingPosition[0] <= 810) {
                jumpHeight[0] = jumpHeight[0] + 10;
            } else {
                jumpHeight[0] = jumpHeight[0] - 10;
            }

            this.ctx.drawImage(ceremony.bearSpriteSheet,
                // runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],
                jumpSprite[0], jumpSprite[1] - 20,
                spriteSize[0], spriteSize[1],
                startingPosition[0], startingPosition[1] - jumpHeight,
                80, 80)
        } else {
            this.ctx.drawImage(ceremony.bearSpriteSheet,
                runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],
                spriteSize[0], spriteSize[1],
                startingPosition[0], startingPosition[1],
                80, 80)
        }


        if (startingPosition[0] < 750) {
            this.ctx.drawImage(ceremony.trophy, 720, 300, 50, 80); //draw diploma
        }

        if (startingPosition[0] < 1200) {
            ceremony.sound.play();
        } else if (startingPosition[0] === 1200) {
            ceremony.sound.pause()
            ceremony.sound.currentTime = 0
        }
    }

    moveAcrossScreen(ceremony, button) {
        clearInterval(ceremony.interval);
        let startingPosition = [80, 445]
        let jumpSprite = [300, 100] //might get to use this later
        let studentName = document.querySelector("#student")
        studentName.innerHTML = this.name
        let i = 0;
        let jumpHeight = [0];

        let interval = setInterval(() => {
            startingPosition[0] += 10
            i++
            this.drawGraduate(ceremony, i, startingPosition, jumpHeight)

            if (startingPosition[0] >= 1270) {
                clearInterval(interval)
                this.ctx.clearRect(0, 0, 1000, 1000)
                ceremony.constructStage()
                button.disabled = false
                studentName.innerHTML = ""
            }
        }, 10)
    }

    scaleGraduateImg() {
        let scale = Math.max(450 / this.img_url.width, 350 / this.img_url.height);
        let x = 750 - ((this.img_url.width / 2) * scale);
        let y = 350 - ((this.img_url.height / 2) * scale);
        this.ctx.drawImage(this.img_url, x, y, this.img_url.width * scale, this.img_url.height * scale);
    }

    jumpAndGrabDiploma(ceremony, i, startingPosition) {

    }
}

export { Graduate };