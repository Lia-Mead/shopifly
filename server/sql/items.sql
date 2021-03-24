 DROP TABLE IF EXISTS items;

 CREATE TABLE items(
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description VARCHAR DEFAULT NULL,
      price INTEGER NOT NULL,
      img VARCHAR DEFAULT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      
      
INSERT INTO items (img, name, description, price) VALUES (
    'https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
    'Tropic',
    'Tropical plants',
    55
);

INSERT INTO items (img, name, description, price) VALUES (
    'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1090&q=80',
    'Desert',
    'Cactuses',
    'Are so cool.'
);

INSERT INTO items (img, name, description, price) VALUES (
    'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1875&q=80',
    'Plant',
    'Cool plant',
    500
);

INSERT INTO items (img, name, description, price) VALUES (
    'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1875&q=80',
    'Plant',
    'Tropical vibes',
    110
);

INSERT INTO items (img, name, description, price) VALUES (
    'https://images.unsplash.com/photo-1480072723304-5021e468de85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
    'GreenLover',
    'How we like us what makes us real',
    2.50
);
INSERT INTO items (url, username, title, description) VALUES (
    'https://images.unsplash.com/photo-1505066211281-ed125c006f4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    'YolandaHadid',
    'Greenhouse',
    33
);
INSERT INTO items (url, username, title, description) VALUES (
    'https://images.unsplash.com/photo-1510265119258-db115b0e8172?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'Bruno',
    'Sunny day in London',
  56
);
INSERT INTO items (img, name, description, price) VALUES (
    'https://images.unsplash.com/photo-1529303906282-705ca092db6f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80',
    'HungN',
    'Da Nang',
    22
);
INSERT INTO items (img, name, description, price) VALUES (
    'https://images.unsplash.com/photo-1586375063704-5ee4fb8b6edd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    'Shoeslover',
    'Need money for shoes',
  12
);

INSERT INTO items (img, name, description, price) VALUES (
    'https://images.unsplash.com/photo-1602164945488-322a0e0a09e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80',
    'Suburbian',
    'Buttes Chaumont',
    130
);

INSERT INTO items (img, name, description, price) VALUES (
    'https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'DonkeyKong',
    'Wadi Musa, Jordan',
   150
);

