Live site: https://carlosaicrag.github.io/virtual_graduation/

## To add cohort:
- Clone down repo
- Go to a/A name game to get student data file (remove dismissed students)
    - Repo link: https://github.com/appacademy/aa-picture-game
    - If the students in the existing student data file are not from the correct cohort, follow the directions on the README for the `aa-picture-game` repo to get the data for the correct stoods
- Add `<cohort-start-date>.js` file to the `src/students` folder (export as array of student POJOs)
- Change the import in `index.js` to use the new file for the student data
- Update the `h1` in the `index.html` file with the new cohort's title
- Don't forget to webpack it! run `npm run build`
- Push it up! (Wait a few minutes for github pages)
- Have fun!