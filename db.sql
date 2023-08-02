create table greetings(
id integer PRIMARY KEY  AUTOINCREMENT,
language text,
greeting text
);
select * from greetings;

select count (*) from greetings;

insert into greetings (language,greeting) values ('zulu', 'Sawubona');

insert into greetings (language,greeting) values ('Arabic', 'Marhaba');

insert into greetings (language,greeting) values ('frensh', 'Salut');

insert into greetings (language,greeting) values ('Italy', 'Ciao');

insert into greetings (language,greeting) values ('Ni hao', 'china');

