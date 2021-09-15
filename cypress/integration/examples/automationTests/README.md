# Approach to testing the application :thinking:
- User story: As a user I can navigate and interact with each menu and submenu available in the application
- Test Name: automationTest001
- Description:
    - Navigate to http://localhost:4200/
    - Expand each menu option
    - Click on each submenu
    - Verify correct url
    - Verify all title are correct for each menu / submenu according to the information from html file
    - Verify each page has both Created by and social media information at the footer section
- Precondition: Deploy nxg-admin app https://github.com/akveo/ngx-admin
- Test Data: n/a
- Priority: High
- Expected Results: 
    - All url's are correct
    - All title match the text found in the html
    - Created by and Social media feed icons located on the footer section for each individual page
- Environment Info: Windows 10 Pro
- Tester Name: DRamos

## Layout section testing

- When you first land on the stepper section of the application Prev button should be disabled unless user click on Next or Second Step icon
- Next button should be disabled when first three steps have been check marked
- As we click through each step we assert the header changes accordingly "Step content #1... #2... #3... and #4
- Through each step I was checking each individual index to make sure a check mark was visible using: `cy.wrap($option).find('[data-name="checkmark"]').eq(0).should('be.visible')`
- This created a problem where if we had 100 check marks we'd be checking them in such way:
  `cy.wrap($option).find('[data-name="checkmark"]').eq(0).should('be.visible') cy.wrap($option).find('[data-name="checkmark"]').eq(1).should('be.visible') cy.wrap($option).find('[data-name="checkmark"]').eq(2).should('be.visible')`
- Instead a better approach is to check the length of the array and make an assertion on that
  `cy.wrap($option).find('[data-name="checkmark"]').should('have.length', '3')`

<img src= "..\..\..\images\Snip - ngx-cypress-test - Google Chrome.png">

- What would be best testing approach to account for user interacting with stepper buttons as well as using prev and next buttons?  At this point I can only think of testing the application using stepper buttons first, then reload the application and test only using the prev / next buttons but in real life a user wouldn't be using the application that way.