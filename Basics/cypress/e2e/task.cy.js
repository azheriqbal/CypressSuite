

describe('Task Management', ()=>{
    it('Should open and close the new task modal', () => {
        cy.visit('http://localhost:5173');
        cy.contains('Add Task').click();
        cy.get('.backdrop').click({force:true});
        cy.get('.backdrop').should('not.exist');
    });

    it('Should open and close the new task modal', () => {
        cy.visit('http://localhost:5173');
        cy.contains('Add Task').click();
        cy.contains('Cancel').click();
        cy.get('.backdrop').should('not.exist');
        cy.get('.modal').should('not.exist');
    });

    it('Should be able to create new task', () => {

        let  task = 'New task';
        let desc= 'Some text and description';
        cy.visit('http://localhost:5173');
        cy.contains('Add Task').click();
        cy.get('#title').type(task);
        cy.get('#summary').type('Some text and description');
        cy.get('.modal').contains('Add Task').click();
        cy.get('.task').should('have.length',1);
        cy.get('.task h2').contains(task);
        cy.get('.task p').contains(desc);
        cy.get('.backdrop').should('not.exist');
        cy.get('.modal').should('not.exist');
 
    }); 

    it('should validate user input', () => {
        cy.visit('http://localhost:5173');
        cy.contains('Add Task').click();
        cy.get('.modal').contains('Add Task').click();
        cy.contains('Please provide values');

    });

    it('should filter tasks', () => {
        let  task = 'New task';
        let desc= 'Some text and description';
        cy.visit('http://localhost:5173');
        cy.contains('Add Task').click();
        cy.get('#title').type(task);
        cy.get('#summary').type(desc);
        cy.get('#category').select('urgent');
        cy.get('.modal').contains('Add Task').click();
        cy.get('.task').should('have.length',1);
        cy.get('#filter').select('moderate');
        cy.get('.task').should('have.length',0);
        cy.contains('No tasks found!');
        cy.get('#filter').select('urgent');
        cy.get('.task').should('have.length',1);
        cy.get('#filter').select('All');
        cy.get('.task').should('have.length',1);
     });

     it.only('Should add multiple tasks', () => {
         
        
        cy.visit('http://localhost:5173');
        cy.contains('Add Task').click();
        cy.get('#title').type('Task - 1');
        cy.get('#summary').type('Description - 1');
        cy.get('.modal').contains('Add Task').click();

        cy.contains('Add Task').click();
        cy.get('#title').type('Task - 2');
        cy.get('#summary').type('Description - 2');
        cy.get('.modal').contains('Add Task').click();
        cy.get('.task').eq(0).contains('Task - 1');
        cy.get('.task').eq(1).contains('Task - 2');




     });
    
});