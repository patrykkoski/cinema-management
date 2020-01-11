insert into role (id, name) values (1, 'ROLE_ADMIN');
insert into role (id, name) values (2, 'ROLE_USER');

insert into user (id, username, password, firstname, lastname, email) values (1, 'admin',
 '$2a$10$a/P6sdX5dnx8o1yg.c4sR.6UyEJfOvg.OCBhXiJnuEP3f1a1lh4cS', 'admin', 'admin', 'admin@test.pl');

insert into user (id, username, password, firstname, lastname, email) values (2, 'patryk',
 '$2a$10$a/P6sdX5dnx8o1yg.c4sR.6UyEJfOvg.OCBhXiJnuEP3f1a1lh4cS', 'patryk', 'koski', 'patryk@test.pl');

insert into user_roles (users_id, roles_id) values (1, 1);
insert into user_roles (users_id, roles_id) values (2, 2);

insert into movie (id, title, description, director, category, imageurl, duration) values (1, 'Transformers', 'An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.',
'Patryk Koski', 'Sensacyjny', 'https://images8.alphacoders.com/674/thumb-1920-674115.jpg', 120);
insert into movie (id, title, description, director, category, imageurl, duration) values (2, 'Batman', 'Opis filmu Transformers',
'Patryk Koski', 'Sensacyjny', 'https://images6.alphacoders.com/417/417263.jpg', 120);
insert into movie (id, title, description, director, category, imageurl, duration) values (3, 'Lord of The Rings', 'Opis filmu Transformers',
'Patryk Koski', 'Sensacyjny', 'https://images4.alphacoders.com/118/118904.jpg', 120);