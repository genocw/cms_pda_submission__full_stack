# A Content Management System for PDA submissions
Group Project to practice using JavaScript/ Java to make a web based Professional Development Award (PDA) Submission application app.

## How To Run The Code

To run this application, you will need to first start the Spring back-end application.
1. Install dependencies in the pom.xml file
2. Find and run the following file: src/main/java/com/example/PDATool/PdaToolApplication
You will first need to run the following commands in Terminal:
3. npm install (to install dependencies)
4. npm run start (to run the node server)

Next direct your browser to http://localhost:3000/api/modules

## THE BRIEF

The project brief developed from an idea.

Every CodeClan student working toward the SQA Personal Development Award is required to submit text and image evidence throughout the training. The current system involves composing a lengthy Pages document, accumulating this evidence. The idea was to develop a full-stack application which would improve upon this process.

Limitations of the current system:
1. Reviewing and editing an increasingly lengthy document across many months is laborious and inefficient.
2. The only way to identify which sections are incomplete, in progress or complete is to scan the entire document.
3. No way to submit sections at a time.
4. Feedback on student progress requires an in person review of the document with support staff.

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
  X Functionality for communication/feedback from an administrator, eg. sign off a completed module.

```
