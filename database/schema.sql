CREATE DATABASE IF NOT EXISTS knauf_db;

USE knauf_db;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    passwordHash VARCHAR(255) NOT NULL,
    role ENUM('Admin', 'Worker', 'Client') NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

CREATE TABLE Inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    qty INT NOT NULL,
    type VARCHAR(255),
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

CREATE TABLE Maintenance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    machine VARCHAR(255) NOT NULL,
    status ENUM('In progress', 'Fixed', 'Waiting') NOT NULL,
    description TEXT,
    reportedBy INT,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (reportedBy) REFERENCES Users(id)
);

CREATE TABLE Attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    date DATE NOT NULL,
    status ENUM('Present', 'Absent') NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(id)
);

CREATE TABLE Forms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    formData JSON,
    date DATE NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(id)
);

CREATE TABLE Orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    clientId INT,
    status VARCHAR(255) NOT NULL,
    paymentType VARCHAR(255),
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (clientId) REFERENCES Users(id)
);

CREATE TABLE Checklist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    completedItems JSON,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(id)
);

CREATE TABLE Support (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fromUserId INT,
    message TEXT,
    target ENUM('admin', 'client', 'worker') NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (fromUserId) REFERENCES Users(id)
);
