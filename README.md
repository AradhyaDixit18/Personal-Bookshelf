## Personal Bookshelf

This is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Features

- Search for books in real-time using the Open Library API.
- Add books to a personal bookshelf.
- Persistent bookshelf storage using localStorage.

## Setup Instructions

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

Make sure you have the following software installed:

- Node.js (v14 or later)
- npm (v6 or later)

### Clone the Repository

First, clone the repository to your local machine using git:

```bash
git clone https://github.com/AradhyaDixit18/personal-bookshelf.git
cd personal-bookshelf
```

### Install Dependencies

Navigate to the project directory and install the dependencies:

```bash
cd personal-bookshelf
npm install
```

### Running the Application

Once the dependencies are installed, you can run the application using the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser. If it doesn't open automatically, you can access it by navigating to `http://localhost:3000` in your browser.

### Project Structure

The project structure is organized as follows:

```
personal-bookshelf/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── BookCard.js
│   │   ├── BookSearch.js
│   │   ├── Bookshelf.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── index.css
├── package.json
├── README.md
```

### Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.

### License

This project is licensed under the MIT License. See the `LICENSE` file for details.

### Acknowledgements

- [Open Library API](https://openlibrary.org/developers/api)
- [Create React App](https://create-react-app.dev/)

Feel free to open an issue if you encounter any problems or have questions!

