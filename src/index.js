import { Graduate } from "./graduate"
import Ceremony from "./ceremony" //there is no reason that these two imports are different. I was messing around with how you can import files
import students from  "./students/berkley-gifties.js";

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("canvas")
    let nextStudentButton = document.getElementById("next-student")
    let ctx = canvas.getContext("2d")
    let ol1 = document.getElementById("ol1")
    let ol2 = document.getElementById("ol2")
    let goBearsSound = document.getElementById("go-bears");
    let submitButton = document.querySelector("#current-student-button")
    
    //creating graduate instances
    let graduates = [] 
    students.forEach((student) => {
        let graduate = new Graduate(ctx,student.name,student.imageUrl)
        graduates.push(graduate)
    })

    let mid = Math.floor(graduates.length/2)

    //adding to list that appears on sides of stage
    // for (let i = 0; i < graduates.length;i++) {
    //     let listItem = document.createElement("li")
    //     listItem.textContent = graduates[i].name
    //     ol1.appendChild(listItem)
    // }

    // for (let i = 0; i < graduates.length;i++) {
    //     let listItem = document.createElement("li")
    //     listItem.textContent = graduates[i].name
    //     ol2.appendChild(listItem)
    // }

    //creating ceremony
    let ceremony = new Ceremony(ctx, graduates)
    ceremony.sound = goBearsSound; // give sound to ceremony instance

    submitButton.addEventListener("click", () => {
        let input = document.querySelector("input");
        ceremony.currentStudent = parseInt(input.value) - 1
    })

    ceremony.constructStage()


    nextStudentButton.addEventListener("click", (e) => {
        ceremony.nextStudentMoves(e.target)
    })


})
