insert into role (id, name) values (1, 'ROLE_ADMIN');
insert into role (id, name) values (2, 'ROLE_USER');

insert into user (id, username, password, firstname, lastname, email) values (1, 'admin',
 '$2a$10$a/P6sdX5dnx8o1yg.c4sR.6UyEJfOvg.OCBhXiJnuEP3f1a1lh4cS', 'admin', 'admin', 'admin@test.pl');

insert into user_roles (users_id, roles_id) values (1, 1);

insert into movie (id, title, description, director, category, imageurl) values (1, 'Transformers', 'Opis filmu Transformers',
'Patryk Koski', 'Sensacyjny', 'https://images8.alphacoders.com/674/thumb-1920-674115.jpg');
insert into movie (id, title, description, director, category, imageurl) values (2, 'Batman', 'Opis filmu Transformers',
'Patryk Koski', 'Sensacyjny', 'https://images6.alphacoders.com/417/417263.jpg');
insert into movie (id, title, description, director, category, imageurl) values (3, 'Lord of The Rings', 'Opis filmu Transformers',
'Patryk Koski', 'Sensacyjny', 'https://images4.alphacoders.com/118/118904.jpg');