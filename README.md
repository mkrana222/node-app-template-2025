# Node Application Template

This project is a Node.js application template setup with testing, linting, and multiple environments. It includes database connections for development, production, and test environments.

## Features

- Sequelize ORM Integration
- Node.js application template
- Testing setup
- Linting setup
- Multiple environment configurations
- Database connections for development, production, and test environments

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mkrana222/node_application_template.git
   ```
2. Install dependencies:
   ```sh
   cd node_application_template
   npm install
   ```

### Running the Application

#### Environment Variables

Before running the application, set up the following environment variables:

```sh
# .env file

# General
NODE_ENV=development

# Database

# For Development Environment
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password

# For Testing Environment
TEST_DB_HOST=localhost
TEST_DB_PORT=5432
TEST_DB_NAME=your_database_name
TEST_DB_USER=your_database_user
TEST_DB_PASSWORD=your_database_password

# For Production Environment
PROD_DB_HOST=localhost
PROD_DB_PORT=5432
PROD_DB_NAME=your_database_name
PROD_DB_USER=your_database_user
PROD_DB_PASSWORD=your_database_password

# Server
PORT=3000
```

#### Development Environment

```sh
npm run dev
```

#### Production Environment

```sh
npm start
```

#### Test Environment

```sh
npm test
```

## License

This project is licensed under the ISC License.
