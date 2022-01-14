/* Replace with your SQL commands */
create table users
(
    id         serial
        constraint users_pk
            primary key,
    first_name varchar,
    last_name  varchar,
    email      varchar,
    password   varchar,
    level      int
);

create unique index users_email_uindex
    on users (email);

