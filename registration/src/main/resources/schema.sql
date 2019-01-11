create table company
(
	id bigint auto_increment primary key not null,
	name varchar(255) not null,
	email varchar(255) not null,
	site varchar(255) not null,
	phone varchar(255) not null
);

create table USER_AUTH_DETAILS
(
  username varchar(255) not null,
	password varchar(255) not null,
	role varchar(255) not null
)