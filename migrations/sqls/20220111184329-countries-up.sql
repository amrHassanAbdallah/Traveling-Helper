/* Replace with your SQL commands */

create table countries
(
    id          serial
        constraint countries_pk
            primary key,
    name        varchar,
    continental varchar
);

insert into countries (name,continental) values ('egypt','africa');