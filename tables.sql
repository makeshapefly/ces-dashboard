CREATE TABLE users (
  id uuid DEFAULT gen_random_uuid(),
  first_name VARCHAR(100),
  last_name  VARCHAR(100),
  email VARCHAR(100),
  created_at DATE,
  organisation integer,
  PRIMARY KEY (id),
  CONSTRAINT fk_organisation
      FOREIGN KEY(organisation)
        REFERENCES organisation(id)
);

/*insert into users(first_name, last_name, email, organisation) values ('Tony', 'Turner', 'turner2448@hotmail.com', 1) */

CREATE TABLE organisation (
  id SERIAL PRIMARY KEY,
  org_name VARCHAR(100) NOT NULL,
  created_at DATE
);

/*insert into organisation(org_name, created_at) values ('NONE', '2024-12-06') */