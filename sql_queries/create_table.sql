create table users  (
	id int primary key auto_increment,
    email varchar(50) unique,
    username varchar(50) unique,
    password varchar(50) unique,
    name varchar(50),
    gender varchar(10),
    location varchar(50),
    birthday date,
    work varchar(50),
    education varchar(50),
    skills varchar(50),
    github varchar(50),
    linkedin varchar(50),
    google varchar(50),
    twitter varchar(50),
    facebook varchar(50),
    summary varchar(50)
);

create table skills (
	id int primary key auto_increment,
    name varchar(50) unique,
    modules int not null,
    hours int not null
);

create table tests(
	id int primary key auto_increment,
    skill_id int not null,
    q1 text not null,
    q2 text not null,
    q3 text not null,
    q4 text not null,
    q5 text not null,
    q6 text not null,
    q7 text not null,
    q8 text not null,
    q9 text not null,
    q10 text not null,
    foreign key (skill_id) references skills(id) on delete cascade
);

create table scores (
	id int primary key auto_increment,
    score int not null,
    test_id int not null,
    user_id int not null,
    foreign key (test_id) references tests(id) on delete cascade,
    foreign key (user_id) references users(id) on delete cascade
);

CREATE TABLE basics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    skill_id INT NOT NULL,            
    h1 TEXT NOT NULL,
    s1 TEXT NOT NULL,
    durl1 TEXT NOT NULL,
    vurl1 TEXT NOT NULL,
    h2 TEXT NOT NULL,
    s2 TEXT NOT NULL,
    durl2 TEXT NOT NULL,
    vurl2 TEXT NOT NULL,
    h3 TEXT NOT NULL,
    s3 TEXT NOT NULL,
    durl3 TEXT NOT NULL,
    vurl3 TEXT NOT NULL,
    h4 TEXT NOT NULL,
    s4 TEXT NOT NULL,
    durl4 TEXT NOT NULL,
    vurl4 TEXT NOT NULL,
    h5 TEXT NOT NULL,
    s5 TEXT NOT NULL,
    durl5 TEXT NOT NULL,
    vurl5 TEXT NOT NULL,
    h6 TEXT NOT NULL,
    s6 TEXT NOT NULL,
    durl6 TEXT NOT NULL,
    vurl6 TEXT NOT NULL,
    h7 TEXT NOT NULL,
    s7 TEXT NOT NULL,
    durl7 TEXT NOT NULL,
    vurl7 TEXT NOT NULL,
    h8 TEXT NOT NULL,
    s8 TEXT NOT NULL,
    durl8 TEXT NOT NULL,
    vurl8 TEXT NOT NULL,
    h9 TEXT NOT NULL,
    s9 TEXT NOT NULL,
    durl9 TEXT NOT NULL,
    vurl9 TEXT NOT NULL,
    h10 TEXT NOT NULL,
    s10 TEXT NOT NULL,
    durl10 TEXT NOT NULL,
    vurl10 TEXT NOT NULL,
    total_time int not null,
    FOREIGN KEY (skill_id) REFERENCES skills(id) ON DELETE CASCADE
);

CREATE TABLE intermediate (
    id INT AUTO_INCREMENT PRIMARY KEY,
    skill_id INT NOT NULL,            
    h1 TEXT NOT NULL,
    s1 TEXT NOT NULL,
    durl1 TEXT NOT NULL,
    vurl1 TEXT NOT NULL,
    h2 TEXT NOT NULL,
    s2 TEXT NOT NULL,
    durl2 TEXT NOT NULL,
    vurl2 TEXT NOT NULL,
    h3 TEXT NOT NULL,
    s3 TEXT NOT NULL,
    durl3 TEXT NOT NULL,
    vurl3 TEXT NOT NULL,
    h4 TEXT NOT NULL,
    s4 TEXT NOT NULL,
    durl4 TEXT NOT NULL,
    vurl4 TEXT NOT NULL,
    h5 TEXT NOT NULL,
    s5 TEXT NOT NULL,
    durl5 TEXT NOT NULL,
    vurl5 TEXT NOT NULL,
    h6 TEXT NOT NULL,
    s6 TEXT NOT NULL,
    durl6 TEXT NOT NULL,
    vurl6 TEXT NOT NULL,
    h7 TEXT NOT NULL,
    s7 TEXT NOT NULL,
    durl7 TEXT NOT NULL,
    vurl7 TEXT NOT NULL,
    h8 TEXT NOT NULL,
    s8 TEXT NOT NULL,
    durl8 TEXT NOT NULL,
    vurl8 TEXT NOT NULL,
    h9 TEXT NOT NULL,
    s9 TEXT NOT NULL,
    durl9 TEXT NOT NULL,
    vurl9 TEXT NOT NULL,
    h10 TEXT NOT NULL,
    s10 TEXT NOT NULL,
    durl10 TEXT NOT NULL,
    vurl10 TEXT NOT NULL,
    total_time int not null,
    FOREIGN KEY (skill_id) REFERENCES skills(id) ON DELETE CASCADE
);

CREATE TABLE advanced (
    id INT AUTO_INCREMENT PRIMARY KEY,
    skill_id INT NOT NULL,            
    h1 TEXT NOT NULL,
    s1 TEXT NOT NULL,
    durl1 TEXT NOT NULL,
    vurl1 TEXT NOT NULL,
    h2 TEXT NOT NULL,
    s2 TEXT NOT NULL,
    durl2 TEXT NOT NULL,
    vurl2 TEXT NOT NULL,
    h3 TEXT NOT NULL,
    s3 TEXT NOT NULL,
    durl3 TEXT NOT NULL,
    vurl3 TEXT NOT NULL,
    h4 TEXT NOT NULL,
    s4 TEXT NOT NULL,
    durl4 TEXT NOT NULL,
    vurl4 TEXT NOT NULL,
    h5 TEXT NOT NULL,
    s5 TEXT NOT NULL,
    durl5 TEXT NOT NULL,
    vurl5 TEXT NOT NULL,
    h6 TEXT NOT NULL,
    s6 TEXT NOT NULL,
    durl6 TEXT NOT NULL,
    vurl6 TEXT NOT NULL,
    h7 TEXT NOT NULL,
    s7 TEXT NOT NULL,
    durl7 TEXT NOT NULL,
    vurl7 TEXT NOT NULL,
    h8 TEXT NOT NULL,
    s8 TEXT NOT NULL,
    durl8 TEXT NOT NULL,
    vurl8 TEXT NOT NULL,
    h9 TEXT NOT NULL,
    s9 TEXT NOT NULL,
    durl9 TEXT NOT NULL,
    vurl9 TEXT NOT NULL,
    h10 TEXT NOT NULL,
    s10 TEXT NOT NULL,
    durl10 TEXT NOT NULL,
    vurl10 TEXT NOT NULL,
    total_time int not null,
    FOREIGN KEY (skill_id) REFERENCES skills(id) ON DELETE CASCADE
);

create table paths(
	id int primary key auto_increment,
    user_id int not null,
    tag int, -- Active(0)/Future(1)
    basic int,
    advanced int,
    intermediate int,
    hours int,
    total_hours int ,
    modules int,
    total_modules int
);















