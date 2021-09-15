describe('Suite of tests for nxg demo site',()=>{
    it('Visits the site', ()=>{
        cy.visit('/')
            .url().should('include', '/pages')
    });
    
    it('URL page assertion, header title and social media feed icons exist',()=>{
        cy.get('span.menu-title').contains('Layout').click()
            .invoke('text')
            .should('eq', 'Layout');

        cy.get('span.menu-title').contains('Stepper').click()
            .invoke('text')
            .should('eq', 'Stepper')
            .url().should('include', 'pages/layout/stepper');

        cy.get('span.menu-title').contains('Accordion').click()
            .invoke('text')
            .should('eq', 'Accordion')
            .url().should('include', '/pages/layout/accordion');

       cy.get('nb-layout-footer.fixed')
            .contains('Created with ♥ by ')
            .contains(' 2019');

        cy.get('[class="socials"]').within((social)=>{
            cy.wrap(social).find('[class="ion ion-social-github"]')
            cy.wrap(social).find('[class="ion ion-social-facebook"]')
            cy.wrap(social).find('[class="ion ion-social-twitter"]')
            cy.wrap(social).find('[class="ion ion-social-linkedin"]')
        });

        /*Forms section assertion begin*/
        cy.get('span.menu-title').contains('Forms').click()
            .invoke('text').should('eq', 'Forms');

          cy.get('span.menu-title').contains('Form Layouts').click()
            .invoke('text')
            .should('eq', 'Form Layouts')
            .url().should('include', '/pages/forms/layouts');

          cy.get('span.menu-title').contains('Datepicker').click()
            .invoke('text')
            .should('include', 'Datepicker')
            .url().should('include', '/pages/forms/datepicker');
        /*Forms section assertion end*/
        
        /*Forms Modal & Overlays assertion begin*/
        cy.get('span.menu-title').contains('Modal & Overlays').click()
            .invoke('text')
            .should('eq', 'Modal & Overlays');

        cy.get('span.menu-title').contains('Dialog').click()
            .invoke('text')
            .should('include', 'Dialog')
            .url().should('include', '/pages/modal-overlays/dialog');

        cy.get('span.menu-title').contains('Window').click()
            .invoke('text')
            .should('include', 'Window')
            .url().should('include', '/pages/modal-overlays/window');

        cy.get('span.menu-title').contains('Popover').click()
            .invoke('text')
            .should('include', 'Popover')
            .url().should('include', '/pages/modal-overlays/popover');
    
        cy.get('span.menu-title').contains('Toastr').click()
            .invoke('text')
            .should('include', 'Toastr')
            .url().should('include', '/pages/modal-overlays/toastr');

        cy.get('span.menu-title').contains('Tooltip').click()
            .invoke('text')
            .should('include', 'Tooltip')
            .url().should('include', '/pages/modal-overlays/tooltip');
        /*Forms Modal & Overlays assertion end*/

        /*Forms Extra Components assertion begin*/
        cy.get('span.menu-title').contains('Extra Components').click()
            .invoke('text')
            .should('eq', 'Extra Components');

        cy.get('span.menu-title').contains('Calendar').click()
            .invoke('text')
            .should('eq', 'Calendar')
            .url().should('include', 'pages/extra-components/calendar');
        /*Forms Extra Components assertion end*/
        
        /*Forms Tables & Data assertion begin*/
        cy.get('span.menu-title').contains('Tables & Data').click()
            .invoke('text')
            .should('eq', 'Tables & Data');
        
        cy.get('span.menu-title').contains('Smart Table').click()
            .invoke('text')
            .should('eq', 'Smart Table')
            .url().should('include', 'pages/tables/smart-table');

        cy.get('span.menu-title').contains('Tree Grid').click()
            .invoke('text')
            .should('eq', 'Tree Grid')
            .url().should('include', 'pages/tables/tree-grid');
        /*Forms Tables & Data assertion end*/

        /*Forms Auth assertion begin*/
        cy.get('span.menu-title').contains('Auth').click()
            .invoke('text')
            .should('eq', 'Auth');

        cy.get('span.menu-title').contains('Login').click()
            .invoke('text')
            .should('eq', 'Login')
            .url().should('include', '/auth/login')
            cy.go('back');

        cy.get('span.menu-title').contains('Register').click()
            .invoke('text')
            .should('eq', 'Register')
            .url().should('include', '/auth/register')
            cy.go('back');

        cy.get('span.menu-title').contains('Request Password').click()
            .invoke('text')
            .should('eq', 'Request Password')
            .url().should('include', 'auth/request-password')
            cy.go('back')


        cy.get('span.menu-title').contains('Reset Password').click()
            .invoke('text')
            .should('eq', 'Reset Password')
            .url().should('include', '/auth/reset-password')
            cy.go('back')
        /*Forms Auth assertion end*/
    });

    it.only('Layout section tests',()=>{
        cy.visit('/')
        cy.get('span.menu-title').contains('Layout').click();
        cy.get('span.menu-title').contains('Stepper').click();
        //Horizontal stepper test begin
        cy.get('nb-card-body').eq(0).then($option=>{
            /*First step attempt to click stepper options First, Third and Fourth interface shouldn't allow
            you click either buttons PREV or NEXT*/
            cy.wrap($option).find('.label-index').eq(0).click();
            cy.wrap($option).find('.label-index').eq(2).click();
            cy.wrap($option).find('.label-index').eq(3).click();
                  
            cy.get('button').contains('prev').should('have.class', 'btn-disabled')
            cy.get('button').contains('next').should('not.have.class', 'btn-disabled')

            const log= Cypress.log({
                name: "PREV button state",
                displayName: "Check that PREV button remains disabled unless you move to second step"
            });
            
            //Second step
            cy.wrap($option).find('.label-index').eq(1).click();    
            cy.wrap($option).find('h3').should('have.text', 'Step content #2')
            cy.wrap($option).find('[data-name="checkmark"]').should('have.length', '1')          
            cy.get('button').contains('prev').should('not.have.class', 'btn-disabled')
            cy.get('button').contains('next').should('not.have.class', 'btn-disabled')

            //Third step
            cy.wrap($option).find('.label-index').eq(2).click();
            cy.wrap($option).find('h3').should('have.text', 'Step content #3')
            cy.wrap($option).find('[data-name="checkmark"]').should('have.length', '2')
            cy.get('button').contains('prev').should('not.have.class', 'btn-disabled')
            cy.get('button').contains('next').should('not.have.class', 'btn-disabled')

            //Fourth step
            cy.wrap($option).find('.label-index').eq(3).click();
            cy.wrap($option).find('h3').should('have.text', 'Step content #4')
            cy.wrap($option).find('[data-name="checkmark"]').should('have.length', '3')
            cy.get('button').contains('prev').should('not.have.class', 'btn-disabled')
            cy.get('button').contains('next').should('have.class', 'btn-disabled')
        });
        //Horizontal stepper test ends
        //Left side vertical stepper starts
        cy.get('nb-card-body').eq(1).then($option=>{
            cy.wrap($option).find('.label-index').eq(0).as('firstStep')
            cy.wrap($option).find('.label-index').eq(1).as('secondStep')
            cy.wrap($option).find('.label-index').eq(2).as('thirdStep')

            cy.get('@firstStep').parent().should('have.class', 'ng-star-inserted')
            cy.get('@secondStep').parent().should('have.class', 'ng-star-inserted')
            cy.get('@thirdStep').parent().should('have.class', 'ng-star-inserted')

            cy.get('[formcontrolname="firstCtrl"]').type('random text')
            cy.get('@secondStep').click()
            cy.get('@firstStep').parent().should('have.class', 'completed')
            cy.get('@secondStep').parent().should('have.class', 'selected')

            cy.get('[formcontrolname="secondCtrl"]').type('random text')
            cy.get('@thirdStep').click()
            cy.get('@secondStep').parent().should('have.class', 'completed')
            cy.get('@thirdStep').parent().should('have.class', 'selected')

            cy.wrap($option).find('[type="submit"]').contains('Confirm').as('confBtn')
            cy.get('[formcontrolname="thirdCtrl"]').type('random text')
            cy.get('@confBtn').click()
            cy.get('@thirdStep').parent().should('have.class', 'completed')

            cy.wrap($option).find('h3').should('have.text', 'Wizard completed!')
        });
        //Left side vertical stepper ends
    });
});