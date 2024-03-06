# Redux Toolkit Practice

This repository serves as a practice project for implementing Redux Toolkit in a React application. The project is divided into two main sections: adding a user and displaying the user list.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

### Add User

In this section, users can input a username and add it to the list. The UI consists of an input field with a placeholder "Add username" and a button labeled "Add User."

### Display User List

The second portion of the project displays the list of added users. Users are listed in a simple format, allowing for easy viewing.

## Project Structure

The project is organized into the following files:

- **`store.js`:** Configures and exports the Redux store using Redux Toolkit's `configureStore` function.
  
- **`slice.js`:** Defines the Redux slice including reducers, actions, and selectors for managing user-related state.

- **`provider.js`:** Wraps the application with the Redux Provider, ensuring the Redux store is available to all components.

Feel free to explore and expand upon this structure as needed.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/redux-toolkit-practice.git
```

2. Install dependencies:

```bash
cd redux-toolkit-practice
npm install
```

3. Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Usage

1. Navigate to the "Add User" section.
2. Enter a username in the input field.
3. Click the "Add User" button to add the user to the list.
4. Switch to the "Display User List" section to view the updated list.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to enhance the project.

## License

This project is licensed under the [MIT License](LICENSE).
