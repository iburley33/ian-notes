DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

CREATE TABLE instructors (
  department_id INT NOT NULL,
  department_name VARCHAR(30),
  PRIMARY KEY (department_id)
);

CREATE TABLE employee_data (
  id INT,
  first_name VARCHAR(30) NOT NULL,
  last_name INT,
  job_title VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  salary INT,
  manager VARCHAR(30) NOT NULL,
  FOREIGN KEY (_id)
  REFERENCES instructors(id)
  ON DELETE SET NULL
);
