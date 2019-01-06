# A Content Management System for PDA submissions
Full-stack application to handle Professional Development Award (PDA) evidence submission.
Built using Java Spring and React, with functionality for image upload and PDF export.

## How To Run The Code

To run this application, you will need to first start the Spring back-end application.
1. Install dependencies listed in the pom.xml file
2. Find and run the following file: src/main/java/com/example/PDATool/PdaToolApplication
Now in the front-end, run the following commands in Terminal:
3. npm install (to install dependencies)
4. npm run start (to run the node server)
5. Finally direct your browser to http://localhost:3000/api/modules

- Note: The uploading of images requires a Cloudinary account and key, for cloud-based image management. Add your key to the src/components/ImageDrop.js file for full functionality. (Not essential for viewing the rest of the app's capabilities)

## THE BRIEF

The project idea developed from a common frustration experienced by any CodeClan student working toward the SQA Personal Development Award.

Throughout the 16 week course, such a student is required to submit text and image evidence of their development. The current system involves accumulating this evidence in an increasingly lengthy Pages document. There was an opportunity to develop a full-stack application which would improve upon this process for future students.

Limitations of the current system:
1. Reviewing and editing an increasingly lengthy document across many months is laborious and inefficient.
2. The only way to identify which sections are incomplete, in progress or complete is to scan the entire document.
3. No way to submit sections at a time, leaving past work susceptible to accidental editing/deletion.
4. Feedback on student progress requires an in person review of the entire document with support staff.

These limitations and information gathered from users led to the project outline, as follows:
```
BRIEF

You have been approached by a private Academic institution dealing with an externally
accredited professional award. Your task is to build an evidence submission
app to help users collate their documentation in line with the syllabus.

MVP

Develop a full-stack content management system to handle PDA evidence submission.
A student should be able to:
  √ See a summary list of all tasks (which we called modules).
  √ See status of modules in list view (incomplete, in progress, complete).
  √ Click on a particular module to view it in more detail.
  √ Add or edit text evidence for a particular module.
  √ Add or remove a link to an image evidence for a particular module.
  √ Export all modules and corresponding evidence to PDF for submission.

EXTENSIONS

A student should be able to:
  X See the list of all modules ordered by status with completed ones lowest in list.
  X Change the status of a module.
  √ Upload an image from their device.
  X Add multiple images as evidence for one module.
  X See their overall progress, eg. percentage completed.
  X Navigate to a 'Help' section for guidance on fulfilling module requirements.
  X Functionality for communication/feedback from an administrator, eg. sign off a completed module.

OUT OF SCOPE

  X Admin capabilities for assessing progress and managing multiple students and cohorts.

```

## BUILDING THE APP

This project provided a way to consolidate and advance my knowledge of numerous concepts learned through the entire Software Development training.
The app was built in a group of 3 over 5 days. Playing an integral role in both the back-end and front-end, I learned a great deal and became more skilled and comfortable using complex frameworks and external libraries.

A few interesting learning points:
- Using View Models and custom queries in Spring to transfer custom data sets from the database to the React front end.
- Harnessing external tools to quickly add functionality for image upload and PDF export.
- Using React Router to improve navigation of the app and the user's experience.
- Working in an unfamiliar team, under pressure and time constraints, pushed me to find creative ways to communicate and adapt to changing needs in order to meet the deadline.

Many thanks to my co-collaborators Kris McElhinney and Graham Stein.

## FUTURE DEVELOPMENT

Next steps I see for this project:
1. Refactoring.
2. Show student's overall progress, with milestones to aid time management.
3. Functionality to change module status and sort, eg. view all modules in progress, hide all complete.
4. Ability to upload multiple images.

I am currently in conversation with CodeClan about further development of this app to assist future students in handling their PDA evidence submission.

## I hope you enjoy my work and I welcome your feedback.
