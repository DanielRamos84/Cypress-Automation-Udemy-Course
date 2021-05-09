describe('Suite of tests for nxg demo site',()=>{
    it('Visits the site', ()=>{
        cy.visit('/')
            .url().should('include', '/pages')
    })
    
    it('URL page assertion, header title and social media feed icons exist',()=>{
        cy.get('span.menu-title').contains('Layout')
            .invoke('text')
                .should('eq', 'Layout')

       cy.get('nb-layout-footer.fixed')
            .contains('Created with ♥ by ')
            .contains(' 2019')

        cy.get('[class="socials"]').within((social)=>{
            cy.wrap(social).find('[class="ion ion-social-github"]')
            cy.wrap(social).find('[class="ion ion-social-facebook"]')
            cy.wrap(social).find('[class="ion ion-social-twitter"]')
            cy.wrap(social).find('[class="ion ion-social-linkedin"]')
        })

        cy.get('span.menu-title').contains('Forms')
            .invoke('text')
                .should('eq', 'Forms')
            
        cy.get('span.menu-title').contains('Modal & Overlays')
            .invoke('text')
                .should('eq', 'Modal & Overlays')

        cy.get('span.menu-title').contains('Tables & Data')
            .invoke('text')
                .should('eq', 'Tables & Data')

        cy.get('span.menu-title').contains('Auth')
            .invoke('text')
                .should('eq', 'Auth')
        
    })
})