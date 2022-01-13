/* Replace with your SQL commands */
create table places
(
    id          serial
        constraint places_pk
            primary key,
    country_id  int
        constraint places_countries_id_fk
            references countries
            on delete cascade,
    name        varchar,
    description varchar,
    location    geography
);

insert into places ( country_id, name, description, location) values (1,'ay jaga','fdsfsd fdsf sd','SRID=4326;POINT(32.610168 25.728158)');