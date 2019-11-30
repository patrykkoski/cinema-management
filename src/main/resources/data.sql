insert into role (id, name) values (1, 'ROLE_ADMIN');
insert into role (id, name) values (2, 'ROLE_USER');

insert into user (id, username, password, firstname, lastname, email) values (1, 'admin',
 '$2a$10$a/P6sdX5dnx8o1yg.c4sR.6UyEJfOvg.OCBhXiJnuEP3f1a1lh4cS', 'admin', 'admin', 'admin@test.pl');

insert into user_roles (users_id, roles_id) values (1, 1);