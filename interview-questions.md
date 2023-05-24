# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: Super is also referred to as the parent class, and by calling it we pass on traits to the child class, this process of passing attributes to the child class is known as inheritance.

Researched answer: It calls a method from the parent class with the same name as the method that calls super. This is how attributes are passed to the child class. It can only be used inside of a method, and it returns the result from calling the parent method. It can be called multiple times.  


2. What is a gem?

Your answer: Dependencies used to build a ruby app

Researched answer: Ruby gems are open source libraries that contain Ruby code, and allow programmers to use that code within their programs without explicitly inserting that code themselves. 


3. What is a relational database? Are there other kinds of databases?

Your answer: A database is a place to store data.

Researched answer: A relational db is one that is based on a relational model - each row in a relational db is a unique instance and is recorded with a unique ID known as the primary key. In relational models, the logical data structures are separate from the physical storage structures, which means that physical data storage can be managed without affecting access to the data as a logical structure. The relational model is best for maintaining data consistency across applications and database instances. Another type of db is a physical db. 

4. What are primary keys? Why purpose does a primary key serve?

Your answer: Primary keys are unique identifiers in a database. They ensure faster sorting, searching, and querying operations. They cannot be overwritten - once assigned to an object, they cannot be unassigned, but they can be deleted(along with the object)

Researched answer: A primary key is a column that uniquely identifies each row in a table. They serve the purpose of uniquely identifiying rowsn in a table.

5. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: 
Get- read
post- create
put- update
patch- update
delete- delete

Researched answer:
Get- Used to request data. Read only.
post- Used to create a new resourse, often used in form submissions. Create
push-Used to create or replace a resource. Update
patch- Used to update a resourse, and should only include the info to be updated. Update.
delete- Used to delete a resourse. Delete.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: Used to ensure that only clean and valid data is stored in the db. Model validations are checked to be working properly with model specs.

2. RESTful routes: A set of standards used to create efficient, reusable routes. It aims to map http methods with crud actions together in a conventional pattern. 

3. ERB: A templating system for ruby

4. Params: Parameters

5. API: Type of software interface that allows for two or more programs to communicate.
