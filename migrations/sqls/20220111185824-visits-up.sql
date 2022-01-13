/* Replace with your SQL commands */
create table visits
(
    id          serial
        constraint visits_pk
            primary key,
    place_id    int
        constraint visits_places_id_fk
            references places (id),
    user_id     int
        constraint visits_users_id_fk
            references users (id),
    rate        int,
    description varchar
);
