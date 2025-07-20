-- Mock data for the Knauf Web Application

USE knauf_db;

-- Users
INSERT INTO Users (name, email, passwordHash, role, createdAt, updatedAt) VALUES
('Admin User', 'admin@knauf.com', '$2b$10$your_hashed_password', 'Admin', NOW(), NOW()),
('Worker User', 'worker@knauf.com', '$2b$10$your_hashed_password', 'Worker', NOW(), NOW()),
('Client User', 'client@knauf.com', '$2b$10$your_hashed_password', 'Client', NOW(), NOW());

-- Inventory
INSERT INTO Inventory (name, qty, type, createdAt, updatedAt) VALUES
('Drywall Screws', 5000, 'Fasteners', NOW(), NOW()),
('Joint Compound', 100, 'Materials', NOW(), NOW()),
('Fiberglass Tape', 50, 'Materials', NOW(), NOW());

-- Maintenance
INSERT INTO Maintenance (machine, status, description, reportedBy, createdAt, updatedAt) VALUES
('Forklift A', 'In progress', 'Engine is making a strange noise.', 2, NOW(), NOW()),
('Drywall Saw', 'Fixed', 'Blade was dull and has been replaced.', 2, NOW(), NOW());

-- Attendance
INSERT INTO Attendance (userId, date, status, createdAt, updatedAt) VALUES
(2, '2023-10-26', 'Present', NOW(), NOW()),
(2, '2023-10-27', 'Present', NOW(), NOW());

-- Orders
INSERT INTO Orders (clientId, status, paymentType, createdAt, updatedAt) VALUES
(3, 'Shipped', 'Credit Card', NOW(), NOW()),
(3, 'Processing', 'Net 30', NOW(), NOW());

-- Support
INSERT INTO Support (fromUserId, message, target, createdAt, updatedAt) VALUES
(3, 'Great service, very happy with the product quality!', 'admin', NOW(), NOW()),
(2, 'The new safety gear is much appreciated.', 'admin', NOW(), NOW());
